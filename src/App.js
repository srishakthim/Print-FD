// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './component/Login';
import Status from './profile/Status';
// import Sidebar from './component/Sidebar';
import Dashboard from './Pages/Dashboard';
import Side from './admin/Side';
import Register from './component/Register';



function App(){
  return (
    <BrowserRouter>
        <Routes>
         <Route path="/" element={<Login />} />
         <Route path="/status" element={<Status />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/side" element={<Side />} />
         <Route path="/side/new-user" element={<Register />} />

         {/* <Route path="/dashboard" element={<Dashboard />} /> */}
         {/* <Route path="/sidebar" element={<Sidebar />} /> */}
        {/* <Route path="/merry-christmas" element={<MerryChristmas />} /> */}
        {/* <Route path="/happy-pongal" element={<HappyPongal />} /> */}
        {/* <Route path="/maha-shivaratri" element={<MahaShivaratri />} /> */}
        {/* <Route path="/independence-day" element={<IndependenceDay />} /> */}

        </Routes>
    </BrowserRouter>
  );
};

export default App;
