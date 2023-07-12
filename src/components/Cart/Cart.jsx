import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, limpiar, removeById, total }) => {
    return (
        <div>
            <div className="cart-container">
                <div className="container-items">
                    {cart.map((item) => {
                        return (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt="" />
                                <div className="cart-item-info">
                                    <h2>{item.title}</h2>
                                    <h2>${item.price}.-</h2>
                                    <h2>Unidades: {item.quantity}</h2>
                                </div>
                                <button onClick={() => removeById(item.id)}>
                                    Quitar
                                </button >
                            </div>
                        );
                    })}
                </div>
                <div className="cart-info">
                    <h2>Descripcion del carrito:</h2>
                    <h3>Cantidad de productos: </h3>
                    <h3>Precio total: {total}</h3>
                    <h3>Descuento: </h3>
                    <h3>Precio final: </h3>
                    {cart.length > 0 ? (
                        <div className="btn-cart">
                            <button className="vaciarCarrito" onClick={limpiar}>
                                Vaciar carrito
                            </button>
                            <Link to="/checkout">
                                <button className="continuarCompra">Finalizar compra</button>
                            </Link>
                        </div>
                    ) : (
                        <Link to="/">
                                <button>Agrega productos</button>
                        </Link>
                    )}

                    <h1>El total del carrito es ${total}</h1>
                </div>
            </div>
        </div>
    );
};

export default Cart;
