import React, { useState } from 'react';
import List from './List';

function Todo() {
  const [input, setInput] = useState("");
  const [list, setList] = useState([]);

  const handleSubmit = () => {
    if (input.trim()) {
      setList([...list, input]);
      setInput("");
    }
  };

  const deleteItem = (index) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <div>
      <input
        type="text"
        value={input}
        placeholder='Enter your task'
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Task</button>
      <List items={list} deleteItem={deleteItem} />
    </div>
  );
}
export default Todo



