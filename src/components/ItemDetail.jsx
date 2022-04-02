
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
        </div>
    )

}


export default ItemDetail;