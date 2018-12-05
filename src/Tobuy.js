import React from 'react';

const Tobuy = ({ id, name, complete, tobuyClick }) => (
  <li
    style={ complete ? { ...styles.tobuy, ...styles.complete } : styles.tobuy }
    onClick={ () => tobuyClick(id) }
  >
   {name}
  </li>
);

const styles = {
  tobuy: { cursor: 'pointer' },
  complete: { color: 'grey', textDecoration: 'line-through' },
};

export default Tobuy;