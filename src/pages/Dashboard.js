import React from "react";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import AttendanceTable from "../components/AttendanceTable";
import SummaryCard from "../components/SummaryCard";
import Filters from "../components/Filters";
import EmployeeList from "../components/EmployeeList";

const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px" }}>
        <Navbar />
        <Filters />
        <SummaryCard />
        <AttendanceTable />
        <EmployeeList />
      </div>
    </div>
  );
};

export default Dashboard;
