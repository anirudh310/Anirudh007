import React, { useEffect, useState } from "react";
import styled from "styled-components";
import OIPImage from './OIP.jpg';
import SummaryCard from './SummaryCard'; // Import the SummaryCard component

// Static employee data (you can later fetch this from an API)
const employeesData = [
    { id: 1, name: "Bhaskar Sharma", role: "Sales Manager", department: "Sales" },
    { id: 2, name: "Amit Kumar", role: "Developer", department: "IT" },
    { id: 3, name: "Priya Singh", role: "HR Manager", department: "HR" },
    { id: 4, name: "Rohan Gupta", role: "Software Engineer", department: "IT" },
    { id: 5, name: "Anjali Patel", role: "Marketing Specialist", department: "Marketing" },
    { id: 6, name: "Vikram Singh", role: "Data Analyst", department: "Analytics" },
    { id: 7, name: "Neha Joshi", role: "Project Manager", department: "Management" },
    { id: 8, name: "Aditya Verma", role: "UX Designer", department: "Design" },
    { id: 9, name: "Kavita Reddy", role: "Customer Support", department: "Support" },
    { id: 10, name: "Sameer Khan", role: "Finance Analyst", department: "Finance" },
];

// Main Employee List Container
const EmployeeListContainer = styled.div`
    width: 220px;
    height: 732px;
    top: 111px;
    left: 108px;
    border-radius: 12px;
    padding: 10px;
    gap: 8px;
    background: #FFFFFF;
    position: absolute;
    overflow-y: auto;
`;

// Individual Employee Item
const EmployeeItem = styled.div`
    width: 200px;
    height: 64px;
    border-radius: 10px;
    padding: 12px;
    gap: 8px;
    background: #E2E2FF;
    display: flex;
    align-items: center;
    margin-bottom: 8px;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #D1CFFF;
    }
`;

const EmployeeImage = styled.img`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 15px;
    object-fit: cover;
`;

const EmployeeDetails = styled.div`
    flex-grow: 1;
`;

const EmployeeName = styled.h4`
    margin: 0;
    font-size: 16px;
    color: #333333;
`;

const EmployeeRole = styled.p`
    margin: 5px 0 0;
    font-size: 14px;
    color: #666666;
`;

const generateFormalProfileImageUrl = (id) => OIPImage;

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [selectedEmployee, setSelectedEmployee] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            setEmployees(employeesData.map(emp => ({
                ...emp,
                imageUrl: generateFormalProfileImageUrl(emp.id),
            })));
        }, 500);
    }, []);

    // Handle employee click
    const handleEmployeeClick = (employee) => {
        setSelectedEmployee(employee); // Set selected employee
    };

    return (
        <div>
            <EmployeeListContainer>
                {employees.length > 0 ? (
                    employees.map((emp) => (
                        <EmployeeItem key={emp.id} onClick={() => handleEmployeeClick(emp)}>
                            <EmployeeImage src={emp.imageUrl} alt={emp.name} />
                            <EmployeeDetails>
                                <EmployeeName>{emp.name}</EmployeeName>
                                <EmployeeRole>{emp.role} | {emp.department}</EmployeeRole>
                            </EmployeeDetails>
                        </EmployeeItem>
                    ))
                ) : (
                    <p style={{ padding: "20px", textAlign: "center" }}>Loading employees...</p>
                )}
            </EmployeeListContainer>

            {/* Display the SummaryCard only when an employee is selected */}
            {selectedEmployee && <SummaryCard {...selectedEmployee} />}
        </div>
    );
};

export default EmployeeList;
