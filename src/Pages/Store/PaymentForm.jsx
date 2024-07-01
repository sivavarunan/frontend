import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import './PaymentForm.css';

const PaymentForm = ({ checkout }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log(paymentMethod);
      checkout();
    }
    setLoading(false);
  };

  return (
    <div className="payment-form">
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe || loading}>
          {loading ? 'Processing...' : 'Pay with Card'}
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default PaymentForm;
