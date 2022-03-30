
const Item = ({item}) => {
    console.log (item)

    return (
        <div id={item.id}>
            <img src={item.image} alt="hola"></img>
            <div>
                <p>{item.title}</p>
                <p>{item.precio}</p>
            </div>
        </div>
    )

}

export default Item;