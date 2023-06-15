import {
    Button,
} from "@mui/material";

import { useCount } from "../hooks/useCount";

export const ItemCount = ({ stock, initial, onAdd }) => {
    const { count, decrement, increment } = useCount(initial, stock);

    return (
        <>
            <div className="count--container">
                <Button variant="outlined"
                    size="small" onClick={decrement}>-</Button>
                <span className="numeroContador">{count}</span>
                <Button variant="outlined"
                    size="small" onClick={increment}>+</Button>

                <Button variant="contained"
                    size="small" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </div>
        </>
    );
};