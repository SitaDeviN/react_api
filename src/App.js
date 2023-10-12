import React from 'react';
import MyHeader from './JS/Header'; // Rename the import to a different name

function App() {
  return (
    <div className="App">
      <MyHeader /> {/* Use the imported component with the new name */}
      {/* Other content */}
    </div>
  );
}

export default App;
