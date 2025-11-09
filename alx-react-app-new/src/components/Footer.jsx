import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer style={{ 
      backgroundColor: '#333',
      color: 'white',
      textAlign: 'center',
      padding: '20px',
      marginTop: '20px',
      borderTop: '3px solid #666'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <p style={{ 
          margin: '0 0 10px 0',
          fontSize: '1.1rem',
          fontWeight: 'bold'
        }}>
          My Favorite Cities Travel App
        </p>
        
        <p style={{ 
          margin: 0,
          fontSize: '0.9rem',
          color: '#ccc'
        }}>
          © {currentYear} My Favorite Cities. All rights reserved.
        </p>
        
        <div style={{ 
          display: 'flex',
          justifyContent: 'center',
          gap: '15px',
          marginTop: '15px'
        }}>
          <span style={{ 
            padding: '5px 10px',
            backgroundColor: '#555',
            borderRadius: '15px',
            fontSize: '0.8rem'
          }}>
            Travel
          </span>
          <span style={{ 
            padding: '5px 10px',
            backgroundColor: '#555',
            borderRadius: '15px',
            fontSize: '0.8rem'
          }}>
            Cities
          </span>
          <span style={{ 
            padding: '5px 10px',
            backgroundColor: '#555',
            borderRadius: '15px',
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