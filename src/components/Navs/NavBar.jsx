import '../style.css';
import CartWidget from '../Cart/CartWidget'
import { NavLink } from "react-router-dom"


function NavBar() {

    const links = [
        { name: "Remeras", route: "remeras", id: 1 },
        { name: "Buzos", route: "buzos", id: 2 },
        { name: "Zapatillas", route: "zapatillas", id: 3 },
    ]
    return (
        <header>
            <NavLink className="colorTitle" to="/"> <h1> Tienda Online </h1>  </NavLink>
            <nav>
                <ul>
                    {links.map((element) => {
                        return (
                            <li key={element.id}>
                                <NavLink className='colorLinks' to={element.route}>{element.name}</NavLink>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            <CartWidget />
        </header>
    )
}

export default NavBar;