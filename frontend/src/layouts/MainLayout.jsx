import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";

function MainLayout() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <div className="h-24 shrink-0">
        <Navbar />
      </div>

      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>

      <div className="shrink-0">
        <Footer />
      </div>
    </div>
  );
}

export default MainLayout;
