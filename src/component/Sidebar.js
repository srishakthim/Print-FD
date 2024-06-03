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
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { format } from "date-fns";
import image3 from "../assets/img3.png";

const drawerWidth = 240;

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (index, path) => {
    setActiveItem(index);
    navigate(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const sidebarItems = [
    {
      text: "World Cycle Day",
      path: "/world-bicycle-day",
      date: new Date(2024, 5, 3), // Month is 0-indexed, so June is 5
    },
    {
      text: "International Yoga Day",
      path: "/yoga-day",
      date: new Date(2024, 5, 21), // Month is 0-indexed, so June is 5
    },
    {
      text: "International Yoga Day",
      path: "/yoga-day",
      date: new Date(2024, 5, 25), // Month is 0-indexed, so June is 5
    },
  ];

  const currentDate = new Date();
  const upcomingItems = sidebarItems.filter((item) => item.date >= currentDate);
  const pastItems = sidebarItems.filter((item) => item.date < currentDate);

  const drawer = (
    <div>
      <Toolbar />
      <Box
        sx={{
          textAlign: "center",
          padding: 2,
          backgroundColor: "#B1B1B1",
          marginTop: "-70px",
          height: "75px",
        }}
      >
        <Typography
          sx={{
            fontSize: "45px",
            fontFamily: "Roboto, sans-serif",
            color: "#487981",
            marginTop: "-10px",
          }}
          variant="h6"
        >
          2024
        </Typography>
      </Box>
      <Divider />
      <Typography variant="h6" sx={{ padding: 2, color: "black" }}>
        Upcoming Festivals
      </Typography>
      <List>
        {upcomingItems.map((item, index) => (
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

      <Divider />
      <Typography variant="h6" sx={{ padding: 2, color: "black" }}>
        Past Festivals
      </Typography>
      <List sx={{ maxHeight: "calc(100vh - 400px)", overflowY: "auto" }}>
        {pastItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            selected={activeItem === index + upcomingItems.length} // Adjust the index for past items
            onClick={() =>
              handleListItemClick(index + upcomingItems.length, item.path)
            }
            sx={{
              padding: 2,
              backgroundImage:
                activeItem === index + upcomingItems.length
                  ? "linear-gradient(to right, #487981 0%, #081517 100%)"
                  : "inherit",
              color:
                activeItem === index + upcomingItems.length
                  ? "white"
                  : "#487981",
              fontSize: "100px",
              fontFamily: "Roboto, sans-serif",
              opacity: 0.6, // Slightly dimmed for past festivals
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
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#B1B1B1",
        }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img
            src={image3}
            alt="Logo"
            style={{ height: 50, marginRight: "auto" }}
          />
          <Button
            color="inherit"
            endIcon={<LogoutIcon />}
            sx={{
              marginLeft: "auto",
              border: "1px solid black",
              backgroundColor: "#4a68af", // Change to your desired color
              "&:hover": {
                backgroundColor: "darkblue", // Optional: Change to your desired hover color
              },
            }}
          >
            Logout
          </Button>
          Explanatio
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant={isMobile ? "temporary" : "permanent"}
          open={isMobile ? mobileOpen : true}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#E2E2E2",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              backgroundColor: "#E2E2E2",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {/* Your main content goes here */}
      </Box>
    </Box>
  );
};

export default Sidebar;
