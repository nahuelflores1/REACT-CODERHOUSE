import { Box, Grid } from "@mui/material";
import Logocar from "../../assets/img/logocar.png";
import CarWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
const Navbar = () => {
    return (
        <Box>
            <Grid className="container-navbar" container spacing={0}>
                <Grid className="carlogo" item xs={4}>
                    <div>
                        <Link to="/">
                            <img className="logocar" src={Logocar} alt="" />
                        </Link>
                    </div>
                </Grid>
                <Grid className="categories mainavbar" item xs={4}>
                    <div>
                        <Link to="/category/interior" class="navbar-brand">
                            INTERIOR
                        </Link>
                        <Link to="/category/wheels" class="navbar-brand">
                            LLANTAS
                        </Link>
                        <Link
                            to="/category/forcedInduction"
                            class="navbar-brand"
                        >
                            TURBO
                        </Link>
                        <Link to="/category/exhaust" class="navbar-brand">
                            ESCAPES
                        </Link>
                    </div>
                </Grid>
                <Grid className="carticon" item xs={4}>
                    <CarWidget />
                </Grid>
            </Grid>
            <Outlet />
        </Box>
    );
};

export default Navbar;
