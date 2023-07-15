import { useContext } from "react";
import { CartContext } from "../context/CartContext"
import swalWithBootstrapButtons from "sweetalert2";
import Cart from "./Cart";

const CartContainer = () => {
    const { cart, clearCart, removeById, getTotalPrice } = useContext(CartContext);
    let total = getTotalPrice()
    const limpiar = () => {

        swalWithBootstrapButtons.fire({
            title: '¿Estás seguro?',
            text: "¡Tus productos se van a borrar del carrito!",
            icon: 'question',
            showCancelButton: true,
            reverseButtons: true,
            confirmButtonText: 'Si, quiero borrarlos!',
            cancelButtonText: 'No, quiero continuar!',
            confirmButtonColor: '#000000',
            cancelButtonColor: '#146C94',
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart()
                swalWithBootstrapButtons.fire('Listo!',
                    'Tu carrito fue eliminado!',
                    'warning')
            } else if (result.dismiss) {
                swalWithBootstrapButtons.fire('Tus productos están a salvo',
                    'Podés continuar con la compra',
                    'success')
            }
        })
    }

    return (
        <div>
            <Cart
                total={total}
                limpiar={limpiar}
                cart={cart}
                removeById={removeById}
            />
        </div>
    );
};

export default CartContainer;
