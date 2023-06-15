import { Badge } from "@mui/material";
import { BsFillCartCheckFill } from "react-icons/bs";
import styles from "./Navbar.module.css";

import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <>
            <div className={styles.containerNavbar}>
                <Link to="/">.16 Bebidas</Link>
                <ul className={styles.categories}>
                    <Link to="/">Todos los productos</Link>
                    <Link to="/category/vinos">Vinos</Link>
                    <Link to="/category/whisky">Whisky</Link>
                    <Link to="/category/cerveza">Cerveza</Link>
                    <Link to="/category/vodka">Vodka</Link>
                    <Link to="/category/gin">Gin</Link>
                </ul>

                <Link to="/carrito">
                    <Badge badgeContent={4} color="primary">
                        <BsFillCartCheckFill size="30px" />
                    </Badge>
                </Link>
            </div>
        </>
    );
};

export default Navbar;
