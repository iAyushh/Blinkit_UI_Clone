import React, { useState } from 'react';
import HomePage from './pages/HomePage';
import CartPage from './pages/CartPage';

function App() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState('home'); // page switch: 'home' or 'cart'

  return (
    <div className="min-h-screen bg-gray-50">
      

      {/* Page Render */}
      {page === 'home' ? (
        <HomePage cart={cart} setCart={setCart} />
      ) : (
        <CartPage cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;
