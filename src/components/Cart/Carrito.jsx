import { cartContext } from "../Context/CartContext.jsx";
import { useContext } from "react";
import { Link } from "react-router-dom";

const Carrito = () => {

	const { clearCart, carrito, delProduct, totalCarrito } = useContext(cartContext);

	return (
		<>
			{carrito.length > 0 ? (
				<div>
					<h1>Esta es su orden</h1>
					{carrito.map((element) => {
						return (
							<div key={element.id}>
								<img src={element.image} alt="HOLA!"></img>
								<p>Nombre: {element.title}</p>
								<p>Valor: ${element.precio}</p>
								<p>Cantidad: {element.cantidad}</p>
								<button onClick={() => delProduct(element.id)}>Eliminar Producto</button>
							</div>
						)
					})}
					<p>TOTAL: ${totalCarrito}</p>
					<button onClick={clearCart}>Vaciar Carrito</button>
					<button>Terminar compra</button>
				</div>
			) : (
				<div>
					<h1> Su carrito esta vacio</h1>
					<Link to="/">Volver a la pagina principal</Link>
				</div>
			)
			}
		</>
	)
};

export default Carrito;