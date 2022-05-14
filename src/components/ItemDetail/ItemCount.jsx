import { useState } from "react";
import { PlusIcon, MinusIcon } from '@heroicons/react/solid'

const ItemCount = ({ stock, initial, onAdd }) => {  
    
    const [count, setCount] = useState(initial)

    const [stockCount, setStockCount] = useState(stock)

    const increaseCount = () => {        
        if (stockCount > count) {
            setCount(count + 1)
        }
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1)
        }
    }

    const AddToCart = () => {
        if (stockCount > 0) {
            setStockCount(stockCount - count > 0 ? stockCount - count : 0)
        } if (stockCount >= count) {
            onAdd(count);
        } else if (stockCount <= count && count > 0) {
            onAdd(stockCount)
        }
    };

    return (
        <div className="pt-6 lg:pt-28">
            <h4>Seleccionar items</h4>
            <div className="botonesTest">
                <button onClick={increaseCount}> <PlusIcon className="text-gray-900 h-5 w-5 flex-shrink-0"/> </button>
                <button onClick={decreaseCount}> <MinusIcon className="text-gray-900 h-5 w-5 flex-shrink-0"/> </button>
            </div>
            <p>Stock : {stockCount}</p>
            <p>Item Seleccionados: {count < stockCount ? count : stockCount} </p>
            { stockCount === 0 ? (
                <p> NO HAY STOCK</p>
            ) : (
                <button onClick={AddToCart} type="submit" className="mt-10 w-full bg-indigo-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"> Agregar al carrito </button>
            )}
        </div>

    )
}

export default ItemCount;

