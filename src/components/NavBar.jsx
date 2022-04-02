import './style.css';
import CartWidget from './CartWidget'

function NavBar () {
    return (
        <header>
            <h1> Tienda Online </h1>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Informacion</a></li>
                <li><a href="#">Hombres</a></li>
                <li><a href="#">Mujeres</a></li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar;