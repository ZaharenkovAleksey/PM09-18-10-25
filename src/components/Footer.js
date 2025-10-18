import React from 'react';
import './Footer.css';

const Footer = () => (
  <footer style={{ padding: '20px', background: '#222', color: '#fff', marginTop: '20px' }}>
    <p>&copy; 2025 Кофейня «Кофе и Книги»</p>
    <p>Адрес: МЕГА Омск ул. бул. Архитекторов, 35 | Телефон: +7 (123) 456-78-90 | Email: coffeebooks@mail.ru</p>
    <div>
      <a href="https://vk.com" style={{ color: '#fff', marginRight: '10px' }}>VK</a>
      <a href="https://instagram.com" style={{ color: '#fff', marginRight: '10px' }}>Instagram</a>
      <a href="https://facebook.com" style={{ color: '#fff' }}>Facebook</a>
    </div>
  </footer>
);

export default Footer;