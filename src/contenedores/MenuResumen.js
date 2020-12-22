import React,{useState,useEffect} from 'react';
import SubMenu from "./SubMenu";
import Resumen from "./Resumen";
const MenuResumen = ()=> {
    
    const [artefactos, ]=useState({
        "1":{
            nombre:"Campo 1 Luz",
            precio: 1094
        },
        "2":{
            nombre:"Campo 2 Luces",
            precio: 1193
        },
        "3":{
            nombre:"Campo 3 Luces",
            precio: 1680
        },
        "4":{
            nombre:"Aplique Campo",
            precio: 900
        },
        "5":{
            nombre:"Doble Campo",
            precio: 1175
        },
        "6":{
            nombre:"Velador Campo",
            precio: 930
        },
        "7":{
            nombre:"Proximo Artefacto",
            precio: 0
        },
        "8":{
            nombre:"Proximo Artefacto",
            precio: 0
        },
        "9":{
            nombre:"Proximo Artefacto",
            precio: 0
        },
        "10":{
            nombre:"Proximo Artefacto",
            precio: 0
        }
    });
    const [carritoInfo,setCarritoInfo]=useState({});
    const [total,setTotal]=useState(0);
    
    useEffect(() => {
        let total = 0;
        Object.keys(carritoInfo).forEach((parametro,x) => {
          let qty = carritoInfo[parametro];
          let price = artefactos[parametro].precio;
          total += qty * price; 
        });
        setTotal(total);
      }, [artefactos,carritoInfo]);

    const agregarAlCarrito=parametro=>{
            let nuevoCarrito={...carritoInfo};
            if(parametro in carritoInfo){
                nuevoCarrito[parametro] +=1;
            }
            else{
                nuevoCarrito[parametro]=1;
            }
            setCarritoInfo(nuevoCarrito);
    };
    const sacarDelCarrito=parametro=>{

        let nuevoCarrito={...carritoInfo};
        if(parametro in carritoInfo){
            nuevoCarrito[parametro]-=1;
            if(nuevoCarrito[parametro]<1)delete nuevoCarrito[parametro];    
        }
        setCarritoInfo(nuevoCarrito);
    };
    return (  
        <div id="menu-cart">
            <SubMenu menu={artefactos} agregarAlCarrito={agregarAlCarrito}/>
            <Resumen 
             carrito={carritoInfo}
             total={total}
             sacarDelCarrito={sacarDelCarrito}
             menu={artefactos} 
             />
        </div>
    );
}

export default MenuResumen;
