import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
    return (
        <Card style={{ margin: "40px" }} sx={{ maxWidth: 345 }}>
            <CardMedia
                style={{ objectFit: "contain" }}
                component="img"
                alt="green iguana"
                height="140"
                image={item.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {item.description}
                </Typography>
            </CardContent>
            <CardActions>
                <h6 size="small">{item.price}</h6>
                <Link to={`/itemDetail/${item.id}`}>
                    <Button size="small">VER DETALLES</Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default ProductCard;
