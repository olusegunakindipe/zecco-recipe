import React from 'react';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Recipe from './components/Recipe/Recipe';
import Shop from './components/Shop/Shop';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Recipe />
      <Shop />
      <Cart/>
    </div>
  );
}

export default App;
