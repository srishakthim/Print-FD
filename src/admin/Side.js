// import React from 'react';
// import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Divider, Typography } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
// import Images3 from '../assets/img3.png'

// const drawerWidth = 240;

// const Side = () => {
//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
//       >
//         <Toolbar>
//           <img src={Images3} alt="Logo" style={{ height: 50, marginRight: 'auto' }} />
//           <Button
//             color="inherit"
//             endIcon={<LogoutIcon />}
//             sx={{ marginLeft: 'auto' }}
//           >
//             Logout
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         variant="permanent"
//         sx={{
//           width: drawerWidth,
//           flexShrink: 0,
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: 'auto' }}>
//           <List>
//             {/* <ListItem>
//               <ListItemText primary="2024" />
//             </ListItem> */}
//             <Divider />
//             {['Dashboard', 'All User', 'New User'].map((text, index) => (
//               <ListItem button key={text}>
//                 <ListItemText primary={text} />
//               </ListItem>
//             ))}
//           </List>
//         </Box>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
//         <Typography paragraph>
//           Your main content goes here.
//         </Typography>
//       </Box>
//     </Box>
//   );
// }

// export default Side;

import React, { useState } from 'react';
import {
  AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText,
  CssBaseline, Box, Divider, Typography, Collapse, ListItemIcon
} from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import LogoutIcon from '@mui/icons-material/Logout';
import Images3 from '../assets/img3.png';
import { Link } from 'react-router-dom';

const drawerWidth = 240;

const Side = () => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const handleClick = () => {
    setOpen(!open);
  };

  const handleItemClick = (item) => {
    setActiveItem(item);
  };


  const listItemStyle = {
    minHeight: '60px', // Adjust the height as needed
    padding: '20px 16px', // Adjust padding as needed
  };
  const listItemTextStyle = {
    fontSize: '25px',
    color: "#3a656c"
  };

  const getListItemStyles = (item) => ({
    ...listItemStyle,
    backgroundColor: activeItem === item ? '#3a656c' : 'inherit',
    color: activeItem === item ? 'white' : 'inherit',
  });

  const getListItemTextStyles = (item) => ({
    ...listItemTextStyle,
    color: activeItem === item ? 'white' : '#3a656c',
  });


  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ backgroundColor:"#B1B1B1", width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <img src={Images3} alt="Logo" style={{ height: 50, marginRight: 'auto' }} />
          <Button
            color="inherit"
            endIcon={<LogoutIcon />}
            sx={{ marginLeft: 'auto' }}
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
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor:"#e2e2e2" },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            <Divider />
            {['Dashboard', 'All User', 'New User'].map((text) => (
                 <ListItem
                 button
                 key={text}
                 component={Link}
                to={text.toLowerCase().replace(' ', '-')}
                 sx={getListItemStyles(text)}
                 onClick={() => handleItemClick(text)}
               >
                 <ListItemText
                   primary={<Typography sx={getListItemTextStyles(text)}>{text}</Typography>}
                 />
               </ListItem>
            ))}
          <ListItem button onClick={handleClick} sx={getListItemStyles('Festivals')}>
              <ListItemText
                primary={<Typography sx={getListItemTextStyles('Festivals')}>Festivals</Typography>}
              />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {['Diwali', 'Pongal', 'Ramzan'].map((text) => (
                     <ListItem
                     button
                     key={text}
                     sx={getListItemStyles(text)}
                     onClick={() => handleItemClick(text)}
                   >
                     <ListItemText
                       primary={<Typography sx={getListItemTextStyles(text)}>{text}</Typography>}
                     />
                   </ListItem>
                ))}
              </List>
            </Collapse>
          </List>
        </Box>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
       
      </Box>
    </Box>
  );
}

export default Side;



