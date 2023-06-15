import { useEffect } from "react"
import {
    Button,
} from "@mui/material";

import { useNavigate } from "react-router-dom"

const CartContainer = () => {

    const navigate = useNavigate()

    const realizarCompra = () => {
        console.log("se compraron los productos")
        // navegar
        navigate("/")
    }

    return (
        <div className="carrito">
            <h1>Carrito</h1>
            <Button onClick={realizarCompra}>Comprar</Button>
        </div>
    )
}

export default CartContainer