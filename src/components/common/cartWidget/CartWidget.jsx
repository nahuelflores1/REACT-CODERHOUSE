import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
    const { getTotalQuantity } = useContext(CartContext);

    let totalPrice = getTotalQuantity();

    return (
        <Link to="/cart">
            <Badge badgeContent={totalPrice} color="warning">
                <ShoppingCartIcon style={{ fontSize: "40px" }} />
            </Badge>
        </Link>
    );
};

export default CartWidget;
