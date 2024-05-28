// import React, { useState } from 'react';
// import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Divider, Typography } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { format } from 'date-fns';
// import image3 from "../assest/img3.png"


// const drawerWidth = 240;

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState(null);

//   const handleListItemClick = (index) => {
//     setActiveItem(index);
//   };

//   const sidebarItems = [
//     { text: 'Happy Diwali', date: new Date(2024, 9, 31) },  // October is 9 (0-based index)
//     { text: 'Merry Christmas', date: new Date(2024, 11, 25) },
//     { text: 'Happy Pongal', date: new Date(2024, 0, 14) },
//     { text: 'Maha Shivaratri', date: new Date(2024, 1, 8) },
//     { text: 'Independence Day', date: new Date(2024, 7, 15) },
//   ];

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor:"#B1B1B1" }}
//       >
//         <Toolbar>
//         <img src={image3} alt="Logo" style={{ height: 50, marginRight: 'auto' }} />
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
//         <Box sx={{ textAlign: 'center', padding: 2, backgroundColor:"#B1B1B1", marginTop:"-70px" }}>
//           <Typography sx={{fontSize:"55px"}} variant="h6">2024</Typography>
//         </Box>
//         <Divider />
//         <List>
//           {sidebarItems.map((item, index) => (
//             <ListItem
//               button
//               key={item.text}
//               selected={activeItem === index}
//               onClick={() => handleListItemClick(index)}
//               sx={{
//                 padding: 2,
//                 backgroundImage: activeItem === index ? 'linear-gradient(to right, #487981 0%, #081517 100%)' : 'inherit',
//                 color: activeItem === index ? 'white' : '#487981',fontSize:"100px", fontFamily: 'Roboto, sans-serif',
//               }}
//             >
//   <ListItemText
//                 primary={item.text}
//                 secondary={format(item.date, 'EEEE, dd MMMM')}
//                 sx={{
//                   '& .MuiListItemText-primary': {
//                     fontSize: '1.1rem',
//                     fontFamily: 'Roboto, sans-serif',
//                      // Increase primary text font size
//                   },
//                   '& .MuiListItemText-secondary': {
//                     fontSize: '0.7rem',
//                     fontFamily: 'Roboto, sans-serif',
//                      // Increase secondary text font size
//                   },
//                 }}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
//         {/* <Typography paragraph>
//           Your main content goes here.
//         </Typography> */}
//       </Box>
//     </Box>
//   );
// }

// export default Sidebar;

// Sidebar.js
// import React, { useState } from 'react';
// import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Divider, Typography } from '@mui/material';
// import LogoutIcon from '@mui/icons-material/Logout';
// import { useNavigate } from 'react-router-dom';
// import image3 from "../assets/img3.png";
//  import { format } from 'date-fns';


// const drawerWidth = 240;

// const Sidebar = () => {
//   const [activeItem, setActiveItem] = useState(null);
//   const navigate = useNavigate();

//   const handleListItemClick = (index, path) => {
//     setActiveItem(index);
//     navigate(path);
//   };

