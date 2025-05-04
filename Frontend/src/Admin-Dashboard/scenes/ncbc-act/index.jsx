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
  
  const NcbcAct = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [rows, setRows] = useState([]);
    const [title, setTitle] = useState("");
    const [pdf, setPdf] = useState(null);
    const [addOpen, setAddOpen] = useState(false);
  
    const fetchRules = async () => {
      try {
        const res = await axios.get("http://localhost:3000/ncbc-act/");
        
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
      formData.append("title", title);
      formData.append("pdf", pdf);
  
      await fetch("http://localhost:3000/ncbc-act/add", {
        method: "POST",
        body: formData,
      });
  
      setTitle("");
      setPdf(null);
      fetchRules();
      setAddOpen(false);
    };
    const handleDelete = async (id) => {
      await axios.delete(`http://localhost:3000/ncbc-act/${id}`);
  
      fetchRules();
    };
    const columns = [
      { field: "id", headerName: "ID", flex: 0.5 },
      {
        field: "title",
        headerName: "Title",
        flex: 1,
        cellClassName: "name-column--cell",
      },
      { field: "pdf_url", headerName: "pdf_url" },
      { field: "created_at", headerName: "Created At" },
      {
        field: "view_pdf",
        headerName: "View PDF",
        flex: 1,
        renderCell: ({ row }) => (
          <Button
            variant="outlined"
            color="secondary"
            size="small"
            onClick={() =>
              window.open(`http://localhost:3000${row.pdf_url}`, "_blank")
            }
          >
            View PDF
          </Button>
        ),
      },
      {
        field: "actions",
        headerName: "Actions",
        flex: 1,
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
          <Header title="Manage NCBC Act" subtitle="List" />
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
              label="Title"
              variant="outlined"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
  
            {/* PDF File Upload */}
            <Button variant="outlined" component="label">
              Upload PDF
              <input
                type="file"
                hidden
                accept="application/pdf"
                onChange={(e) => setPdf(e.target.files[0])}
                required
              />
            </Button>
            {pdf && <span>Selected File: {pdf.name}</span>}
          </DialogContent>
  
          <DialogActions>
            <Button onClick={() => setAddOpen(false)} color="secondary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={handleUpload}
            >
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  };
  
  export default NcbcAct;
  