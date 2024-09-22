import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Home from "../pages/home/Home";
import Dashboard from "../pages/dashboard/Dashboard";
import Login from "../pages/login/Login";

export default function RouterComponent(){
  return(
    <Routes>
      <Route path="/" element={<Login />}/>
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}