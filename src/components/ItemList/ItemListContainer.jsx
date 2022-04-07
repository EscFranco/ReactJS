import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemCount from "./ItemCount"
import ItemList from "./ItemList"

function ItemListContainer({ greeting }) {

    const [producto, setProducto] = useState([]);
    const { categoryName } = useParams()

    useEffect(() => {
        fetch("./data/hombres.json")
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                if (categoryName === undefined) {
                    setProducto([...json]);
                } else {
                    setProducto(
                        json.filter((product) => {
                            return product.categoria === categoryName;
                        })
                    );
                }
            });
    }, [categoryName]);

    function onAdd(cantidad) {
        console.log(`Has agregado ${cantidad} ${cantidad === 1 ? "producto" : "productos"}`)
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