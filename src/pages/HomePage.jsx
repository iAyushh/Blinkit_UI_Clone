import React, { useState, useEffect } from 'react';
import Header from '../components/layout/Header';
import Categories from '../components/home/Categories';
import Banner from '../components/home/Banner';
import ProductCard from '../components/home/ProductCard';
import SkeletonLoader from '../components/common/SkeletonLoader';
import CartAlert from '../components/common/CartAlert';
import { products } from '../data/products';
import Footer from '../components/layout/Footer';

const HomePage = () => {
  const [cart, setCart] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);
  const [showCartAlert, setShowCartAlert] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
  }, []);

  const handleAddToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id);
    if (existingItem) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    
    setShowCartAlert(true);
    setTimeout(() => setShowCartAlert(false), 2000);
  };

  const handleCartClick = () => {
    alert(`Cart Items: ${cart.length}\nTotal Quantity: ${cartCount}\n\nItems:\n${cart.map(item => `${item.name} x${item.quantity}`).join('\n')}`);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header 
        cartCount={cartCount} 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        onCartClick={handleCartClick}
      />
      
      <CartAlert show={showCartAlert} />
      
      <Banner />
      <Categories />
      
      {/* Products Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            {searchTerm ? `Search results for "${searchTerm}"` : 'Popular Products'}
          </h2>
          {filteredProducts.length > 0 && (
            <p className="text-gray-600 font-medium">
              {filteredProducts.length} products
            </p>
          )}
        </div>
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-7xl mb-4">🔍</div>
            <p className="text-2xl font-semibold text-gray-600 mb-2">No products found</p>
            <p className="text-gray-500">Try searching for something else</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {loading
              ? Array(8).fill(0).map((_, i) => <SkeletonLoader key={i} />)
              : filteredProducts.map(product => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onAddToCart={handleAddToCart}
                  />
                ))
            }
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default HomePage;