import React, { useContext } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { CartContext } from '../context/CartContext';

const stripePromise = loadStripe('ПУБЛИЧНЫЙ_КЛЮЧ_STRIPE');

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { cartItems, clearCart } = useContext(CartContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price, 0) * 100; 

    const response = await fetch('/create-payment-intent', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: totalAmount }),
    });
    const { clientSecret } = await response.json();

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });

    if (result.error) {
      alert('Ошибка платежа: ' + result.error.message);
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        alert('Оплата прошла успешно!');
        clearCart();
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        maxWidth: '700px',
        padding: '20px',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
        borderRadius: '10px',
        backdropFilter: 'blur(10px)', 
        boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
      }}
    >

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1, backgroundColor: 'rgba(255,255,255,0.6)', padding: '15px', borderRadius: '8px' }}>
          <h2>Реквизиты</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <input
                type="text"
                placeholder="Имя владельца"
                style={{
                  padding: '8px',
                  borderRadius: '4px',
                  border: 'none', 
                  outline: 'none', 
                  width: '100%'
                }}
              />
            </div>
          </div>
        </div>
        <div style={{ width: '300px', backgroundColor: 'rgba(255,255,255,0.6)', padding: '15px', borderRadius: '8px' }}>
          <h2>Оплата</h2>
          <CardElement options={{ style: { base: { fontSize: '16px' } } }} />
        </div>
      </div>
      <button
        type="submit"
        disabled={!stripe}
        style={{
          padding: '12px 24px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
      >
        Оплатить
      </button>
    </form>
  );
};

const Checkout = () => (
  <div
    style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundImage: 'url(ваша_картинка_фона.jpg)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}
  >
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  </div>
);

export default Checkout;