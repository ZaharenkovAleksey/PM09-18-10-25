import React, { useState } from 'react';
import './Blog.css';

const Blog = () => {
  const [events, setEvents] = useState([
    {
      title: 'Встреча с автором',
      date: '2025-05-05',
      description: 'Приходите познакомиться с известным писателем.',
    },
    {
      title: 'Книжный клуб',
      date: '2025-05-10',
      description: 'Обсуждаем новую книгу.',
    },
    {
      title: 'Мастер-класс по кофе',
      date: '2025-05-15',
      description: 'Учимся варить кофе как профессионал.',
    },
  ]);

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    description: '',
  });

  const handleInputChange = (e) => {
    setNewEvent({ ...newEvent, [e.target.name]: e.target.value });
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    if (newEvent.title && newEvent.date && newEvent.description) {
      setEvents([...events, { ...newEvent }]);
      setNewEvent({ title: '', date: '', description: '' });
    }
  };

  return (
    <div className="blog">
      <h2 className="section-title">Мероприятия и новости</h2>
      <form className="add-event-form" onSubmit={handleAddEvent}>
        <h3 className="form-title">Добавить новое мероприятие/новость</h3>
        <div className="form-group">
          <input
            type="text"
            name="title"
            placeholder="Заголовок"
            value={newEvent.title}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          <input
            type="date"
            name="date"
            value={newEvent.date}
            onChange={handleInputChange}
            required
            className="form-input"
          />
          <textarea
            name="description"
            placeholder="Описание"
            value={newEvent.description}
            onChange={handleInputChange}
            required
            rows={3}
            className="form-textarea"
          />
        </div>
        <button className="add-button" type="submit">Добавить</button>
      </form>

      <div className="events-list">
        {events.map((event, index) => (
          <div key={index} className="event">
            <h3 className="event-title">{event.title}</h3>
            <p className="event-date"><strong>Дата:</strong> {event.date}</p>
            <p className="event-description">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;