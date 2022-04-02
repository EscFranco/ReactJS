import { useEffect, useState } from "react"; 
import ItemDetail from "./ItemDetail";
import ProductoListado from "./Productos";


const promesa = new Promise ((res,rej) =>{
    setTimeout(()=>{
        res(ProductoListado[0]);
    },2000)
});

function ItemDetailContainer() {

    const [buzo, setBuzo] = useState ({});

    const getItem = () => {
            promesa.then((buzo) => {
                setBuzo(buzo);
            })
            .catch (() => {
                console.log ("No cargo el producto")
            })
    }

    return (
        <div className="DetailContainer">
            <button onClick={getItem}>Informacion Producto</button>
            {Object.keys(buzo).length !== 0 ? (
                <ItemDetail item={buzo} />
            ) : (
                ""
            )}
        </div>
        
    )

}

export default ItemDetailContainer;
