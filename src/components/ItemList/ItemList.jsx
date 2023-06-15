import Item from "../../components/Item/Item";
import styles from "../ItemList/ItemList.css"

const ItemList = ({ items }) => {
    // [{}, {}, {}]
    return (
        <div className="cards-container">
            {items.map((elemento) => {
                return <Item key={elemento.id} elemento={elemento} />;
            })}
        </div>
    );
};

export default ItemList;
