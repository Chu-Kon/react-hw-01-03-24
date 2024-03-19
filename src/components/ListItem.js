import React, { useState } from 'react';

export default function ListItem({ addItem }) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Проверка на пустую строку
    if (!inputValue.trim()) return;
    addItem({
      id: Date.now().toString(),
      todo: inputValue,
      done: false,
    });
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Введите новую задачу"
      />
      <button type="submit">Добавить</button>
    </form>
  );
}
