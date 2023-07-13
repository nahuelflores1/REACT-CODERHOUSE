import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/pages/itemList/ItemListContainer";
import ItemDetailContainer from "./components/pages/itemDetail/ItemDetailContainer";
import CartContainer from "./components/pages/cart/CartContainer";
import Navbar from "./components/layout/navbar/Navbar";

function App() {
    return (
        <BrowserRouter>
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
                </Route>
                <Route path="*" element={<h1>not found</h1>} />
            </Routes>
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
