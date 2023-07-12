import {
    CardActions,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({ elemento }) => {
    return (
            <div className="cardBebidas">
                <img src={elemento.img}/>
                <div>
                    <h5 className="category">{elemento.category}</h5>
                    <h4 className="title">{elemento.title}</h4>
                    <h5 className="price">$ {elemento.price}</h5>
                </div>
                <CardActions style={{ display: "flex", justifyContent: "center" }}>
                    <Link to={`/itemDetail/${elemento.id}`}>
                        <button>
                            Ver detalle
                        </button>
                    </Link>
                </CardActions>
            </div>
    );    
};

export default Item;
