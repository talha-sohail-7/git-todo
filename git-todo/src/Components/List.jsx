import React from 'react';

function List({ items, deleteItem }) {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <span className='icons'>
              <button
                className="fa-solid fa-trash-can icon-delete"
                onClick={() => deleteItem(index)}
              >-</button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default List;

