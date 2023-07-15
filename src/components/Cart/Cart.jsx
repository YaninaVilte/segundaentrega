import { Link } from "react-router-dom";
import "./Cart.css";
const Cart = ({ cart, limpiar, removeById, total }) => {
    const quantityProducts = cart.reduce((total, item) => total + item.quantity, 0);
    return (
        <div>
            <div>
                {cart.length === 0 ? (
                    <div className="cart-info">
                        <h2>No hay productos en tu carrito</h2>
                        <Link to="/">
                            <button>Agregar productos</button>
                        </Link>
                    </div>
                ) : (
                    <div>
                        <div className="container-items">
                            {cart.map((item) => {
                        return (
                            <div key={item.id} className="cart-item">
                                <img src={item.img} alt="" />
                                <div className="cart-item-info">
                                    <div>
                                    <small>Producto</small><h2>{item.title}</h2>
                                    </div>
                                    <div>
                                        <small>Precio</small><h2>${item.price}</h2>
                                    </div>
                                    <div>
                                        <small>Cantidad</small><h2>{item.quantity}</h2>
                                    </div>
                                    <div>
                                        <small>Subtotal</small><h2>${item.price * item.quantity}</h2>
                                    </div>
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
                    <h3>Cantidad de productos: {quantityProducts}</h3>
                    <h3>Precio total: $ {total}</h3>
                    <h3>Descuento (10%): $ {total * 0.10}</h3>
                    <h3>Precio final: $ {total * 0.90}</h3>
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
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Cart;
