import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

const LineItem = ({ item, handleCheck, handleDelete }) => {
  return (
    // React need keys for each list item (6.18)
    <li className='item' key={item.id}>
      <input
        type='checkbox'
        /*
          we can't just call onChange={handleCheck}. 
          Bcz we need to pass in the id. this just reference the function.
          in here we should use anonymous function. with the anonymous function
          we can call another function inside of it.
          */
        onChange={() => handleCheck(item.id)}
        checked={item.checked}
      />
      <label
        style={item.checked ? { textDecoration: 'line-through' } : null}
        onDoubleClick={() => handleCheck(item.id)}
      >
        {item.item}
      </label>
      <FaTrashAlt onClick={() => handleDelete(item.id)} role='button' tabIndex='0' aria-label={`Delete ${item.item}`} />
    </li>
  );
};

export default LineItem;
