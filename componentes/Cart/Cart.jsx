import { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import './Cart.css'
const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
                <h2> No hay productos en el carrito.</h2>
                <Link to="/"> Ver Productos </Link>
            </>
        )
    }

    return (
        <div className="contenedor">
            {carrito.map(producto => <CartItem key={producto.id}  {...producto} />)}
            <h4>Total: $ {total} </h4>
            <h4>Cantidad total: {cantidadTotal} </h4>
            <button className="botones" onClick={() => vaciarCarrito()}> Vaciar Carrito </button>
            <Link to="/checkout"> Finalizar Compra </Link>
        </div>
    )
}

export default Cart