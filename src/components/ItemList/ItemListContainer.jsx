import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList"

function ItemListContainer({ greeting }) {

    const [producto, setProducto] = useState([]);
    const { categoryName } = useParams()

    useEffect(() => {
        fetch("/data/hombres.json")
            .then((response) => response.json())
            .then((json) => {
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


    return (
        <main>
            <h2>{greeting}</h2>
            <ItemList items={producto} />
        </main>
    )
}

export default ItemListContainer;
