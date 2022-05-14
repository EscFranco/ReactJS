import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from 'react-loader-spinner'
import { getDocs, collection, query, where } from "firebase/firestore";
import ItemList from "./ItemList"
import { db } from "../Firebase/firebase"

function ItemListContainer() {

    const [producto, setProducto] = useState([]);
    const { categoryName } = useParams()

    useEffect(() => {

        const productosCollec = collection(db, "productos")
        const categoria = query(
            productosCollec,
            where("categoria", "==", `${categoryName}`)
        );

        const destacados = query(
            productosCollec,
            where("destacado", "==", true)
        );

        getDocs(categoryName ? categoria : destacados)
            .then((result) => {
                const docs = result.docs;
                const prodList = docs.map(produc => {
                    const id = produc.id
                    const product = { id, ...produc.data() }
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
            {producto.length !== 0 ? (
                <div className="bg-white">
                    <div className="max-w-2xl mx-auto py-4 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
                        {categoryName === undefined ? (
                            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 pb-3 text-center">PRODUCTOS DESTACADOS</h2>
                        ) :
                            (
                                <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 capitalize pb-3 text-center">{categoryName}</h2>
                            )
                        }
                        <ItemList items={producto} />
                    </div>
                </div>
            ) :
                (
                    <div className="flex justify-center h-screen">
                        <ThreeDots color="red" height={200} width={200}/>
                    </div>                    
                )}

        </main>
    )
}

export default ItemListContainer;
