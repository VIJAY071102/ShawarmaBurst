import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import FloatingButtons from "../components/FloatingButtons";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Sticky Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Page Content */}
      <div className="flex-1">
        <Outlet />
      </div>

      {/* Normal Footer */}
      <Footer />

      <FloatingButtons/>
    </div>
  );
}

export default MainLayout;
