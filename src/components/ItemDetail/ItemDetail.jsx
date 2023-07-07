import { ItemCount } from "../../components/ItemCount/ItemCount";


const ItemDetail = ({ productSelected, cantidad, onAdd }) => {
    return (
        <>
            <div>
                <h2>{productSelected.title}</h2>
                <img src={productSelected.img} alt="" />
            </div>

            <ItemCount
                stock={productSelected.stock}
                initial={cantidad}
                onAdd={onAdd}
            />
        </>
    );
};

export default ItemDetail;
