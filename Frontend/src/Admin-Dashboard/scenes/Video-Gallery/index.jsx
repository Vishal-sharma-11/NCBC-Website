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

const VideoGallery = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [rules, setRules] = useState([]);
  const [title, setTitle] = useState("");
  const [video, setVideo] = useState(null);
  const [addOpen, setAddOpen] = useState(false);

  const fetchRules = async () => {
    try {
      const res = await axios.get("http://localhost:3000/video/");

      setRules(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("video", video);

    await axios.post("http://localhost:3000/video/upload", formData);

    setTitle("");
    setVideo(null);
    setAddOpen(false);
    fetchRules();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/video/${id}`);

    fetchRules();
  };

  useEffect(() => {
    fetchRules();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.5 },
    {
      field: "title",
      headerName: "Title",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "file_path", headerName: "pdf_url" },
    { field: "uploaded_at", headerName: "Created At", flex: 1 },
    {
      field: "view_video",
      headerName: "View Video",
      flex: 1,
      renderCell: ({ row }) => (
        <Button
          variant="outlined"
          color="secondary"
          size="small"
          onClick={() =>
            window.open(`http://localhost:3000${row.file_path}`, "_blank")
          }
        >
          View Video
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
        <Header title="Video Gallery" subtitle="List" />
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
              Add Video
            </Button>
          </Box>
          <DataGrid
            rows={rules}
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
        <DialogTitle>Add New Rule</DialogTitle>

        <DialogContent
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
        >
          {/* Video Title */}
          <TextField
            label="Video Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />

          {/* Video File Upload */}
          <Button variant="outlined" component="label">
            Upload Video
            <input
              type="file"
              hidden
              accept="video/*"
              onChange={(e) => setVideo(e.target.files[0])}
              required
            />
          </Button>

          {video && <span>Selected File: {video.name}</span>}
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setAddOpen(false)} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleUpload} variant="contained" color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default VideoGallery;
