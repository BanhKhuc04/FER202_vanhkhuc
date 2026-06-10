import { useState } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (!exists) {
      setCartItems([...cartItems, product]);
    }
  };

  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Header
        cartItems={cartItems}
        cartCount={cartItems.length}
        onRemoveFromCart={handleRemoveFromCart}
      />

      <Banner />

      <ProductList
        cartItems={cartItems}
        onAddToCart={handleAddToCart}
      />

      <Footer />
    </>
  );
}

export default App;