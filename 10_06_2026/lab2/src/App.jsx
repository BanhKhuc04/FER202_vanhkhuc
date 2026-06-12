import './App.css';
import { useState } from 'react';

import Header from './components/Header';
import Banner from './components/Banner';
import ProductList from './components/ProductList';
import Footer from './components/Footer';

function App() {
  const [cartCount, setCartCount] = useState(0);

  function handleAddToCart() {
    setCartCount(cartCount + 1);
  }

  return (
    <>
      <Header cartCount={cartCount} />

      <Banner />

      <ProductList onAddToCart={handleAddToCart} />

      <Footer />
    </>
  );
}

export default App;