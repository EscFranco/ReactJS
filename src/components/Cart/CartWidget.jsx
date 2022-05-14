import { ShoppingCartIcon } from '@heroicons/react/solid'
import { Link } from "react-router-dom";
import { useContext} from "react"
import { cartContext } from "../Context/CartContext.jsx";

function CartWidget () {

    const { getProductQty } = useContext(cartContext);


    return (
        <div className='flex flex-col items-center'>
            <Link to="/cart">
                <ShoppingCartIcon className="h-5 w-5" />
            </Link>
            <p>{getProductQty}</p>
        </div>
    )
}

export default CartWidget;

