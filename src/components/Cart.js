import React, { useContext, useState, useRef } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cartItems, removeFromCart } = useContext(CartContext);
  const [showPayment, setShowPayment] = useState(false);
  const paymentRef = useRef(null);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parseFloat(item.price),
    0
  );

  const handleShowPayment = () => {
    setShowPayment(true);
    setTimeout(() => {
      if (paymentRef.current) {
        paymentRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    }, 0);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        maxWidth: '800px',
        width: '100%',
        margin: '0 auto',
        overflow: 'auto',
        scrollBehavior: 'smooth',
        padding: '20px',
        boxSizing: 'border-box',
        backgroundColor: '#fff',
        borderRadius: '10px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2>Корзина</h2>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <ul>
          {cartItems.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              {item.name} - {item.price} ₽
              <button
                onClick={() => removeFromCart(item.id)}
                style={{
                  marginLeft: '10px',
                  padding: '5px 10px',
                  border: 'none',
                  borderRadius: '4px',
                  backgroundColor: '#e74c3c',
                  color: '#fff',
                  cursor: 'pointer',
                }}
              >
                Удалить
              </button>
            </li>
          ))}
        </ul>
      )}

      <h3>Общая цена: {totalPrice.toFixed(2)} ₽</h3>

      {cartItems.length > 0 && (
        <button
          onClick={handleShowPayment}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            backgroundColor: '#2980b9',
            color: '#fff',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Перейти к оплате
        </button>
      )}

      {/* Можно добавить условное отображение раздела оплаты, если showPayment true */}
      {showPayment && (
        <div ref={paymentRef} style={{ marginTop: '40px' }}>
          {/* Здесь может быть форма оплаты или другой компонент */}
          <h2>Форма оплаты</h2>
          {/* Например, форма или компонент оплаты */}
        </div>
      )}
    </div>
  );
};

export default Cart;