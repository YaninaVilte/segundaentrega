import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ItemDetail = ({ elemento }) => {
    return (
        <Card sx={{ width: 400, height: 500, backgroundColor: "white" }}>
            <CardMedia
                sx={{ height: 300 }}
                image={elemento.img}
            />
            <CardContent sx={{ height: 150 }}>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    textAlign={"center"}
                >
                    {elemento.title}
                </Typography>
                <Typography variant="h6" color="text.secondary" textAlign={"center"}>
                    {elemento.description}
                </Typography>
                <Typography variant="subtitle1" textAlign={"center"}>
                    ${elemento.price}.-
                </Typography>
            </CardContent>
            <CardActions style={{ display: "flex", justifyContent: "center" }}>
                <Link to={`/itemDetail/${elemento.id}`}>
                    <Button
                        variant="contained"
                        size="small"
                        sx={{ textTransform: "none" }}
                    >
                        Ver detalle
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default ItemDetail;
