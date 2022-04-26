import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList"
import { db } from "../Firebase/firebase"

function ItemListContainer({ greeting }) {

    const [producto, setProducto] = useState([]);
    const { categoryName } = useParams()

    useEffect(() => {

        const productosCollec = collection(db, "productos")
        const q = query(
            productosCollec,
            where("categoria", "==", `${categoryName}`)
        );
        getDocs(categoryName ? q : productosCollec)
        .then((result) => {
            const docs = result.docs;
            const prodList = docs.map(produc => {
                const id = produc.id
                const product = { id, ...produc.data()}
                return product
            })
            setProducto(prodList)
        })
        .catch((error) => {
            console.log(error);
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
