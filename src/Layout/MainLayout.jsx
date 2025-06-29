import React from "react";
import Home from "../Pages/Home/Home";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default MainLayout;
