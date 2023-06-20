import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function SimpleBadge() {
    return (
        <Badge badgeContent={4} color="warning">
            <ShoppingCartIcon style={{ fontSize: "40px" }} />
        </Badge>
    );
}
