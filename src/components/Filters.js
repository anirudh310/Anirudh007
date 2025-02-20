import React from "react";

const Filters = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
      <select style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}>
        <option>All Employees</option>
        <option>Present</option>
        <option>Late</option>
        <option>Absent</option>
      </select>
      <select style={{ padding: "8px", borderRadius: "5px", border: "1px solid #ccc" }}>
        <option>July</option>
        <option>June</option>
        <option>May</option>
      </select>
    </div>
  );
};

export default Filters;
