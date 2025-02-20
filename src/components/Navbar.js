import React, { useState, useEffect, useRef } from "react";
import styled, { keyframes } from "styled-components";

// Container for the entire navbar
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  font-family: "Inter", sans-serif;
  margin-left: 96px;
  width: calc(100% - 96px);
`;

// Search section
const SearchContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const SearchIcon = styled.svg`
  position: absolute;
  left: 12px;
  width: 18px;
  height: 18px;
  fill: #787878;
`;

const SearchInput = styled.input`
  padding: 8px 12px 8px 40px;
  width: 280px;
  border-radius: 8px;
  border: 1px solid #e5e7eb;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  background-color: #ffffff;
  outline: none;
  &:focus {
    border-color: #1d4ed8;
  }
`;

// Dropdown animation
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-5px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Dropdown styling
const DropdownWrapper = styled.div`
  position: relative;
`;

const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  padding: 8px 16px;
  border: ${({ primary }) => (primary ? "none" : "1px solid #e5e7eb")};
  border-radius: 8px;
  background: ${({ primary }) => (primary ? "#1d4ed8" : "#ffffff")};
  color: ${({ primary }) => (primary ? "#ffffff" : "#1d4ed8")};
  cursor: pointer;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
  transition: background 0.2s;
  &:hover {
    opacity: 0.9;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 120%;
  left: 0;
  background-color: white;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.05);
  z-index: 10;
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  animation: ${fadeIn} 0.2s ease;
`;

const DropdownItem = styled.button`
  padding: 8px 16px;
  border: none;
  background: none;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
  &:hover {
    background-color: #f0f0f0;
  }
`;

// Dropdown arrow
const ArrowIcon = styled.span`
  margin-left: 8px;
`;

// Main Navbar component
const Navbar = () => {
  const dropdownRef = useRef(null);

  const [dropdowns, setDropdowns] = useState({
    rows: false,
    month: false,
    export: false,
    view: false,
  });

  const toggleDropdown = (name) => {
    setDropdowns((prev) => ({
      rows: false,
      month: false,
      export: false,
      view: false,
      [name]: !prev[name],
    }));
  };

  const closeDropdowns = () => {
    setDropdowns({
      rows: false,
      month: false,
      export: false,
      view: false,
    });
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdowns();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const rowsOptions = ["5 Rows", "10 Rows", "15 Rows"];
  const monthOptions = ["January", "February", "March", "April"];
  const exportOptions = ["CSV", "PDF", "Excel"];
  const viewOptions = ["Summary View", "Detailed View"];

  // Reusable Dropdown Component
  const Dropdown = ({ title, options, name, primary }) => (
    <DropdownWrapper>
      <DropdownButton primary={primary} onClick={() => toggleDropdown(name)}>
        {title}
        <ArrowIcon>▼</ArrowIcon>
      </DropdownButton>
      {dropdowns[name] && (
        <DropdownContent>
          {options.map((option, index) => (
            <DropdownItem key={index} onClick={() => console.log(`${title}: ${option}`)}>
              {option}
            </DropdownItem>
          ))}
        </DropdownContent>
      )}
    </DropdownWrapper>
  );

  return (
    <NavbarContainer ref={dropdownRef}>
      {/* Left Section */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        {/* Search */}
        <SearchContainer>
          <SearchIcon viewBox="0 0 20 20">
            <path d="M18.8 19L13.5 13.7C14.5 12.5 15 11.1 15 9.5C15 5.9 12 3 8.5 3C5 3 2 5.9 2 9.5C2 13.1 5 16 8.5 16C10 16 11.3 15.5 12.5 14.5L17.8 18.8C18.2 19.2 18.8 19.2 19.2 18.8L18.8 19Z" />
          </SearchIcon>
          <SearchInput type="text" placeholder="Search" />
        </SearchContainer>

        {/* Filters */}
        <Dropdown title="Rows" options={rowsOptions} name="rows" />
        <Dropdown title="Month" options={monthOptions} name="month" />
      </div>

      {/* Right Section */}
      <div style={{ display: "flex", gap: "20px" }}>
        <Dropdown title="Export" options={exportOptions} name="export" primary />
        <Dropdown title="Detailed View" options={viewOptions} name="view" />
      </div>
    </NavbarContainer>
  );
};

export default Navbar;
