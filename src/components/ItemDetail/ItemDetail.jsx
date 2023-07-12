import { ItemCount } from "../../components/ItemCount/ItemCount";
import "./ItemDetail.css";


const ItemDetail = ({ productSelected, cantidad, onAdd }) => {
    return (
        <>
            <div className="productSelectedContainer">
                <div className="imgProductSelectedContainer">
                    <img className="imgProductSelected" src={productSelected.img} alt="" />
                </div>
                <div className="detailProductSelected">
                    <h1>{productSelected.title}</h1>
                    <h3>Presentación: {productSelected.presentation}</h3>
                    <h2>$ {productSelected.price}</h2>
                    <ItemCount
                        stock={productSelected.stock}
                        initial={cantidad}
                        onAdd={onAdd}
                        />
                </div>
            </div>
            <div className="datasheetProductSelected">
                <h2 className="titleDatasheet">FICHA TÉCNICA</h2>
                <h3 className="description">{productSelected.description.replace(/<br>/g, "\n")}</h3>
                <h3>Presentación: {productSelected.presentation}</h3>
                <h3>Graduación de alcohol: {productSelected.alcohol}</h3>
                <h3>Variedad: {productSelected.variety}</h3>
                <h3>Género: {productSelected.genre}</h3>
                <h3>Productor: {productSelected.producer}</h3>
                <h3>Lugar de producción: {productSelected.manufacturingPlace}</h3>
                <h3>País: {productSelected.country}</h3>
            </div>
        </>
    );
};

export default ItemDetail;
