import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      border: '2px solid #333',
      padding: '20px',
      margin: '20px',
      borderRadius: '10px',
      backgroundColor: '#f5f5f5',
      textAlign: 'center'
    }}>
      <h2 style={{
        color: 'darkblue',
        marginBottom: '20px'
      }}>
        Counter: {count}
      </h2>
      
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        flexWrap: 'wrap'
      }}>
        <button
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Increment
        </button>
        
        <button
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Decrement
        </button>
        
        <button
          onClick={() => setCount(0)}
          style={{
            backgroundColor: '#008CBA',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;