import React from 'react';
const Resumen = ({total, carrito, menu, sacarDelCarrito}) => {
    return ( 
        <div id="cart">
        <h2 className="text-center">Ganancia</h2>
        <div id="cart-area">
          {Object.keys(carrito).map((parametro1, index) => (
            <div className="cart-item" parametro1={index}>
              <span className="item-text">
                {menu[parametro1].nombre}x{carrito[parametro1]}  {/* Aca capaz error*/}
              </span>
              <span className="item-total">${menu[parametro1].precio}</span>
              <button className="remove-button" onClick={() => sacarDelCarrito(parametro1)}>
                -
              </button>
            </div>
          ))}
          <div id="cart-total">
            <div className="cart-item">
              <span className="item-text">Ganancia Total</span>
              <p className="item-total">
                $<span id="total-amount">{total}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Resumen;