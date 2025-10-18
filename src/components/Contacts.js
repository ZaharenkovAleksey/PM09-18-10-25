import React from 'react';

const Contacts = () => (
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
    <h2>Контакты</h2>
    <div style={{
      border: '2px solid #ccc',
      padding: '10px',
      marginBottom: '20px',
      backgroundColor: '#f0f0f0',
      borderRadius: '8px',
    }}>
      <p>Адрес: МЕГА Омск ул. бул. Архитекторов, 35</p>
      <p>Телефон: +7 (123) 456-78-90</p>
      <p>Email: info@coffeebooks.ru</p>
    </div>
    <div style={{
      height: '300px',
      marginBottom: '20px',
      border: '2px solid #ccc',
      backgroundColor: '#e0e0e0',
      borderRadius: '8px',
      overflow: 'hidden'
    }}>
      <iframe
        title="Карта"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9161.383815959889!2d73.27847848547297!3d54.96703204792247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x43ab017076edcbf7%3A0x2bb3dd200acffa5f!2z0JzQldCT0JAg0J7QvNGB0Lo!5e0!3m2!1sru!2sus!4v1760776448797!5m2!1sru!2sus"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <h3 style={{ marginBottom: '15px', color: '#333' }}>Обратная связь</h3>
    <form style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px',
      padding: '15px',
      border: '2px solid #ccc',
      borderRadius: '8px',
      backgroundColor: '#fafafa',
    }}>
      <input
        type="text"
        placeholder="Ваше имя"
        required
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <input
        type="email"
        placeholder="Ваш email"
        required
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
        }}
      />
      <textarea
        placeholder="Ваш отзыв"
        rows={4}
        style={{
          padding: '10px',
          border: '1px solid #ccc',
          borderRadius: '4px',
          resize: 'vertical',
        }}
      ></textarea>
      <button
        type="submit"
        style={{
          padding: '10px',
          border: 'none',
          borderRadius: '4px',
          backgroundColor: '#4CAF50',
          color: 'white',
          cursor: 'pointer',
        }}
      >
        Отправить
      </button>
    </form>
  </div>
);

export default Contacts;