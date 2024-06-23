import React, { useState } from 'react';
import './Store.css';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import PaymentForm from './PaymentForm';
import image1 from './1.jpg'; // import the image
import image2 from './2.jpg';
import image3 from './3.jpg';
import image4 from './4.jpg';
const stripePromise = loadStripe('YOUR_STRIPE_PUBLIC_KEY');

const products = [
  { id: 1, name: '50 points', price: 0.80, image: image1 },
  { id: 2, name: '100 points', price: 1.47, image: image2 },
  { id: 3, name: '250 points', price: 3.16, image: image3 },
  { id: 4, name: '1000 points', price: 11.18, image: image4 },
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
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>Rs {convertToLKR(product.price)}</p>
      {!isAddedToCart && <button className="add-to-cart" onClick={() => addToCart(product)}>Add to Cart</button>}
      {isAddedToCart && <button className="remove-from-cart" onClick={() => removeFromCart(product)}>Remove from Cart</button>}
    </div>
  );
};

const Cart = ({ cartItems, total, checkout }) => {
  return (
    <div className="cart">
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
    // Implement the checkout logic here (e.g., redirect to a checkout page)
    console.log('Checkout');
  };

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.cartQuantity), 0);

  return (
    <div className={`App ${cartOpen ? 'dark-mode' : ''}`}>
      <button className="cart-button" onClick={toggleCart}>
        <i className="fas fa-shopping-cart"></i>
        {cartItems.length > 0 && <span className="cart-count">{cartItems.length}</span>}
      </button>
      <div className="products">
        {products.map(product => (
          <Product key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} />
        ))}
      </div>
      {cartOpen && (
        <Cart cartItems={cartItems} total={convertToLKR(total)} checkout={toggleCart}>
          <Elements stripe={stripePromise}>
            <PaymentForm checkout={checkout} />
          </Elements>
        </Cart>
      )}
    </div>
  );
};

export default Store;
