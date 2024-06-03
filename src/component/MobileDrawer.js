import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { Link } from 'react-router-dom';
import Images3 from '../assets/img3.png';
import bg from '../assets/bg.png';

const drawerWidth = 240;

function MobileDrawer(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);
  const [sendMailOpen, setSendMailOpen] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const handleSendMailClick = () => {
    setSendMailOpen(!sendMailOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {["All Users", "New User", "Festivals"].map((text, index) => (
          <React.Fragment key={text}>
            {text === "Festivals" ? (
              <>
                <ListItem disablePadding>
                  <ListItemButton onClick={handleSendMailClick}>
                    <ListItemIcon>
                      <MailIcon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                    {/* {sendMailOpen ? <ExpandLess /> : <ExpandMore />}s */}
                  </ListItemButton>
                </ListItem>
                {/* <Collapse in={sendMailOpen} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                    <ListItemButton component={Link} to="/festivals/diwali" sx={{ pl: 4 }}>
                      <ListItemText primary="Diwali" />
                    </ListItemButton>
                    <ListItemButton component={Link} to="/festivals/pongal" sx={{ pl: 4 }}>
                      <ListItemText primary="Pongal" />
                    </ListItemButton>
                  </List>
                </Collapse> */}
              </>
            ) : (
              <ListItem disablePadding>
                <ListItemButton component={Link} to={text === "All Users" ? "/all-users" : "/new-user"}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            <img
              src={Images3}
              alt="Logo"
              style={{ height: 45, marginRight: 'auto' }}
            />
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          p: 3,
          backgroundImage: `url(${bg})`,
          backgroundColor: '#014550',
          marginTop: 8,
          marginLeft: 0,
          overflow: 'auto',
        }}
      >
        <Toolbar />
        <Typography paragraph>
          {/* This is where the main content will be rendered */}
        </Typography>
      </Box>
    </Box>
  );
}

MobileDrawer.propTypes = {
  window: PropTypes.func,
};

export default MobileDrawer;
