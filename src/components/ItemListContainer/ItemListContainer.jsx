import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router";
import { ScaleLoader } from "react-spinners";
import { database } from "../../services/firebase/firebaseConfig.js";
import {collection, getDocs, query, where } from "firebase/firestore";
import AgregarDocs from "../../AgregarDocs";


const objetoLoader = {
    display: "block",
    margin: "0 auto",
    border: "2px solid red",
};


const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {

        let itemCollection = collection(database, "products");
        let consulta;

        if (categoryName) {
            // los filtrados
            consulta = query(itemCollection, where("category", "==", categoryName))
        } else {
            // todos
            consulta = itemCollection
        }

        getDocs(consulta)
            .then((res) => {
                let products = res.docs.map((elemento) => {
                    return {
                        ...elemento.data(),
                        id: elemento.id,
                    };
                });
                setItems(products);
            })
            .catch((err) => console.log(err));

    }, [categoryName]);

    if (items.length === 0) {
        return (
            <div
                style={{
                    width: "100%",
                    height: "90vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <ScaleLoader color="steelblue" width={40} height={111} />
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
