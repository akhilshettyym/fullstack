import { useState } from 'react';
import './App.css';
import Callback from './Callback';

function App() {
  const [UIColor, setUIColor] = useState(null);

  // This function will be passed to Callback component
  const getColor = (color) => {
    setUIColor(color);
  };

  return (
    <div className="App">
      <div
        className="app-color-container"
        style={{ backgroundColor: `${UIColor}`, height: '100px', width: '100%' }}
      >
        <h3 style={{ color: '#fff', textAlign: 'center', padding: '1rem' }}>
          Background Color: {UIColor || 'None'}
        </h3>
      </div>

      <Callback getColor={getColor} />
    </div>
  );
}

export default App;