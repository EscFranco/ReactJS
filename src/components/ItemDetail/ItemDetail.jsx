import ItemCount from "../ItemList/ItemCount"
import { cartContext } from "../Context/CartContext.jsx";
import { useContext } from "react";


const ItemDetail = ({item}) => {

    const { addProduct } = useContext(cartContext);

    const onAdd = (cantidad) => {
        addProduct(item,cantidad)
        console.log(`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
    }
    

    return (
        <div id={item.id}>
            <img src={item.image} alt="hola"></img>
            <div>
                <h2>{item.title}</h2>
                <p>Precio: ${item.precio}</p>
                <p>Genero: {item.genero}</p>
                <p>Material: {item.material}</p>
                <p>Capucha: {item.capucha}</p>
                <p>Bolsillo: {item.bolsillo}</p>
                <p>Origen: {item.origen}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </div>
    )

}

export default ItemDetail;