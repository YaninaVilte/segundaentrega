import ItemDetail from "../../components/ItemDetail/ItemDetail";
import styles from "../ItemList/ItemList.css"

const ItemList = ({ items }) => {
    // [{}, {}, {}]
    return (
        <div className="cards-container">
            {items.map((elemento) => {
                return <ItemDetail key={elemento.id} elemento={elemento} />;
            })}
        </div>
    );
};

export default ItemList;
