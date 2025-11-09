import React from 'react';

const MainContent = () => {
  return (
    <main style={{ 
      padding: '30px',
      backgroundColor: '#ecf0f1',
      minHeight: '400px',
      border: '1px solid #bdc3c7',
      borderRadius: '8px',
      margin: '0 20px 20px 20px',
      boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ 
        color: '#2c3e50',
        textAlign: 'center',
        fontSize: '2rem',
        marginBottom: '25px',
        textDecoration: 'underline',
        textDecorationColor: '#3498db'
      }}>
        Welcome to Our Travel Platform
      </h2>
      
      <div style={{ 
        display: 'flex',
        flexDirection: 'column',
        gap: '20px'
      }}>
        <section style={{ 
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          borderLeft: '5px solid #e74c3c'
        }}>
          <h3 style={{ 
            color: '#e74c3c',
            marginBottom: '10px'
          }}>
            Explore Destinations
          </h3>
          <p style={{ 
            lineHeight: '1.6',
            color: '#2c3e50'
          }}>
            Discover breathtaking cities around the globe with our curated travel guides and recommendations.
          </p>
        </section>

        <section style={{ 
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          borderLeft: '5px solid #2ecc71'
        }}>
          <h3 style={{ 
            color: '#27ae60',
            marginBottom: '10px'
          }}>
            Travel Tips
          </h3>
          <p style={{ 
            lineHeight: '1.6',
            color: '#2c3e50'
          }}>
            Get insider tips on the best times to visit, local cuisine, and hidden gems in each city.
          </p>
        </section>
      </div>
    </main>
  );
};

export default MainContent;