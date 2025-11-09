import React from 'react';

const MainContent = () => {
  return (
    <main style={{ 
      padding: '20px',
      backgroundColor: '#ffffff',
      margin: '10px',
      border: '1px solid #ddd',
      borderRadius: '5px'
    }}>
      <h2 style={{ 
        color: 'darkgreen',
        textAlign: 'center',
        fontSize: '1.8rem',
        marginBottom: '15px'
      }}>
        Welcome to Our Travel Platform
      </h2>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '15px'
      }}>
        <section style={{ 
          backgroundColor: '#f0f8ff',
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid #cce7ff'
        }}>
          <h3 style={{ 
            color: 'navy',
            margin: '0 0 10px 0'
          }}>
            Explore Destinations
          </h3>
          <p style={{ 
            lineHeight: '1.5',
            color: '#333',
            margin: 0
          }}>
            Discover amazing cities around the world with our travel guides.
          </p>
        </section>

        <section style={{ 
          backgroundColor: '#f0fff0',
          padding: '15px',
          borderRadius: '5px',
          border: '1px solid #ccffcc'
        }}>
          <h3 style={{ 
            color: 'darkgreen',
            margin: '0 0 10px 0'
          }}>
            Travel Tips
          </h3>
          <p style={{ 
            lineHeight: '1.5',
            color: '#333',
            margin: 0
          }}>
            Get the best travel tips and recommendations for your journey.
          </p>
        </section>
      </div>
    </main>
  );
};

export default MainContent;