//   const sidebarItems = [
//     { text: 'Happy Diwali', path: '/diwali', date: new Date(2024, 9, 31) }, // October is 9 (0-based index)
//     { text: 'Merry Christmas', path: '/merry-christmas', date: new Date(2024, 11, 25) },
//     { text: 'Happy Pongal', path: '/happy-pongal', date: new Date(2024, 0, 14) },
//     { text: 'Maha Shivaratri', path: '/maha-shivaratri', date: new Date(2024, 1, 8) },
//     { text: 'Independence Day', path: '/independence-day', date: new Date(2024, 7, 15) },
//   ];

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`, backgroundColor: "#B1B1B1" }}
//       >
//         <Toolbar>
//           <img src={image3} alt="Logo" style={{ height: 50, marginRight: 'auto' }} />
//           <Button
//             color="inherit"
//             endIcon={<LogoutIcon />}
//             sx={{ marginLeft: 'auto', border: "1px solid black" }}
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
//           [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box', backgroundColor: '#E2E2E2' }, // Apply background color to Drawer
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ textAlign: 'center', padding: 2, backgroundColor:"#B1B1B1", marginTop:"-70px" }}>
//           <Typography sx={{ fontSize: "55px", fontFamily: 'Roboto, sans-serif' }} variant="h6">2024</Typography>
//         </Box>
//         <Divider />
//         <List>
//           {sidebarItems.map((item, index) => (
//             <ListItem
//               button
//               key={item.text}
//               selected={activeItem === index}
//               onClick={() => handleListItemClick(index, item.path)}
//               sx={{
//                 padding: 2,
//                 backgroundImage: activeItem === index ? 'linear-gradient(to right, #487981 0%, #081517 100%)' : 'inherit',
//                 color: activeItem === index ? 'white' : '#487981',fontSize:"100px", fontFamily: 'Roboto, sans-serif',
//               }}
//             >

//               <ListItemText
//                 primary={item.text}
//                 secondary={format(item.date, 'EEEE, dd MMMM')}
//                 sx={{
//                   '& .MuiListItemText-primary': {
//                     fontSize: '1.5rem',
//                     fontFamily: 'Roboto, sans-serif',
//                   },
//                   '& .MuiListItemText-secondary': {
//                     fontSize: '1rem',
//                     fontFamily: 'Roboto, sans-serif',
//                   },
//                 }}
//               />
//             </ListItem>
//           ))}
//         </List>
//       </Drawer>
//       <Box
//         component="main"
//         sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
//       >
//         <Toolbar />
//         {/* <Typography paragraph>
//           Your main content goes here.
//         </Typography> */}
//       </Box>
//     </Box>
    
//   );
// }

// export default Sidebar;


// Sidebar.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Drawer, List, ListItem, ListItemText, CssBaseline, Box, Divider, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { format } from 'date-fns';
import image3 from "../assets/img3.png";
// import diwaliImage from '../assets/diwali.png'; // Example image import
// import christmasImage from '../assets/christmas.png'; // Example image import
// import pongalImage from '../assets/pongal.png'; // Example image import
// import shivaratriImage from '../assets/shivaratri.png'; // Example image import
// import independenceImage from '../assets/independence.png'; // Example image import

const drawerWidth = 240;

const Sidebar = ({ scrollToSection }) => {
  const [activeItem, setActiveItem] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleListItemClick = (index, section) => {
    setActiveItem(index);
    scrollToSection(section);
    if (isMobile) {
      setMobileOpen(false); // Close drawer after selecting an item on mobile
    }
  };

  const sidebarItems = [
    { text: 'Happy Diwali',  section: 'diwali-section', date: new Date(2024, 9, 31) },
    { text: 'Merry Christmas',  date: new Date(2024, 11, 25) },
    { text: 'Happy Pongal',  section: 'pongal-section', date: new Date(2024, 0, 14) },
    { text: 'Maha Shivaratri',  date: new Date(2024, 1, 8)},
    { text: 'Independence Day',  date: new Date(2024, 7, 15) },
    { text: 'Republic Day',  date: new Date(2024, 1, 26) },
    { text: 'Ramzan',  date: new Date(2024, 3, 10) },
    { text: 'Bakrid',  date: new Date(2024, 6, 17) },
    { text: 'Vinayagar Sathurthi',  date: new Date(2024, 9, 7) },
    { text: 'Raksha Bandhan',  date: new Date(2024, 8, 19) },
    { text: 'Navaratri',  date: new Date(2024, 10, 11) },
    { text: 'Vijayadasami',  date: new Date(2024, 10, 12) },


];

const currentDate = new Date();

const upcomingItems = sidebarItems.filter(item => item.date >= currentDate);
const pastItems = sidebarItems.filter(item => item.date < currentDate);

  const drawer = (
    <div>
      <Toolbar />
      <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: "#B1B1B1", marginTop: "-70px", height:"75px" }}>
        <Typography sx={{ fontSize: "45px", fontFamily: 'Roboto, sans-serif', color:"#487981", marginTop:"-10px" }} 
        variant="h6">2024</Typography>
      </Box>
      <Divider />
      <Typography variant="h6" sx={{ padding: 2, color: 'black' }}>Upcoming Festivals</Typography>
      <List>
        {upcomingItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            selected={activeItem === index}
            onClick={() => handleListItemClick(index, item.section)}
            sx={{
              padding: 2,
              backgroundImage: activeItem === index ? 'linear-gradient(to right, #487981 0%, #081517 100%)' : 'inherit',
              color: activeItem === index ? 'white' : '#487981', fontSize: "100px", fontFamily: 'Roboto, sans-serif',
            }}
          >
            <ListItemText
              primary={item.text}
              secondary={format(item.date, 'EEEE, dd MMMM')}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '1.5rem',
                  fontFamily: 'Roboto, sans-serif',
                },
                '& .MuiListItemText-secondary': {
                  fontSize: '1rem',
                  fontFamily: 'Roboto, sans-serif',
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      <Divider />
      <Typography variant="h6" sx={{ padding: 2, color: 'black' }}>Past Festivals</Typography>
      <List sx={{ maxHeight: 'calc(100vh - 400px)', overflowY: 'auto' }}>
        {pastItems.map((item, index) => (
          <ListItem
            button
            key={item.text}
            selected={activeItem === index + upcomingItems.length} // Adjust the index for past items
            onClick={() => handleListItemClick(index + upcomingItems.length, item.section)}
            sx={{
              padding: 2,
              backgroundImage: activeItem === index + upcomingItems.length ? 'linear-gradient(to right, #487981 0%, #081517 100%)' : 'inherit',
              color: activeItem === index + upcomingItems.length ? 'white' : '#487981', 
              fontSize: "100px", 
              fontFamily: 'Roboto, sans-serif',
              opacity: 0.6 // Slightly dimmed for past festivals
            }}
          >
            <ListItemText
              primary={item.text}
              secondary={format(item.date, 'EEEE, dd MMMM')}
              sx={{
                '& .MuiListItemText-primary': {
                  fontSize: '1.5rem',
                  fontFamily: 'Roboto, sans-serif',
                },
                '& .MuiListItemText-secondary': {
                  fontSize: '1rem',
                  fontFamily: 'Roboto, sans-serif',
                },
              }}
            />
          </ListItem>
        ))}
      </List>

      {/* <Typography variant="h6" sx={{ padding: 2, color: '#487981' }}>Past Festivals</Typography>
      {pastItems.length > 0 && (
        <>
          <Divider />
          <List>
            {pastItems.map((item, index) => (
              <ListItem
                button
                key={item.text}
                selected={activeItem === index + upcomingItems.length} // Adjust the index for past items
                onClick={() => handleListItemClick(index + upcomingItems.length, item.section)}
                sx={{
                  padding: 2,
                  backgroundImage: activeItem === index + upcomingItems.length ? 'linear-gradient(to right, #487981 0%, #081517 100%)' : 'inherit',
                  color: activeItem === index + upcomingItems.length ? 'white' : '#487981', fontSize: "100px", fontFamily: 'Roboto, sans-serif',  opacity: 0.6,
                }}
              >
                <ListItemText
                  primary={item.text}
                  secondary={format(item.date, 'EEEE, dd MMMM')}
                  sx={{
                    '& .MuiListItemText-primary': {
                      fontSize: '1.5rem',
                      fontFamily: 'Roboto, sans-serif',
                    },
                    '& .MuiListItemText-secondary': {
                      fontSize: '1rem',
                      fontFamily: 'Roboto, sans-serif',
                    },
                  }}
                />
              </ListItem>
            ))}
          </List>
        </>
      )} */}
     
     
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: { sm: `calc(100% - ${drawerWidth}px)` }, ml: { sm: `${drawerWidth}px` }, backgroundColor: "#B1B1B1" }}
      >
        <Toolbar>
          {isMobile && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          )}
          <img src={image3} alt="Logo" style={{ height: 50, marginRight: 'auto' }} />
          <Button
            color="inherit"
            endIcon={<LogoutIcon />}
            sx={{ marginLeft: 'auto', border: "1px solid black" }}
          >
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#E2E2E2' },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, backgroundColor: '#E2E2E2' },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        {isMobile && (
          <Box sx={{ textAlign: 'center' }}>
            {sidebarItems.map((item, index) => (
              <Box key={index} sx={{ marginBottom: 2 }}>
                <img src={item.image} alt={item.text} style={{ width: '100%', maxWidth: 300 }} />
              </Box>
            ))}
          </Box>
        )}
        {/* <Typography paragraph>
          Your main content goes here.
        </Typography> */}
      </Box>
    </Box>
  );
}

export default Sidebar;
