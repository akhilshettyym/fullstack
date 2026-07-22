import React from 'react';

const Callback = ({ getColor }) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <button onClick={() => getColor('lightblue')}>Set Light Blue</button>
      <button onClick={() => getColor('tomato')} style={{ marginLeft: '1rem' }}>
        Set Tomato
      </button>
    </div>
  );
};

export default Callback;