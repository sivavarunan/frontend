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
import Section3 from './section3';

const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const conversionRate = 312.94;

const products = [
  { id: 1, name: 'Brush', priceUSD: 0.80, priceLKR: (0.80 * conversionRate).toFixed(2), image: image1 },
  { id: 2, name: 'Lipstick', priceUSD: 1.47, priceLKR: (1.47 * conversionRate).toFixed(2), image: image2 },
  { id: 3, name: 'Color', priceUSD: 3.16, priceLKR: (3.16 * conversionRate).toFixed(2), image: image3 },
  { id: 4, name: 'Qutex', priceUSD: 11.18, priceLKR: (11.18 * conversionRate).toFixed(2), image: image4 },
];

const Product = ({ product, addToCart, removeFromCart }) => {
  const isAddedToCart = !!product.cartQuantity;

  return (
    <div className="product">
      <img src={product.image} alt={product.name} className="product-image" />
      <div className="product-details">
        <h3>{product.name}</h3>
        <p>Rs {product.priceLKR}</p>
        {!isAddedToCart && <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>}
        {isAddedToCart && <button className="remove-from-cart" onClick={() => removeFromCart(product)}>Remove from Cart</button>}
      </div>
    </div>
  );
};

const Cart = ({ cartItems, total, checkout, toggleCart, incrementItem, decrementItem }) => {
  return (
    <div className="cart">
      <button className="close-cart" onClick={toggleCart}><FaTimes /></button>
      <h2>Cart</h2>
      <ul>
        {cartItems.map(item => (
          <li key={item.id}>
            {item.name} - Rs {item.cartQuantity * item.priceLKR}
            <div className="quantity-controls">
              <button onClick={() => decrementItem(item)}>-</button>
              <span>{item.cartQuantity}</span>
              <button onClick={() => incrementItem(item)}>+</button>
            </div>
          </li>
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
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem.cartQuantity > 1) {
      setCartItems(cartItems.map(item => item.id === product.id ? { ...item, cartQuantity: item.cartQuantity - 1 } : item));
    } else {
      setCartItems(cartItems.filter(item => item.id !== product.id));
    }
  };

  const incrementItem = (item) => {
    setCartItems(cartItems.map(cartItem => cartItem.id === item.id ? { ...cartItem, cartQuantity: cartItem.cartQuantity + 1 } : cartItem));
  };

  const decrementItem = (item) => {
    setCartItems(cartItems.map(cartItem => cartItem.id === item.id ? { ...cartItem, cartQuantity: cartItem.cartQuantity - 1 } : cartItem));
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const checkout = () => {
    setShowPaymentForm(true);
  };

  const total = cartItems.reduce((sum, item) => sum + (item.priceUSD * item.cartQuantity * conversionRate), 0).toFixed(2);

  return (
    <div className={`App ${cartOpen ? 'dark-mode' : ''}`}>
      <button className="cart-button" onClick={toggleCart}>
        <FaShoppingCart />
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </button>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div className='section3'>
        <Section3 />
      </div>
      <div className='store'>
        <div className="products">
          {filteredProducts.map(product => (
            <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
          ))}
        </div>
      </div>
      {cartOpen && !showPaymentForm && (
        <Cart 
          cartItems={cartItems} 
          total={total} 
          checkout={checkout} 
          toggleCart={toggleCart} 
          incrementItem={incrementItem} 
          decrementItem={decrementItem} 
        />
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
