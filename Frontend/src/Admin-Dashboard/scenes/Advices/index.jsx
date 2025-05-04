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
  MenuItem,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const AdviceList = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [parents, setParents] = useState([]);
  const [pdf, setpdf] = useState(null);
  const [rows, setRows] = useState([]);
  const [addOpen, setAddOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [parentId, setParentID] = useState(null);
  const [state, setstate] = useState("");
  const [caste, setCaste] = useState("");
  const [selectedRow, setSelectedRow] = useState(null);

  useEffect(() => {
    fetchParents();
  }, []);

  const fetchParents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/advices/parents");
      setParents(response.data);
      // Flatten parent and children into rows for DataGrid
      const rowsData = [];
      for (const parent of response.data) {
        rowsData.push({ ...parent, type: "Parent" });
        const childResponse = await axios.get(
          `http://localhost:3000/advices/children/${parent.id}`
        );
        for (const child of childResponse.data) {
          rowsData.push({ ...child, parentName: parent.state, type: "Child" });
        }
      }
      setRows(rowsData);
    } catch (error) {
      console.error(error);
    }
  };

  const handleAddAdvice = async () => {
    try {
      const formData = new FormData();
      formData.append("caste", caste);
      formData.append("state", state);
      formData.append("pdf", pdf);
      formData.append("parent_id", parentId);
      await axios.post("http://localhost:3000/advices/add", formData);
      setpdf(null);
      setCaste("");
      setstate("");
      setParentID(null);
      setAddOpen(false);
      fetchParents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditAdvice = async () => {
    try {
      await axios.put(`http://localhost:3000/advices/${selectedRow.id}`, {
        state: newAdvice.state,
        caste: newAdvice.caste,
      });

      setEditOpen(false);
      setSelectedRow(null);
      fetchParents();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAdvice = async (id) => {
    if (window.confirm("Are you sure you want to delete this advice?")) {
      try {
        await axios.delete(`http://localhost:3000/advices/${id}`);
        fetchParents();
      } catch (error) {
        console.error(error);
      }
    }
  };

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    { field: "state", headerName: "State/Region", flex: 1 },
    { field: "caste", headerName: "Caste/Community", flex: 1 },
    { field: "parentName", headerName: "Parent State", flex: 1 },
    {
      field: "file_name",
      headerName: "PDF",
      width: 150,
      renderCell: (params) =>
        params.value ? (
          <a
            href={`http://localhost:3000${params.file_name}`}
            target="_blank"
            rel="noreferrer"
          >
            View PDF
          </a>
        ) : (
          "No PDF"
        ),
    },
    { field: "type", headerName: "Type", flex: 1 },
    {
      field: "actions",
      headerName: "Actions",
      flex: 1,
      renderCell: ({ row }) => (
        <>
          <IconButton
            color="primary"
            onClick={() => {
              setSelectedRow(row);
              
              setEditOpen(true);
            }}
          >
            <EditIcon />
          </IconButton>
          <IconButton color="error" onClick={() => handleDeleteAdvice(row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];

  return (
    <>
      <Box m="20px">
        <Header title="Manage Advices" subtitle="States and Castes" />
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
              Add Advice
            </Button>
          </Box>
          <DataGrid
            rows={rows}
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
      </Box>

      {/* Add Dialog */}
      <Dialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add New Advice</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="State/Region"
            value={state}
            onChange={(e) => setstate(e.target.value)}
            required
          />
          <TextField
            label="Caste/Community"
            value={caste}
            onChange={(e) => setCaste(e.target.value)}
          />
          <TextField
            select
            label="Parent State (Optional)"
            value={parentId}
            onChange={(e) => {
              setParentID(e.target.value);
              
            }}
          >
            <MenuItem value="">No Parent (Top Level State)</MenuItem>
            {parents.map((parent) => (
              <MenuItem key={parent.id} value={parent.id}>
                {parent.state}
              </MenuItem>
            ))}
          </TextField>
          <Button variant="outlined" component="label">
            Upload PDF
            <input
              type="file"
              hidden
              accept="application/pdf"
              onChange={(e) => setpdf(e.target.files[0])}
              required
            />
          </Button>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setAddOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleAddAdvice}>
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* Edit Dialog */}
      <Dialog
        open={editOpen}
        onClose={() => setEditOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Edit Advice</DialogTitle>
        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          <TextField
            label="State/Region"
            value={state}
            onChange={(e) =>
              setstate(e.target.value)
            }
            required
          />
          <TextField
            label="Caste/Community"
            value={caste}
            onChange={(e) =>
              setCaste(e.target.value)
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setEditOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={handleEditAdvice}
          >
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AdviceList;
