import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layout/navbar/Navbar";
import CheckoutContainer from "./components/pages/checkout/CheckoutContainer";
import CartContextComponent from "./components/context/CartContext";
import Dashboard from "./components/pages/dashboard/Dashboard";
import FormFormik from "./components/pages/formFormik/FormFormik";

function App() {
    return (
        <BrowserRouter>
            <CartContextComponent>
                <Routes>
                    <Route element={<Navbar />}>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route
                            path="/category/:categoryName"
                            element={<ItemListContainer />}
                        />
                        <Route
                            path="/itemDetail/:id"
                            element={<ItemDetailContainer />}
                        />
                        <Route path="/cart" element={<CartContainer />} />
                        <Route path="/checkout" element={<FormFormik />} />
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/formik" element={<FormFormik />} />
                    </Route>
                    <Route path="*" element={<h1>not found</h1>} />
                </Routes>
            </CartContextComponent>
        </BrowserRouter>
    );
}

{
    /* 
            <Navbar />
            <ItemListContainer />
            <CounterContainer />
            <CasaContainer />
            <ItemDetailContainer />>
             */
}

export default App;
