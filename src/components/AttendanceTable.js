import React from 'react';

const AttendanceTable = () => {
  const attendanceData = [
    { date: '31-Jun-2025', day: 'M', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 06:32 PM', actualTimeHours: '09:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P', finalAtt: 'P', hours: '09:01 H', finalHours: 3 },
    { date: '30-Jun-2025', day: 'M', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 06:32 PM', actualTimeHours: '09:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P', finalAtt: 'P', hours: '09:01 H', finalHours: 3 },
    { date: '29-Jun-2025', day: 'W', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 02:32 PM', actualTimeHours: '04:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P', finalAtt: 'HD', hours: '04:01 H', finalHours: 3 },
    { date: '28-Jun-2025', day: 'T', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 09:32 PM', actualTimeHours: '12:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + OT', finalAtt: 'P + OT', hours: '09:01 H', finalHours: 3 },
    { date: '27-Jun-2025', day: 'F', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P - LT', finalAtt: 'P - LT', hours: '09:01 H', finalHours: 3 },
    { date: '26-Jun-2025', day: 'S', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 06:32 PM', actualTimeHours: '09:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO', finalAtt: 'P + WO', hours: '09:01 H', finalHours: 3 },
    { date: '25-Jun-2025', day: 'S', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 09:32 PM', actualTimeHours: '12:01 H', fineBonus: '-₹500', error: '+₹900', calAtt: 'P + WO + OT', finalAtt: 'P + WO + OT', hours: '09:01 H', finalHours: 3 },
    { date: '24-Jun-2025', day: 'M', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO - LT', finalAtt: 'P + WO - LT', hours: '0|:-- H', finalHours: 3 },
    { date: '23-Jun-2025', day: 'T', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO - LT', finalAtt: 'P + WO - LT', hours: '0|:-- H', finalHours: 3 },
    { date: '22-Jun-2025', day: 'W', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO - LT', finalAtt: 'P + WO - LT', hours: '0|:-- H', finalHours: 3 },
    { date: '21-Jun-2025', day: 'T', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO - LT', finalAtt: 'P + WO - LT', hours: '0|:-- H', finalHours: 3 },
    { date: '20-Jun-2025', day: 'F', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO - LT', finalAtt: 'P + WO - LT', hours: '0|:-- H', finalHours: 3 },
    { date: '19-Jun-2025', day: 'S', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO - LT', finalAtt: 'P + WO - LT', hours: '0|:-- H', finalHours: 3 },
    { date: '18-Jun-2025', day: 'S', timePlanned: '09:00 AM - 06:30 PM', timePlannedHours: '09:00 H', actualTime: '09:01 AM - 05:32 PM', actualTimeHours: '08:01 H', fineBonus: '+₹500', error: '+₹900', calAtt: 'P + WO - LT', finalAtt: 'P + WO - LT', hours: '0|:-- H', finalHours: 3 },
  ];

  const outerStyle = {
    width: '1084px',
    height: '993px',
    top: '253px',
    left: '340px',
    position: 'absolute', // Added absolute positioning to align the table within the provided layout
  };

  const rowStyle = {
    width: '1084px',
    height: '32px',
  };

  const blockStyle = {
    width: '120px',
    height: '32px',
    gap: '10px',
    borderWidth: '1px',
    paddingTop: '8px',
    paddingRight: '6px',
    paddingBottom: '8px',
    paddingLeft: '16px',
    border: '1px solid #D9DBE9',
  };

  const dateStyle = {
    ...blockStyle,
    borderTopLeftRadius: '5px',
  };

  return (
    <div style={outerStyle}>
      <table style={{ width: '100%', borderCollapse: 'collapse', margin: '20px 0' }}>
        <thead>
          <tr style={rowStyle}>
            <th style={blockStyle}>Day</th>
            <th style={dateStyle}>Date</th>
            <th style={blockStyle}>Time Planned</th>
            <th style={blockStyle}>Actual Time</th>
            <th style={blockStyle}>Fine/Bonus</th>
            <th style={blockStyle}>Error</th>
            <th style={blockStyle}>Cal. Att.</th>
            <th style={blockStyle}>Final Att.</th>
            <th style={blockStyle}>Hours</th>
            <th style={blockStyle}>Final Hours</th>
          </tr>
        </thead>
        <tbody>
          {attendanceData.map((item, index) => (
            <tr key={index} style={rowStyle}>
              <td style={blockStyle}>{item.day}</td>
              <td style={dateStyle}>{item.date}</td>
              <td style={blockStyle}>{item.timePlanned}</td>
              <td style={blockStyle}>{item.actualTime}</td>
              <td style={blockStyle}>{item.fineBonus}</td>
              <td style={blockStyle}>{item.error}</td>
              <td style={blockStyle}>{item.calAtt}</td>
              <td style={blockStyle}>{item.finalAtt}</td>
              <td style={blockStyle}>{item.hours}</td>
              <td style={blockStyle}>{item.finalHours}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
