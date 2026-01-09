import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home.jsx";
import Navbar from "./components/navbar.jsx";
import Login from './pages/login.jsx';
import Auth from './pages/auth.jsx';
import ForgotPassword from './pages/forgot-reset.jsx';
import ResetPassword from './pages/reset.jsx';
import ForgotReset from './pages/forgot-reset.jsx';

function App() {
  return (
    <Routes>
  
<Route path="/" element={<><Auth/></>} />
<Route path="/auth" element={<Auth/>} />
<Route path="/login" element={<Login/>} />
<Route path="/home" element={<Home/>} />
<Route path="/forgot-password" element={<ForgotReset />} />


    </Routes>
  );
}

export default App;
