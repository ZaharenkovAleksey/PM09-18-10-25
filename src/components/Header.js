import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo from '../img/logo.png';

const Header = () => (
  <header className="header">
    <div className="logo-container">
      <img src={logo} alt="Логотип" className="logo-img" />
      <h1>Кофейня «Кофе и Книги»</h1>
    </div>
    <nav className="nav">
      <Link to="/">Главная</Link>
      <Link to="/menu">Меню</Link>
      <Link to="/booking">Бронирование</Link>
      <Link to="/blog">Мероприятия</Link>
      <Link to="/contacts">Контакты</Link>
      <Link to="/cart">Корзина</Link>
      <Link to="/payment">Оплата</Link>
    </nav>
  </header>
);

export default Header;