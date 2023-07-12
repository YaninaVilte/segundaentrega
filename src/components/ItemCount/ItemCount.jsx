import { useCount } from "../hooks/useCount";
import "./ItemCount.css";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
    const { count, decrement, increment } = useCount(initial, stock);

    return (
        <>
            <div className="countContainer">
                <button disabled={stock < 1 ? true : false} onClick={decrement}>-</button>
                <h2 className="stockCount">{count}</h2>
                <button disabled={stock < 1 ? true : false} onClick={increment}>+</button>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </>
    );
};