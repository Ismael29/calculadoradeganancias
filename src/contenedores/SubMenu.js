import React from 'react';
import Menu from "../componentes/Menu"

const SubMenu = ({menu ,agregarAlCarrito}) => {
    return ( 
        <div id="menu">
            <h2>Artefactos</h2>
            <div id="menu-area">
                {/*Artefactos Listado*/}
                {Object.keys(menu).map((parametro2,index)=>( 
                    <Menu
                        nombre={menu[parametro2].nombre}
                        precio={menu[parametro2].precio}
                        agregarAlCarrito={agregarAlCarrito}
                        parametro3={parametro2}
                    />
                ))}
            </div>
        </div>
     );
}

export default SubMenu;