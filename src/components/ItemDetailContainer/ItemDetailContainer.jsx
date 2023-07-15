import { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PuffLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import { database } from "../../services/firebase/firebaseConfig.js";
import { collection, getDoc, doc } from "firebase/firestore";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ItemDetailContainer = () => {
    const [productSelected, setProductSelect] = useState({});

    const { addToCart, getTotalQuantityById } = useContext(CartContext);

    const { id } = useParams();

    const cantidad = getTotalQuantityById(id);

    const onAdd = (cantidad) => {
        let data = {
            ...productSelected,
            quantity: cantidad,
        };

        addToCart(data);
        toast.success('Producto agregado al carrito', {
            position: "bottom-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            style: {
                background: 'black',
                color: '#fff',
                progressColor: "red",
            },
        });
    };

    useEffect(() => {
        let itemCollection = collection(database, "products");
        let refDoc = doc(itemCollection, id);
        getDoc(refDoc).then((res) => {
            setProductSelect({ ...res.data(), id: res.id });
        });
    }, [id]);

    return (
        <div>
            <ToastContainer />
            {productSelected.id ? (
                <ItemDetail
                    cantidad={cantidad}
                    productSelected={productSelected}
                    addToCart={addToCart}
                    onAdd={onAdd}
                />
            ) : (
                <div
                    style={{
                        width: "100%",
                        height: "90vh",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <PuffLoader color="#146C94" cssOverride={{}} size={100} />
                </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;