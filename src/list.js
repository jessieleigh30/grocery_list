import React from 'react';
import Tobuy from './Tobuy'



const List = ({ items, name, tobuyClick }) => (
 <div>
   <h2>{name}</h2>
   <ul>
   { items.map( item => <Tobuy key={item.id} {...item} tobuyClick={tobuyClick} /> )}
   </ul>
 </div>
);


export default List;