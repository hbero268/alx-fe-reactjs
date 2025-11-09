import React from 'react';

const UserProfile = (props) => {
  return (
    <div style={{ 
      border: '1px solid gray', 
      padding: '10px', 
      margin: '10px',
      borderRadius: '5px',
      backgroundColor: '#f8f9fa'
    }}>
      <h2 style={{ 
        color: 'blue',
        fontSize: '1.5rem',
        margin: '0 0 10px 0'
      }}>
        {props.name}
      </h2>
      <p style={{ 
        margin: '5px 0',
        fontSize: '1rem'
      }}>
        Age: <span style={{ 
          fontWeight: 'bold',
          color: 'black'
        }}>{props.age}</span>
      </p>
      <p style={{ 
        margin: '5px 0',
        fontSize: '1rem'
      }}>
        Bio: {props.bio}
      </p>
    </div>
  );
};

export default UserProfile;