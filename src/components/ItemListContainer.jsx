import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"
import ProductoListado from "./Productos";


const promesa = new Promise ((res,rej) =>{
    setTimeout(()=>{
        res(ProductoListado);
    },2000)
});

function ItemListContainer ({greeting}) {

    const [producto, setProducto] = useState ([]);

    useEffect(()=>{
        promesa.then((producto) => {
            setProducto(producto);
        })
        .catch (() => {
            console.log ("No cargaron los productos")
        })

    } , []);

    function onAdd(cantidad) {
        console.log (`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
    }

    return (
        <main>
            <h2>{greeting}</h2>
            <ItemList items={producto} />
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </main>
    )
}

export default ItemListContainer;


// function ItemListContainer ({greeting}) {

//     const [producto, setProducto] = useState ([]);

//     useEffect(() => {
//         setTimeout(() => {
//             fetch("./data/hombres.json")
//                 .then((response) => response.json())
//                 .then((json) => {
//                     setProducto([...json]);
//                 });
//         }, 2000);
//     }, []);

//     function onAdd(cantidad) {
//         console.log (`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
//     }

//     return (
//         <main>
//             <h2>{greeting}</h2>
//             <ItemList items={producto} />
//             <ItemCount stock={10} initial={1} onAdd={onAdd} />
//         </main>
//     )
// }

// export default ItemListContainer;
