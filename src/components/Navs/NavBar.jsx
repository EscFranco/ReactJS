import CartWidget from '../Cart/CartWidget'
import { NavLink } from "react-router-dom"


function NavBar() {

    const links = [
        { name: "Remeras", route: "categoria/remeras", id: 1 },
        { name: "Buzos", route: "categoria/buzos", id: 2 },
        { name: "Zapatillas", route: "categoria/zapatillas", id: 3 },
    ]
    return (
        <header className='h-24 flex items-center justify-around bg-cyan-500'>
            <NavLink className="colorTitle" to="/"> <h1 className='text-black text-xl'> Tienda Online </h1>  </NavLink>
            <nav>
                <ul className='headerUL flex md:flex-none'>
                    {links.map((element) => {
                        return (
                            <li className='headerLI' key={element.id}>
                                <NavLink className='text-green-800 sm:p-4 p-2' to={element.route}>{element.name}</NavLink>
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
