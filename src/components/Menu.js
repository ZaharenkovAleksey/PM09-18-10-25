import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import './Menu.css';

const Menu = () => {
  const { addToCart } = useContext(CartContext);

  const categories = [
    {
      name: 'Кофе',
      items: [
        { name: 'Эспрессо', description: 'Классический эспрессо', price: '150 ₽' },
        { name: 'Капучино', description: 'Сливочное молоко и пенка', price: '200 ₽' },
        { name: 'Авторский напиток', description: 'Эксклюзивный рецепт', price: '250 ₽' },
      ],
    },
    {
      name: 'Десерты',
      items: [
        { name: 'Торт "Наполеон"', description: 'Мягкий и воздушный', price: '300 ₽' },
        { name: 'Пирожное "эклер"', description: 'Крем и шоколад', price: '150 ₽' },
      ],
    },
    {
      name: 'Завтраки',
      items: [
        { name: 'Омлет', description: 'С овощами и сыром', price: '250 ₽' },
        { name: 'Блины', description: 'С ягодами и сметаной', price: '200 ₽' },
      ],
    },
    {
      name: 'Книги',
      items: [
        { name: 'Книга "Мастера кофе"', description: 'О кофе и кофеен', price: '300 ₽' },
        { name: 'Книга "Литературные вечера"', description: 'Лучшие произведения', price: '300 ₽' },
      ],
    },
  ];

  const handleAddToCart = (item) => {
    addToCart({
      name: item.name,
      description: item.description,
      price: item.price,
    });
  };

  return (
    <div style={{ 
      maxWidth: '1200px', 
      margin: '0 auto', 
      padding: '20px', 
      backgroundColor: '#f5f5f5', 
      borderRadius: '8px' 
    }}>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Меню</h2>
      {categories.map((category, idx) => (
        <div key={idx} style={{ marginBottom: '30px' }}>
          <h3 style={{ marginBottom: '10px' }}>{category.name}</h3>
          {category.items.map((item, i) => (
            <div key={i} style={{ borderBottom: '1px solid #ccc', padding: '10px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ margin: '0 0 5px' }}>
                    {item.name} - {item.price}
                  </h4>
                  <p style={{ margin: 0 }}>{item.description}</p>
                </div>
                <button
                  style={{
                    padding: '8px 16px',
                    backgroundColor: '#ff6f61',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '14px',
                    fontWeight: 'bold',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    transition: 'background-color 0.3s, transform 0.2s',
                  }}
                  onMouseOver={(e) => {
                    e.target.style.backgroundColor = '#ff3b2e';
                    e.target.style.transform = 'scale(1.05)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.backgroundColor = '#ff6f61';
                    e.target.style.transform = 'scale(1)';
                  }}
                  onClick={() => handleAddToCart(item)}
                >
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;