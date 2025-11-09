import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ 
      backgroundColor: '#2c3e50',
      color: 'white',
      textAlign: 'center',
      padding: '25px 20px',
      marginTop: '30px',
      borderTop: '5px solid #3498db'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <p style={{ 
          margin: 0,
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
          My Favorite Cities Travel App
        </p>
        
        <p style={{ 
          margin: 0,
          fontSize: '0.9rem',
          opacity: 0.8
        }}>
          © {currentYear} My Favorite Cities. All rights reserved.
        </p>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '10px'
        }}>
          <span style={{ 
            padding: '8px 15px',
            backgroundColor: '#34495e',
            borderRadius: '20px',
            fontSize: '0.8rem'
          }}>
            Travel
          </span>
          <span style={{ 
            padding: '8px 15px',
            backgroundColor: '#34495e',
            borderRadius: '20px',
            fontSize: '0.8rem'
          }}>
            Adventure
          </span>
          <span style={{ 
            padding: '8px 15px',
            backgroundColor: '#34495e',
            borderRadius: '20px',
            fontSize: '0.8rem'
          }}>
            Explore
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;