import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext} from "react"
import { cartContext } from "../Context/CartContext.jsx";

function CartWidget () {

    const { getProductQty } = useContext(cartContext);


    return (
        <div>
            <Link to="/cart">
                <FaShoppingCart />
            </Link>
            <p>{getProductQty}</p>
        </div>
    )
}

export default CartWidget;