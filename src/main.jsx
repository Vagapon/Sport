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
        {/* <Route path="assignment" element={<Assignment />} /> /admin/assignment */}
        {/* bạn có thể thêm các route con khác tại đây */}
      </Route>
    </Routes>
  </BrowserRouter>
);
