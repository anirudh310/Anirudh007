import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  background-color: #f8f9fa;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const HeaderText = styled.div`
  font-weight: bold;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 14px; // Adjust font size as needed
`;

const SummaryCard = ({ name, avatarSrc, data }) => {
  if (!data || data.length === 0) {
    return <Card>No data available</Card>; // Handle empty data case
  }

  const columns = Object.keys(data[0]); // Extract column names

  return (
    <Card>
      <Header>
        {avatarSrc && <Avatar src={avatarSrc} alt={`${name}'s avatar`} />} {/* Conditionally render avatar */}
        <HeaderText>{name}</HeaderText>
      </Header>
      <Table>
        <thead>
          <tr>
            {columns.map((column) => (
              <TableCell key={column}>{column}</TableCell>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <TableRow key={index}>
              {columns.map((column) => (
                <TableCell key={column}>{item[column]}</TableCell>
              ))}
            </TableRow>
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default SummaryCard;