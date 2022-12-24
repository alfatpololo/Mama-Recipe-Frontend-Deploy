import React from "react";

import {BrowserRouter, Routes, Route, Navigate, Outlet} from "react-router-dom";
import Login from "../Views/Login";
import Landing from "../Views/Landing";
import Profile from "../Views/Profile";
import Register from "../Views/Register";
import Forget from "../Views/Forget";
import Add from "../Views/Addrecipe";
import Detail from "../Views/Detailrecipe";
import Video from "../Views/Videorecipe";
import Update from "../Views/Updaterecipe";
import Search from "../Views/SearchLanding";

const PrivateRoute = () => {
    const token = localStorage.getItem("token");
    if (token) {
      return <Outlet />;
    } else {
      alert("Login First !");
      return <Navigate to="/" />;
    }
  };


const Router = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/">
                <Route index element={<Login/>}/>
                <Route path="/landing" element={<PrivateRoute />}>
                <Route index element={<Landing/>}/>
                </Route>
                <Route path="/profile" element={<PrivateRoute />}>
                <Route index element={<Profile/>}/>
                </Route>
                <Route path="/search" element={<PrivateRoute />}>
                <Route index element={<Search/>}/>
                </Route>

               
                <Route path="/register" element={<Register/>}/>
                <Route path="/forget" element={<Forget/>}/>
                <Route path="/add" element={<PrivateRoute />}>
                <Route index element={<Add/>}/>
                </Route>
                <Route path="/detail/:id" element={<Detail/>}/>
                <Route path="/video" element={<Video/>}/>
                <Route path="recipe/update/:id" element={<Update/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
    )
}

export default Router;