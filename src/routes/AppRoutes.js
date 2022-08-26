import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AddUser from "../pages/AddUser";
import EditUser from "../pages/EditUser";
import Home from "../pages/Home";
const AppRoute = () => {
  return (
    <Routes>
      <Route index element={<Navigate replace to="home" />} />
      <Route path="home" element={<Home />} />
      <Route path="adduser" element={<AddUser />} />
      <Route path="edituser/:id" element={<EditUser />} />
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
};

export default AppRoute;
