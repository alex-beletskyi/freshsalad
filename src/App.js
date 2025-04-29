import React, { useState } from 'react';
import './App.css';

function App() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddProductClick = () => {
    setIsFormOpen(true);
  };

  return (
    <div className="App">
      <h1>FreshSalad</h1>
      <button onClick={handleAddProductClick}>Add Product</button>

      {isFormOpen && (
        <div className="form">
          <h2>Add a new product</h2>
          <input type="text" placeholder="Enter product name" />
          <button>Save</button>
        </div>
      )}
    </div>
  );
}

export default App;
