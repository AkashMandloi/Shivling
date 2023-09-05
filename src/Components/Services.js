// AttractiveComponent.js
import React from 'react';

const AttractiveComponent = () => {
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: '#f1f1f1',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const itemStyle = {
    flex: 1,
    maxWidth: '200px',
    textAlign: 'center',
    margin: '10px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const headerStyle = {
    color: '#007bff',
    fontSize: '24px',
  };

  const textStyle = {
    fontSize: '16px',
    color: '#555',
  };

  return (
    <div style={containerStyle}>
      <div style={itemStyle}>
        <h3 style={headerStyle}>FREE SHIPPING</h3>
        <p style={textStyle}>Carrier information</p>
      </div>
      <div style={itemStyle}>
        <h3 style={headerStyle}>ONLINE PAYMENT</h3>
        <p style={textStyle}>Payment methods</p>
      </div>
      <div style={itemStyle}>
        <h3 style={headerStyle}>24/7 SUPPORT</h3>
        <p style={textStyle}>Unlimited help desk</p>
      </div>
      <div style={itemStyle}>
        <h3 style={headerStyle}>100% SAFE</h3>
        <p style={textStyle}>View our benefits</p>
      </div>
      <div style={itemStyle}>
        <h3 style={headerStyle}>FREE RETURNS</h3>
        <p style={textStyle}>Track or off orders</p>
      </div>
    </div>
  );
};

export default AttractiveComponent;
