import React, { useContext } from 'react';
import UserContext from '../UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div style={{
      border: '2px solid #3498db',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      backgroundColor: '#f8f9fa',
      maxWidth: '400px'
    }}>
      <h2 style={{
        color: '#2c3e50',
        borderBottom: '2px solid #3498db',
        paddingBottom: '10px'
      }}>
        User Details
      </h2>
      <p style={{
        fontSize: '1.1rem',
        margin: '10px 0',
        color: '#34495e'
      }}>
        <strong>Name:</strong> {userData.name}
      </p>
      <p style={{
        fontSize: '1.1rem',
        margin: '10px 0',
        color: '#34495e'
      }}>
        <strong>Email:</strong> {userData.email}
      </p>
    </div>
  );
}

export default UserDetails;