/* eslint-disable react/prop-types */
import { Avatar, Box, IconButton, Typography, useTheme } from "@mui/material";
import { useContext, useState } from "react";
import { tokens } from "../../../theme";
import { Menu, SubMenu, MenuItem, Sidebar } from "react-pro-sidebar";
import {
  BarChartOutlined,
  CalendarTodayOutlined,
  ContactsOutlined,
  DashboardOutlined,
  DonutLargeOutlined,
  HelpOutlineOutlined,
  MapOutlined,
  MenuOutlined,
  PeopleAltOutlined,
  PersonOutlined,
  ReceiptOutlined,
  TimelineOutlined,
  WavesOutlined,
} from "@mui/icons-material";
// import avatar from "../../../assets/images/avatar.png";
// import logo from "../../../assets/images/logo.png";
import Item from "./Item";
import { ToggledContext } from "../../../App";

const SideBar = () => {
  const [collapsed, setCollapsed] = useState(false);
  const { toggled, setToggled } = useContext(ToggledContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const username = localStorage.getItem("username");
  return (
    <Sidebar
      backgroundColor={colors.primary[400]}
      rootStyles={{
        border: 0,
        height: "100%",
      }}
      collapsed={collapsed}
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="md"
    >
      <Menu
        menuItemStyles={{
          button: { ":hover": { background: "transparent" } },
        }}
      >
        <MenuItem
          rootStyles={{
            margin: "10px 0 20px 0",
            color: colors.primary[400],
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <IconButton onClick={() => setCollapsed(!collapsed)}>
              <MenuOutlined />
            </IconButton>
          </Box>
        </MenuItem>
      </Menu>
      {!collapsed && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            mb: "25px",
          }}
        >
          {/* <Avatar
            alt="avatar"
            src={avatar}
            sx={{ width: "100px", height: "100px" }}
          /> */}
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3" fontWeight="bold" color={colors.gray[100]}>
              {username}
            </Typography>
            <Typography
              variant="h6"
              fontWeight="500"
              color={colors.greenAccent[500]}
            >
              Admin
            </Typography>
          </Box>
        </Box>
      )}

      <Box mb={5} pl={collapsed ? undefined : "5%"}>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Dashboard"
            path="/admin/dashboard"
            colors={colors}
            icon={<DashboardOutlined />}
          />
        </Menu>
        <Typography
          variant="h6"
          color={colors.gray[300]}
          sx={{ m: "15px 0 5px 20px" }}
        >
          {!collapsed ? "Data" : " "}
        </Typography>{" "}
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
          }}
        >
          <Item
            title="Manage Team"
            path="/admin/dashboard/team"
            colors={colors}
            icon={<PeopleAltOutlined />}
          />

          <Item
            title="Invoices Balances"
            path="/admin/dashboard/invoices"
            colors={colors}
            icon={<ReceiptOutlined />}
          />
        </Menu>
        <Menu
          menuItemStyles={{
            button: {
              ":hover": {
                color: "#868dfb",
                background: "transparent",
                transition: ".4s ease",
              },
            },
            subMenuContent: {
              backgroundColor: colors.primary[400], // Match sidebar background
            },
          }}
        >
          <SubMenu
            label="CMS"
            icon={<DonutLargeOutlined />}
            rootStyles={{
              color: colors.gray[100],
            }}
          >
            <Item
              title="Profile Form"
              path="/admin/dashboard/form"
              colors={colors}
              icon={<PersonOutlined />}
            />
            <Item
              title="Contact Us"
              path="/admin/dashboard/contacts"
              colors={colors}
              icon={<ContactsOutlined />}
            />
            <Item
              title="About Us"
              path="/admin/dashboard/aboutus"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Rules of Procedure"
              path="/admin/dashboard/rules-of-procedure"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Organizational Structure"
              path="/admin/dashboard/organizational-structure"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Mandal Commission"
              path="/admin/dashboard/mandal-commission"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Annual Report"
              path="/admin/dashboard/annual-report"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Commission Report"
              path="/admin/dashboard/commission-report"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Judgement/Hearing"
              path="/admin/dashboard/judgement-hearing"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Centralist"
              path="/admin/dashboard/centralist"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Memorandum"
              path="/admin/dashboard/memorandum"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Ministry's Order"
              path="/admin/dashboard/ministry"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Menu management"
              path="/admin/dashboard/Menu-Management"
              colors={colors}
              icon={<PeopleAltOutlined />}
            />
            <Item
              title="Notice"
              path="/admin/dashboard/notice"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Meetings"
              path="/admin/dashboard/meeting"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
            <Item
              title="Advices"
              path="/admin/dashboard/advice"
              colors={colors}
              icon={<CalendarTodayOutlined />}
            />
          </SubMenu>
        </Menu>
      </Box>
    </Sidebar>
  );
};

export default SideBar;
