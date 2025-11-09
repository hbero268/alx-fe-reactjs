import React from 'react';

const Header = () => {
  return (
    <header style={{ 
      backgroundColor: 'navy', 
      color: 'white', 
      textAlign: 'center',
      padding: '15px 0'
    }}>
      <h1 style={{ 
        margin: 0,
        fontSize: '2rem'
      }}>
        My Favorite Cities
      </h1>
    </header>
  );
};

export default Header;