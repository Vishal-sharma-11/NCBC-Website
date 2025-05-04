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
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Header } from "../../components";
import AddIcon from "@mui/icons-material/Add";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import DeleteIcon from "@mui/icons-material/Delete";

const Notice = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rows, setRows] = useState([]);
  const [notice, setNotice] = useState("");
  const [start_date, setStart_date] = useState("");
  const [end_date, setEnd_date] = useState("");
  const [addOpen, setAddOpen] = useState(false);

  const fetchRules = async () => {
    try {
      const res = await axios.get("http://localhost:3000/notice/");
      console.log(res);
      setRows(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchRules();
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("notice", notice);
    formData.append("start_date", start_date);
    formData.append("end_date", end_date);

    await fetch("http://localhost:3000/notice/add", {
      method: "POST",
      body: formData,
    });

    setEnd_date("");
    setStart_date("");
    setNotice("");
    fetchRules();
    setAddOpen(false);
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/notice/${id}`);

    fetchRules();
  };
  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "notice",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "start_date", headerName: "start_date" },
    { field: "expiry_date", headerName: "expiry_date" },

    {
      field: "actions",
      headerName: "Actions",

      renderCell: ({ row }) => (
        <>
          <IconButton color="error" onClick={() => handleDelete(row.id)}>
            <DeleteIcon />
          </IconButton>
        </>
      ),
    },
  ];
  return (
    <>
      <Box m="20px">
        <Header title="Manage Ministry's order" subtitle="List" />
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
              Add data
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

      <Dialog
        open={addOpen}
        onClose={() => setAddOpen(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Add New Row</DialogTitle>

        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          {/* Rule Title */}
          <TextField
            label="Notice"
            variant="outlined"
            value={notice}
            onChange={(e) => setNotice(e.target.value)}
            required
          />
          <TextField
            label="Start_Date"
            type="date"
            variant="outlined"
            value={start_date}
            onChange={(e) => setStart_date(e.target.value)}
            required
          />
          <TextField
            type="date"
            label="End_Date"
            variant="outlined"
            value={end_date}
            onChange={(e) => setEnd_date(e.target.value)}
            required
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setAddOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleUpload}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Notice;
