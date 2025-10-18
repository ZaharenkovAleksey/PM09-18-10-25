import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './ProductList.css';

const products = [
  { id: 1, name: 'Товар 1', price: 100 },
  { id: 2, name: 'Товар 2', price: 200 },
  { id: 3, name: 'Товар 3', price: 300 },
];

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-list-container">
      <h2 className="product-list-title">Товары</h2>
      <ul className="product-list">
        {products.map((product) => (
          <li key={product.id} className="product-item">
            <div className="product-info">
              <span className="product-name">{product.name}</span>
              <span className="product-price">${product.price}</span>
            </div>
            <button
              className="add-to-cart-button"
              onClick={() => addToCart(product)}
            >
              В корзину
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;