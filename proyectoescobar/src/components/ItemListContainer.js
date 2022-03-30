import { useEffect, useState } from "react";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

const ProductoListado = [
    { id:1 , title:"Buzo Nike French", precio:1000, image: "/img/hombres/buzo1.jpg" },
    { id:2 , title:"Buzo Nike Terry", precio:1000, image: "/img/hombres/buzo2.jpg" },
    { id:3 , title:"Buzo Nike Lakers", precio:1000, image: "/img/hombres/buzo3.jpg" },
    { id:4 , title:"Remera Nike Jumpman", precio:800, image: "/img/hombres/remera1.jpg" },
    { id:5 , title:"Remera Nike JDI", precio:800, image: "/img/hombres/remera2.jpg" },
    { id:6 , title:"Remera Nike Diamond", precio:800, image: "/img/hombres/remera3.jpg" }
]

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

