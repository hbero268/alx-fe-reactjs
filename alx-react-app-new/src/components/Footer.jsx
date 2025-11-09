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
      borderTop: '5px solid #3498db',
      fontSize: '16px',
      fontFamily: 'Arial, sans-serif'
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
          fontSize: '1.2rem',
          fontWeight: 'bold',
          color: '#ecf0f1'
        }}>
          My Favorite Cities Travel App
        </p>
        
        <p style={{ 
          margin: 0,
          fontSize: '1rem',
          color: '#bdc3c7',
          lineHeight: '1.5'
        }}>
          © {currentYear} My Favorite Cities. All rights reserved.
        </p>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '20px',
          marginTop: '15px',
          flexWrap: 'wrap'
        }}>
          <span style={{ 
            padding: '8px 16px',
            backgroundColor: '#34495e',
            borderRadius: '20px',
            fontSize: '0.9rem',
            border: '1px solid #4a6572'
          }}>
            Travel
          </span>
          <span style={{ 
            padding: '8px 16px',
            backgroundColor: '#34495e',
            borderRadius: '20px',
            fontSize: '0.9rem',
            border: '1px solid #4a6572'
          }}>
            Cities
          </span>
          <span style={{ 
            padding: '8px 16px',
            backgroundColor: '#34495e',
            borderRadius: '20px',
            fontSize: '0.9rem',
            border: '1px solid #4a6572'
          }}>
            Explore
          </span>
        </div>
        
        <div style={{ 
          marginTop: '15px',
          paddingTop: '15px',
          borderTop: '1px solid #34495e'
        }}>
          <p style={{ 
            margin: 0,
            fontSize: '0.9rem',
            color: '#95a5a6'
          }}>
            Made with React and inline CSS styling
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;