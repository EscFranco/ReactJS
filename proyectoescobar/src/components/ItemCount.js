import { useState } from "react";
import { BsFillCartPlusFill , BsFillCartDashFill } from "react-icons/bs";


const ItemCount = ({stock, initial, onAdd}) => {

    const [count, setCount] = useState(initial)
    const [stockCount, setStockCount] = useState(stock)

    const increaseCount = () => {
        if ( stockCount > count) {
            setCount (count + 1)
        }
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount (count - 1)
        }
    }

    const AddToCart = () => {
        if (stockCount > 0) {
            setStockCount(stockCount - count > 0 ? stockCount - count : 0) 
        } if (stockCount >= count) {
			onAdd(count);
		} else if ( stockCount <= count && count > 0) {
            onAdd(stockCount)
        }
    };

    return (
        <div className="centrar">
            <h4>Producto</h4>
            <div className="botonesTest">
                <button className="botonSize" onClick={increaseCount}> <BsFillCartPlusFill/> </button>
                <button className="botonSize" onClick={decreaseCount}> <BsFillCartDashFill/> </button> 
            </div>
            <p>Stock : {stockCount}</p>
            <p>Item Seleccionados: {count < stockCount ? count : stockCount} </p>
            <button onClick={AddToCart}> Agregar al Carrito </button>       
        </div>
        
    )
}

export default ItemCount;