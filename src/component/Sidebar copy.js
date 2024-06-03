import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  CssBaseline,
  Box,
  Divider,
  Typography,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import image3 from "../assets/img3.png";
import { format } from "date-fns";

const drawerWidth = 240;

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const navigate = useNavigate();

  const handleListItemClick = (index, path) => {
    setActiveItem(index);
    navigate(path);
  };

  const sidebarItems = [
    {
      text: "Happy Diwali",
      path: "/world-bicycle-day",
      date: new Date(2024, 9, 31),
    }, // October is 9 (0-based index)
    {
      text: "Merry Christmas",
      path: "/world-bicycle-day",
      date: new Date(2024, 11, 25),
    },
    {
      text: "Happy Pongal",
      path: "/happy-pongal",
      date: new Date(2024, 0, 14),
    },
    {
      text: "Maha Shivaratri",
      path: "/maha-shivaratri",
      date: new Date(2024, 1, 8),
    },
    {
      text: "Independence Day",
      path: "/independence-day",
      date: new Date(2024, 7, 15),
    },
  ];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: `calc(100% - ${drawerWidth}px)`,
          ml: `${drawerWidth}px`,
          backgroundColor: "#B1B1B1",
        }}
      >
        <Toolbar>
          <img
            src={image3}
            alt="Logo"
            style={{ height: 50, marginRight: "auto" }}
          />
          <Button
            color="inherit"
            endIcon={<LogoutIcon />}
            sx={{ marginLeft: "auto", border: "1px solid black" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#E2E2E2",
          }, // Apply background color to Drawer
        }}
      >
        <Toolbar />
        <Box
          sx={{
            textAlign: "center",
            padding: 2,
            backgroundColor: "#B1B1B1",
            marginTop: "-70px",
          }}
        >
          <Typography
            sx={{ fontSize: "55px", fontFamily: "Roboto, sans-serif" }}
            variant="h6"
          >
            2024
          </Typography>
        </Box>
        <Divider />
        <List>
          {sidebarItems.map((item, index) => (
            <ListItem
              button
              key={item.text}
              selected={activeItem === index}
              onClick={() => handleListItemClick(index, item.path)}
              sx={{
                padding: 2,
                backgroundImage:
                  activeItem === index
                    ? "linear-gradient(to right, #487981 0%, #081517 100%)"
                    : "inherit",
                color: activeItem === index ? "white" : "#487981",
                fontSize: "100px",
                fontFamily: "Roboto, sans-serif",
              }}
            >
              <ListItemText
                primary={item.text}
                secondary={format(item.date, "EEEE, dd MMMM")}
                sx={{
                  "& .MuiListItemText-primary": {
                    fontSize: "1.5rem",
                    fontFamily: "Roboto, sans-serif",
                  },
                  "& .MuiListItemText-secondary": {
                    fontSize: "1rem",
                    fontFamily: "Roboto, sans-serif",
                  },
                }}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {/* <Typography paragraph>
          Your main content goes here.
        </Typography> */}
      </Box>
    </Box>
  );
};

export default Sidebar;
