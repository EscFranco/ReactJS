import ItemCount from "../ItemList/ItemCount"

function onAdd(cantidad) {
    console.log(`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
}



const ItemDetail = ({item}) => {

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