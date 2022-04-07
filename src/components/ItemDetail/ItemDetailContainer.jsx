import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {

    const [producto, setProducto] = useState({});
    const { id } = useParams()

    

    useEffect (() => {
        fetch("./data/hombres.json")
        .then((response) => response.json())
        .then((json) => {
            console.log (json)
            const filterArray = json.filter((product) => {
                console.log(product.id)
                console.log(id)
                return product.id === id
            })
            setProducto(filterArray[0])
        });
}, [id]);

    return (
        <div className="DetailContainer">
            {Object.keys(producto).length !== 0 ? (
                <ItemDetail item={producto} />
            ) : (
                ""
            )}
        </div>

    )

}

export default ItemDetailContainer;


