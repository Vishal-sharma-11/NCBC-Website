import {
  Box,
  IconButton,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";
import { Header } from "../../components";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { useEffect, useState } from "react";
import axios from "axios";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [editRow, setEditRow] = useState({
    id: "",
    name: "",
    intercom: "",
    designation: "",
    email: "",
    room_no: "",
    telephone: "",
    category: "",
  });
  const [addOpen, setAddOpen] = useState(false);
  const [newContact, setNewContact] = useState({
    name: "",
    intercom: "",
    designation: "",
    email: "",
    roomNo: "",
    telephone: "",
    category: "",
  });

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/auth/contact");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/auth/deleteContact/${id}`);
      fetchContactData();
    } catch (error) {
      console.error("Error deleting data", error);
    }
  };

  const handleEditClick = (row) => {
    setEditRow(row);
    setOpen(true);
  };

  const handleInputChange = (e) => {
    setEditRow({ ...editRow, [e.target.name]: e.target.value });
  };

  const handleUpdate = async () => {
    try {
      await axios.put(
        `http://localhost:3000/auth/contact/${editRow.id}`,
        editRow
      );
      fetchContactData(); // refresh data
      setOpen(false);
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  //add contact
  const handleNewInputChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };

  const handleAddContact = async () => {
    try {
      await axios.post("http://localhost:3000/auth/addContact", newContact);
      fetchContactData(); // Refresh table
      setAddOpen(false);
      setNewContact({
        name: "",
        intercom: "",
        designation: "",
        email: "",
        room_no: "",
        telephone: "",
        category: "",
      });
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "intercom", headerName: "Intercom" },
    { field: "designation", headerName: "Designation" },
    { field: "email", headerName: "Email", flex: 1 },
    { field: "room_no", headerName: "Room No.", flex: 1 },
    { field: "telephone", headerName: "Telephone", flex: 1 },
    { field: "category", headerName: "Category", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <>
          <IconButton color="primary" onClick={() => handleEditClick(row)}>
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        mt="40px"
        height="75vh"
        maxWidth="100%"
        sx={{
          "& .MuiDataGrid-root": { border: "none" },
          "& .MuiDataGrid-cell": { border: "none" },
          "& .name-column--cell": { color: colors.greenAccent[300] },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.gray[100]} !important`,
          },
        }}
      >
        <Box display="flex" justifyContent="flex-end" mb={2}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<AddIcon />}
            onClick={() => setAddOpen(true)}
          >
            Add Contact
          </Button>
        </Box>
        <DataGrid
          rows={data}
          columns={columns}
          getRowId={(row) => row.id}
          components={{ Toolbar: GridToolbar }}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          checkboxSelection
        />
      </Box>

      {/* Edit Dialog */}
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Contact</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="Name"
            name="name"
            value={editRow.name}
            onChange={handleInputChange}
          />
          <TextField
            label="Intercom"
            name="intercom"
            value={editRow.intercom}
            onChange={handleInputChange}
          />
          <TextField
            label="Designation"
            name="designation"
            value={editRow.designation}
            onChange={handleInputChange}
          />
          <TextField
            label="Email"
            name="email"
            value={editRow.email}
            onChange={handleInputChange}
          />
          <TextField
            label="Room No"
            name="room_no"
            value={editRow.room_no}
            onChange={handleInputChange}
          />
          <TextField
            label="Telephone"
            name="telephone"
            value={editRow.telephone}
            onChange={handleInputChange}
          />
          <TextField
            label="Category"
            name="category"
            value={editRow.category}
            onChange={handleInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpdate} variant="contained" color="primary">
            Update
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add New Contact</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="Name"
            name="name"
            value={newContact.name}
            onChange={handleNewInputChange}
          />
          <TextField
            label="Intercom"
            name="intercom"
            value={newContact.intercom}
            onChange={handleNewInputChange}
          />
          <TextField
            label="Designation"
            name="designation"
            value={newContact.designation}
            onChange={handleNewInputChange}
          />
          <TextField
            label="Email"
            name="email"
            value={newContact.email}
            onChange={handleNewInputChange}
          />
          <TextField
            label="Room No"
            name="room_no"
            value={newContact.room_no}
            onChange={handleNewInputChange}
          />
          <TextField
            label="Telephone"
            name="telephone"
            value={newContact.telephone}
            onChange={handleNewInputChange}
          />
          <TextField
            label="Category"
            name="category"
            value={newContact.category}
            onChange={handleNewInputChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleAddContact}
            variant="contained"
            color="primary"
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Contacts;
