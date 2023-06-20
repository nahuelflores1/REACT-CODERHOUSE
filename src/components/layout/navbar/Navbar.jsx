import { Box, Grid } from "@mui/material";
import Logocar from "../../assets/img/logocar.png";
import CarWidget from "../../common/cartWidget/CartWidget";
import "./Navbar.css";
const Navbar = () => {
    return (
        <Box>
            <Grid className="container-navbar" container spacing={0}>
                <Grid className="carlogo" item xs={4}>
                    <div>
                        <a href="">
                            <img className="logocar" src={Logocar} alt="" />
                        </a>
                    </div>
                </Grid>
                <Grid className="mainavbar" item xs={4}>
                    <div>
                        <a class="navbar-brand" href="#">
                            PRODUCTOS
                        </a>
                        <a class="navbar-brand" href="#">
                            MARCAS
                        </a>
                        <a class="navbar-brand" href="#">
                            CONTACTO
                        </a>
                    </div>
                </Grid>
                <Grid className="carticon" item xs={4}>
                    <CarWidget />
                </Grid>
            </Grid>
        </Box>
    );
};

export default Navbar;
