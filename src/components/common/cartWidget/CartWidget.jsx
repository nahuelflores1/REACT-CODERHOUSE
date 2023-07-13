import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <Link to="/cart">
            <Badge badgeContent={4} color="warning">
                <ShoppingCartIcon style={{ fontSize: "40px" }} />
            </Badge>
        </Link>
    );
};

export default CartWidget;
