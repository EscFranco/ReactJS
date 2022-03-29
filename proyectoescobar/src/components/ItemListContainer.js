import ItemCount from "./ItemCount"


function ItemListContainer ({greeting}) {
    
    function onAdd(producto) {
        console.log (`Has agregado ${producto} item`)
    }

    return (
        <main>
            <h2>{greeting}</h2>
            <ItemCount stock={10} initial={1} onAdd={onAdd} />
        </main>
    )
}

export default ItemListContainer;

