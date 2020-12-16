import React from 'react';
const Menu = ({nombre,precio,agregarAlCarrito,parametro3}) => {
    return ( 
        <div className="menu-item">
      <span className="menu-text">{`${nombre} - $${precio}`}</span>
      <span className="menu-action">
        <button  onClick={() => agregarAlCarrito(parametro3)}>+</button>
      </span>
    </div>
     );
}
export default Menu;
