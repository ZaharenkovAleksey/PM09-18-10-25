import React, { useState } from 'react';
import Slider from 'react-slick';
import './MainPage.css';

import slide1Image from '../img/f1.jpg';
import slide2Image from '../img/images (6).jpg';
import slide3Image from '../img/photo.jpg';
import slide4Image from '../img/1556356067_5.jpg';

import productImage1 from '../img/c1.jpg'; 
import productImage2 from '../img/images (8).jpg'; 
import productImage3 from '../img/big_378723.jpg';

const MainPage = () => {
  const [activeSlide, setActiveSlide] = useState(0); 

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (current) => setActiveSlide(current),
    arrows: true,
    prevArrow: <button className="slick-prev" aria-label="Previous">←</button>,
    nextArrow: <button className="slick-next" aria-label="Next">→</button>,
  };

  const slides = [
    {
      title: 'Акции — Специальное предложение!',
      description: 'Скидки до 50% на выбранные позиции. Не пропустите!',
      image: slide1Image,
    },
    {
      title: 'Новинки меню',
      description: 'Попробуйте наши новые блюда.',
      image: slide2Image,
    },
    {
      title: 'Предстоящие события',
      description: 'Мастер-классы, встречи с авторами и книжные клубы.',
      image: slide3Image, 
    },
    {
      title: 'Попробуйте наш чизкейк',
      description: 'Невероятно вкусно.',
      image: slide4Image, 
    },
  ];

  const products = [
    {
      name: 'Кофе латте',
      price: '100 ₽',
      image: productImage1,
    },
    {
      name: 'Книги',
      price: '300 ₽',
      image: productImage2,
    },
    {
      name: 'Торты',
      price: '350 ₽',
      image: slide2Image, 
    },
    {
      name: 'Слойка',
      price: '120 ₽',
      image: productImage3, 
    },
  ];

  return (
    <div className="container">
      <div className="section">
        <h2 className="section-title">Добро пожаловать в «Кофе и Книги»</h2>
        <p className="section-text">
          Уютное место для любителей кофе и книг. Наслаждайтесь лучшими напитками и литературой.
        </p>
      </div>
      <div className="slider-wrapper">
        <Slider {...sliderSettings} className="custom-slider">
          {slides.map((slide, index) => (
            <div key={index} className="slide">
              {slide.image && (
                <div className="slide-image-container">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className={`slide-image ${index === activeSlide ? 'visible' : 'hidden'}`}
                  />
                </div>
              )}
              
              {index === activeSlide && (
                <div className="slide-text">
                  <h3>{slide.title}</h3>
                  <p>{slide.description}</p>
                </div>
              )}
            </div>
          ))}
        </Slider>
      </div>
      <div className="products-section">
        <h2 className="section-title">Наши товары</h2>
        <div className="products-grid">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              {product.image && (
                <img src={product.image} alt={product.name} className="product-image" />
              )}
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="buttons-container">
        <button className="button" onClick={() => (window.location.href = '/menu')}>Посмотреть меню</button>
        <button className="button" onClick={() => (window.location.href = '/booking')}>Забронировать столик</button>
        <button className="button" onClick={() => (window.location.href = '/contacts')}>Контакты</button>
      </div>
    </div>
  );
};

export default MainPage;