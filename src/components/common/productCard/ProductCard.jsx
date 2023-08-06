import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ item }) => {
    return (
        <Link className="all-products" to={`/itemDetail/${item.id}`}>
            <Card className="product">
                <CardMedia
                    className="product.img"
                    component="img"
                    image={item.img}
                />
                <CardContent>
                    <h3 className="product-title">{item.title}</h3>
                </CardContent>
                <span className="product-price"> $ {item.price}</span>
            </Card>
        </Link>
    );
};

export default ProductCard;
