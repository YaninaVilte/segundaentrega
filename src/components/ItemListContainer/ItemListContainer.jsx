import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { products } from "../../asyncMock";
import { useParams } from "react-router";

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    const { categoryName } = useParams();

    useEffect(() => {

        let productosFiltrados = products.filter(
            (product) => product.category === categoryName
        );

        const tarea = new Promise((resolve) => {
            resolve(categoryName ? productosFiltrados : products);
        });

        tarea
            .then((respuesta) => setItems(respuesta))
            .catch((rechazo) => {
                console.log(rechazo);
            });

    }, [categoryName]);

    return <ItemList items={items} />;
};

export default ItemListContainer;
