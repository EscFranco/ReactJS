import { useContext, useEffect, useState } from "react";
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDoc} from "firebase/firestore"
import { db } from "../Firebase/firebase"
import { cartContext } from "../Context/CartContext.jsx";
import { Link } from "react-router-dom";

const Carrito = () => {

	const { clearCart, carrito, delProduct, totalCarrito } = useContext(cartContext);
	
	const [ ticket, setTicket ] = useState("");
	const comprador = {
		name: "Miguel",
		lastname: "Gomez",
		mail: "miguelcito@gmail.com"
	}

	const finalizarCompra = () => {
		const ventaCollec = collection(db, "ventas");
		addDoc(ventaCollec, {
			cliente: comprador,
			items: carrito,
			date: serverTimestamp(),
			total: totalCarrito
		})
		.then((result) => {
			setTicket(result.id);
		})
	}

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
					<button onClick={finalizarCompra}>Terminar compra</button>
					{ticket ? 
					<p>Gracias por su compra, este es el ID de su compra {ticket} </p> 
					:
					<></>}
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