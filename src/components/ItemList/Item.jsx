import { Link } from "react-router-dom";


const Item = ({item}) => {
    return (
        <div id={item.id}>
            <img src={item.image} alt="hola"></img>
            <div className="centrar">
                <p>{item.title}</p>
                <p>${item.precio}</p>
                <Link to={`/item/${item.id}`}>
                    <button>
                        Ver Informacion
                    </button>
                </Link>
            </div>
        </div>
    )

}

export default Item;