import Checkout from "./Checkout";
import { useFormik } from "formik";
import * as Yup from "yup";
import { database } from "../../services/firebase/firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

const CheckoutContainer = () => {
    const { cart, getTotalPrice, clearCart } = useContext(CartContext);

    const [orderId, setOrderId] = useState(null);

    let total = getTotalPrice();

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {
            name: "",
            phone: "",
            email: "",
            repeatEmail: "",
        },

        onSubmit: (data) => {
            let order = {
                buyer: data,
                items: cart,
                total: total,
            };

            let ordersCollection = collection(database, "orders");
            addDoc(ordersCollection, order).then((res) => setOrderId(res.id));

            cart.forEach((product) => {
                updateDoc(doc(database, "products", product.id), {
                    stock: product.stock - product.quantity,
                });
            });

            clearCart();
        },

        validateOnChange: false,
        validationSchema: Yup.object({
            name: Yup.string()
                .required("El campo obligatorio")
                .min(2, "El campo debe tener al menos dos letras")
                .matches(/^[A-Za-záéíóúÁÉÍÓÚñÑüÜ\s']+$/, 'No debe contener números o símbolos'),
            email: Yup.string()
                .email("Este campo no corresponde a un email valido")
                .required("El campo obligatorio"),
            phone: Yup.string()
                .required("El campo obligatorio")
                .matches(/^[0-9]+$/, 'No debe contener letras o símbolos')
                .min(10, "Debe tener 10 dígitos"),
            repeatEmail: Yup.string()
                .required("El campo obligatorio")
                .oneOf([Yup.ref("email")], "Los emails deben coincidir"),
        }),
    });

    return (
        <div>
            {orderId ? (
                <>
                    <h1>Muchas gracias!</h1>
                    <h2>Su compra fue generada con éxito.</h2>
                    <h3>El código de comprobante es: {orderId}</h3>
                </>
            ) : (
                <Checkout
                    handleSubmit={handleSubmit}
                    handleChange={handleChange}
                    errors={errors}
                />
            )}
        </div>
    );
};

export default CheckoutContainer;