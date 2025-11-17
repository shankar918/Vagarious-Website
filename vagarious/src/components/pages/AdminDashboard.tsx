import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

// Import your actual page components
import Careers from "../pages/Addcarrer";
import ViewCareer from "./ViewCareer";
// import Careers from "../pages"; // Fixed: capitalized
// import ViewCareer from "../pages/ViewCareer"; // Uncomment if you have this

const AdminDashboard = () => {
  const [view, setView] = useState("addcareer"); // default view

  const dashboardView = () => {
    if (view === "addcareer") {
      return <Careers />; // fixed lowercase issue
    } else if (view === "ViewCareer") {
      return <ViewCareer />;
    } 
    // else if (view === "view") {
    //   return <ViewCareer />;
    // } 
    else {
      return <h4 className="text-center mt-5">Invalid View</h4>;
    }
  };

  return (
    <div className="container-fluid p-3 bg-light bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="row">
        {/* Sidebar */}
        <div className="col-3 bg-dark text-white p-4 shadow vh-100">
          <h4 className="mb-4 text-center">Admin Dashboard</h4>

          <button
            onClick={() => setView("addcareer")}
            className="btn btn-outline-light w-100 mb-3"
          >
            Add Career
          </button>

          <button
            onClick={() => setView("ViewCareer")}
            className="btn btn-outline-light w-100 mb-3"
          >
            ViewCareer
          </button>

          <button className="btn btn-danger w-100">Logout</button>
        </div>

        {/* Main Content Area */}
        <div className="col-9 p-4">{dashboardView()}</div>
      </div>
    </div>
  );
};

export default AdminDashboard;
