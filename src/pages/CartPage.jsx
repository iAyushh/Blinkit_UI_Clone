import React from "react";

const CartPage = ({ cart, setCart }) => {
  const increment = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrement = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity - 1) } : item
    ));
  };

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500 text-xl">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8">Your Cart</h2>

      <div className="grid grid-cols-1 gap-6">
        {cart.map(item => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center bg-white p-4 rounded-2xl shadow-sm border">
            <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-xl mb-4 sm:mb-0 sm:mr-6" />
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
              <p className="text-gray-500">{item.weight}</p>
              <div className="flex items-center gap-4 mt-2">
                <button onClick={() => decrement(item.id)} className="px-3 py-1 bg-gray-200 rounded-lg">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => increment(item.id)} className="px-3 py-1 bg-gray-200 rounded-lg">+</button>
              </div>
              <p className="mt-2 text-lg font-bold">₹{item.price * item.quantity}</p>
            </div>
            <button onClick={() => removeItem(item.id)} className="mt-4 sm:mt-0 sm:ml-4 px-4 py-2 bg-red-500 text-white rounded-lg">
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-end text-2xl font-bold">
        Total: ₹{totalPrice}
      </div>
    </div>
  );
};

export default CartPage;
