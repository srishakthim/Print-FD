import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Status from "./profile/Status";
// import Sidebar from './component/Sidebar';
// import Dashboard from "./Pages/Dashboard";
import DashboardCopy from "./Pages/Dashboard copy";
import Side from "./admin/Side";
import Register from "./component/Register";
import ImageUpload from "./component/ImageUpload";
import Sidecopy from "./admin/Side copy";
import AllUsersPage from "./Pages/AllUsersPage";
import NewUsersPage from "./Pages/NewUsersPage";
import ImageUploadPage from "./Pages/ImageUploadPage";
import Festival from './Pages/Festival';
// import { AdUnits, Festival } from "@mui/icons-material";
import AdminLogin from "./component/AdminLogin";
import WorldBicycleDay from "./Pages/WorldBicycleDay";
import YogaDay from "./Pages/YogaDay";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/world-bicycle-day" element={<WorldBicycleDay />} />
        <Route path="/yoga-day" element={<YogaDay />} />
        <Route path="/adminsignin" element={<AdminLogin />} />
        <Route path="/status" element={<Status />} />
        <Route path="/dashboard-copy" element={<DashboardCopy />} />
        {/* <Route path="/dashboard" element={<Dashboard />} /> */}
        <Route path="/side" element={<Side />} />
        {/* <Route path="/side/new-user" element={<Register />} /> */}
        <Route path="/image-upload" element={<ImageUpload />} />
        <Route path="/side-copy" element={<Sidecopy />} />
        {/* <Route path="/newuser" element={<NewUser />}/> */}
        {/* <Route path="/allusers" element={<AllUsers />} /> */}
        <Route path="/all-users" element={<AllUsersPage />} />
        <Route path="/new-user" element={<NewUsersPage />} />
        <Route path="/festival" element={<Festival />} /> 
        {/* <Route path="/festivals/pongal" element={<Pongal />} /> 
        <Route path="/merry-christmas" element={<MerryChristmas />} />
        <Route path="/happy-pongal" element={<HappyPongal />} />
        <Route path="/maha-shivaratri" element={<MahaShivaratri />} />
        <Route path="/independence-day" element={<IndependenceDay />} />  */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
