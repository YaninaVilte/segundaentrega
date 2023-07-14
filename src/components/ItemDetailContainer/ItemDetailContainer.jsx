import { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { PuffLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Swal from 'sweetalert2'
import { database } from "../../services/firebase/firebaseConfig.js";
import {collection, getDoc, doc} from "firebase/firestore"


const ItemDetailContainer = () => {
    const [productSelected, setProductSelect] = useState({});

    const { addToCart, getTotalQuantityById } = useContext(CartContext)

    const { id } = useParams()

    const cantidad = getTotalQuantityById(id)

    const onAdd = (cantidad) => {
        let data = {
            ...productSelected,
            quantity: cantidad,
        };

        addToCart(data);
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Producto agregado exitosamente',
            showConfirmButton: true,
            iconColor: "#146C94",
            confirmButtonColor: '#146C94',
            timer: 1500
        })
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
                        <PuffLoader
                            color="#146C94"
                            cssOverride={{}}
                            size={100}
                        />
                    </div>
            )}
        </div>
    );
};

export default ItemDetailContainer;