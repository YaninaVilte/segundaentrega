import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../asyncMock";
import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";

const objetoLoader = {
    display: "block",
    margin: "0 auto",
    border: "2px solid red",
};


const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {

        let productosFiltrados = products.filter(
            (product) => product.category === categoryName
        );

        const tarea = new Promise((resolve) => {
            setTimeout(() => {
                resolve(categoryName ? productosFiltrados : products);
            }, 500);
        });

        tarea
            .then((respuesta) => setItems(respuesta))
            .catch((rechazo) => {
                console.log(rechazo);
            });
    }, [categoryName]);

    if (items.length === 0) {
        return (
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
                <ScaleLoader cssOverride={objetoLoader} color="#36d7b7" />
            </div>
        );
    }

    return (
        <div>
            <ItemList items={items} />;
        </div>
    );
};

export default ItemListContainer;
