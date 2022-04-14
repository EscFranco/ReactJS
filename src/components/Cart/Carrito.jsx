import { cartContext } from "../Context/CartContext.jsx";
import { useContext } from "react";

const Carrito = () => {

	const { clearCart } = useContext(cartContext);
	const { carrito } = useContext(cartContext);
	const { delProduct } = useContext(cartContext)

    return (
		<>
			<h1>Esta es su orden</h1>
			{carrito.map ((element) => {
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
			<div>
				<button onClick={clearCart}>Vaciar Carrito</button>
			</div>
		</>
    )
};

export default Carrito;