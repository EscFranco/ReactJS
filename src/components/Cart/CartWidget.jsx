import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

function CartWidget () {

    return (
            <Link to="/cart">
                <FaShoppingCart /> 
            </Link>
        
    )
}

export default CartWidget;