import React, { useState } from 'react';
import './Store.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import { FaShoppingCart, FaTimes } from 'react-icons/fa';
import image1 from './Images/brush.jpg';
import image2 from './Images/lipstick.jpg';
import image3 from './Images/color.jpg';
import image4 from './Images/qutex.jpg';
import SearchBar from './SearchBar';
import ImageSlider from './ImageSlider';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const products = [
  { id: 1, name: 'Brush', price: 0.80, image: image1 },
  { id: 2, name: 'Lipstick', price: 1.47, image: image2 },
  { id: 3, name: 'Color', price: 3.16, image: image3 },
  { id: 4, name: 'Qutex', price: 11.18, image: image4 },
];

const convertToLKR = (priceInUSD) => {
  const conversionRate = 312.94;
  const priceInLKR = priceInUSD * conversionRate;
  return priceInLKR.toFixed(2);
};

const Product = ({ product, addToCart, removeFromCart }) => {
  const isAddedToCart = !!product.cartQuantity;

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Rs {convertToLKR(product.price)}</p>
        {!isAddedToCart && <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>}
        {isAddedToCart && <button className="remove-from-cart" onClick={() => removeFromCart(product)}>Remove from Cart</button>}
      </div>
    </div>
  );
};

const Cart = ({ cartItems, total, checkout, toggleCart }) => {
  return (
    <div className="cart">
      <button className="close-cart" onClick={toggleCart}><FaTimes /></button>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>{item.name} - Rs {item.cartQuantity * convertToLKR(item.price)}</li>
        ))}
      </ul>
      <p>Total: Rs {total}</p>
      <button className="checkout" onClick={checkout}>Checkout</button>
    </div>
  );
};

const Store = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [showPaymentForm, setShowPaymentForm] = useState(false);

  const toggleCart = () => {
    setCartOpen(!cartOpen);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, cartQuantity: item.cartQuantity + 1 } : item));
    } else {
      setCartItems([...cartItems, { ...product, cartQuantity: 1 }]);
    }
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  const checkout = () => {
    setShowPaymentForm(true);
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);

  return (
    <div className={`App ${cartOpen ? 'dark-mode' : ''}`}>
      <button className="cart-button" onClick={toggleCart}>
        <FaShoppingCart />
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </button>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ImageSlider />
      <div className='store'>
        <div className="products">
          {products.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
          ))}
        </div>
      </div>
      {cartOpen && !showPaymentForm && (
        <Cart cartItems={cartItems} total={convertToLKR(total)} checkout={checkout} toggleCart={toggleCart} />
      )}
      {showPaymentForm && (
        <div className="payment-section">
          <Elements stripe={stripePromise}>
            <PaymentForm checkout={checkout} />
          </Elements>
        </div>
      )}
    </div>
  );
};

export default Store;
