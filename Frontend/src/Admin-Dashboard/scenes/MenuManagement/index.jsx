import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Typography,
  IconButton,
  Stack,
} from "@mui/material";
import { Add, Edit, Delete } from "@mui/icons-material";

const defaultForm = {
  id: null,
  title: "",
  path: "",
  type: "link",
  icon: "",
  parent_id: "",
  order_index: 0,
  level: 0,
};

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const [form, setForm] = useState(defaultForm);

  const fetchMenuItems = async () => {
    try {
      const res = await axios.get("http://localhost:3000/navrouter/menu");
      setMenuItems(res.data || []);
    } catch (error) {
      console.error("Failed to fetch menu items:", error);
    }
  };

  useEffect(() => {
    fetchMenuItems();
  }, []);

  const handleOpenDialog = (item = null) => {
    setForm(item ? { ...item, parent_id: item.parent_id || "" } : defaultForm);
    setOpenDialog(true);
  };
/* 
  const handleSave = async () => {
    try {
      const payload = {
        ...form,
        parent_id: form.parent_id === "" ? null : form.parent_id,
      };

      if (form.id) {
        await axios.put(`http://localhost:3000/navrouter/menu-items/${form.id}`, payload);
      } else {
        await axios.post("http://localhost:3000/navrouter/add-menu-items", payload);
      }

      setOpenDialog(false);
      setForm(defaultForm);
      fetchMenuItems();
    } catch (error) {
      console.error("Failed to save menu item:", error);
    }
  }; */

 /*  const handleDelete = async (id) => {
    const confirm = window.confirm("Are you sure you want to delete this menu item?");
    if (!confirm) return;

    try {
      await axios.delete(`http://localhost:3000/navrouter/delete-menu-items/${id}`);
      fetchMenuItems();
    } catch (error) {
      console.error("Failed to delete menu item:", error);
    }
  }; */

  const renderNestedItems = (items, parentId = null, level = 0) => {
    return items
      .filter((item) => item.parent_id === parentId)
      .sort((a, b) => a.order_index - b.order_index)
      .map((item) => (
        <Box key={item.id} ml={level * 3} mb={1}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography variant="body1">{item.title}</Typography>
            <IconButton size="small" onClick={() => handleOpenDialog(item)}>
              <Edit fontSize="small" />
            </IconButton>
            <IconButton size="small" /* onClick={() => handleDelete(item.id)} */>
              <Delete fontSize="small" />
            </IconButton>
          </Stack>
          {renderNestedItems(items, item.id, level + 1)}
        </Box>
      ));
  };

  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        Menu Management
      </Typography>
      <Button variant="contained" startIcon={<Add />} onClick={() => handleOpenDialog()}>
        Add Menu Item
      </Button>

      <Box mt={3}>{renderNestedItems(menuItems)}</Box>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} fullWidth maxWidth="sm">
        <DialogTitle>{form.id ? "Edit" : "Add"} Menu Item</DialogTitle>
        <DialogContent dividers>
          <Stack spacing={2}>
            <TextField
              label="Title"
              fullWidth
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
            />
            <TextField
              label="Path"
              fullWidth
              value={form.path}
              onChange={(e) => setForm({ ...form, path: e.target.value })}
            />
            <TextField
              label="Icon"
              fullWidth
              value={form.icon}
              onChange={(e) => setForm({ ...form, icon: e.target.value })}
            />
            <FormControl fullWidth>
              <InputLabel>Type</InputLabel>
              <Select
                value={form.type}
                label="Type"
                onChange={(e) => setForm({ ...form, type: e.target.value })}
              >
                <MenuItem value="link">Link</MenuItem>
                <MenuItem value="dropdown">Dropdown</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Parent</InputLabel>
              <Select
                value={form.parent_id}
                onChange={(e) => setForm({ ...form, parent_id: e.target.value })}
              >
                <MenuItem value="">None (Top Level)</MenuItem>
                {menuItems
                  .filter((item) => item.id !== form.id)
                  .map((item) => (
                    <MenuItem key={item.id} value={item.id}>
                      {item.title}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <TextField
              label="Order Index"
              type="number"
              fullWidth
              value={form.order_index}
              onChange={(e) => setForm({ ...form, order_index: Number(e.target.value) })}
            />
            <TextField
              label="Level"
              type="number"
              fullWidth
              value={form.level}
              onChange={(e) => setForm({ ...form, level: Number(e.target.value) })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
          <Button /* onClick={handleSave} */ variant="contained">
            {form.id ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default MenuManagement;
