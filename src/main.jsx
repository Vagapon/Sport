// src/main.jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";

// Import layout và các page con
import AdminLayout from "./components/dashboard/AdminLayout.jsx"; // layout admin
import Overview from "./pages/Admin/Overview.jsx";               // trang chính /admin
import User from "./pages/Admin/User.jsx";                       // trang /admin/users
import Event from "./pages/Admin/Event.jsx";           // ví dụ trang khác
import Profile from "./pages/Admin/Profile.jsx";
import Chat from "./components/Chat/ChatApp.jsx"; // ví dụ trang khác
import Login from "./pages/Ahthen/Login.jsx"; // trang đăng nhập
const rootElement = document.getElementById("root");
if (!rootElement) throw new Error("Failed to find root element");

createRoot(rootElement).render(
  <BrowserRouter> 
    <Routes>
      <Route path="/" element={<App />} />

      {/* Route cho admin với layout riêng */}
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Overview />} />             {/* /admin */}
        <Route path="users" element={<User />} />  
        <Route path="events" element={<Event />} />         {/* /admin/users */}
        <Route path="profile" element={<Profile />} />         {/* /admin/users */}
         
        {/* bạn có thể thêm các route con khác tại đây */}
      </Route>
      <Route path="/chat" element={<Chat/>} /> 
      <Route path="/login" element={<Login/>} /> 
    </Routes>
  </BrowserRouter>
);
