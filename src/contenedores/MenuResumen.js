import React,{useState,useEffect} from 'react';
import SubMenu from "./SubMenu";
import Resumen from "./Resumen";
const MenuResumen = ()=> {
    
    const [artefactos, setArtefactos]=useState({
        "1":{
            nombre:"Aplique 1 Luz",
            precio: 150
        },
        "2":{
            nombre:"Aplique 2 Luces",
            precio: 200
        },
        "3":{
            nombre:"Oxido 1 Luz",
            precio: 300
        },
        "4":{
            nombre:"Oxido 2 Luces",
            precio: 300
        },
        "5":{
            nombre:"Colgante 1 Luz",
            precio: 300
        },
        "6":{
            nombre:"Colgante 2 Luces",
            precio: 300
        },
        "7":{
            nombre:"Colgante 3 Luces",
            precio: 300
        },
        "8":{
            nombre:"Colgante 4 Luces",
            precio: 300
        },
        "9":{
            nombre:"Colgante 4 Luces Cruz",
            precio: 300
        },
        "10":{
            nombre:"Velador Campo",
            precio: 300
        }
    });
    const [carritoInfo,setCarritoInfo]=useState({});
    const [total,setTotal]=useState(0);
    
    useEffect(() => {
        let total = 0;
        Object.keys(carritoInfo).map((parametro,_) => {
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
