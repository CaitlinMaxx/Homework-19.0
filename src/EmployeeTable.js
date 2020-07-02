import React from "react";
import './EmployeeTable.css';
import Table from "./table.js";

function EmployeeTable() {
    return (
      <div className="EmployeeTable">
        <div className="container">
            <div className="tablediv">
                < Table />
            </div>
        </div>
      </div>
    );
  }


export default EmployeeTable;