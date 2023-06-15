import { ItemCount } from "../../components/ItemCount/ItemCount";
import styles from "../ItemDetail/ItemDetail.css";

const ItemDetail = ({ productSelected }) => {

    const onAdd = (cantidad) => {

        let data = {
            ...productSelected,
            quantity: cantidad,
        };

        console.log(data);
    };

    return (
        <>
            <div className="productDetail">
                <h2>{productSelected.title}</h2>
                <img className="imgDetail" src={productSelected.img} alt="" />
            </div>
            {productSelected.stock > 0 ? (
                <ItemCount stock={productSelected.stock} initial={1} onAdd={onAdd} />
            ) : (
                <h3>No hay stock</h3>
            )}
        </>
    );
};

export default ItemDetail;
