import { useContext, useState } from "react";
import Checkout from "./Checkout";
import { CartContext } from "../../context/CartContext";
import { db } from "../../../../firebaseConfig";
import {
    addDoc,
    collection,
    serverTimestamp,
    updateDoc,
    doc,
} from "firebase/firestore";

const CheckoutContainer = () => {
    const { cart, getTotalPrice } = useContext(CartContext);

    const [orderId, setOrderId] = useState("");

    const [userData, setUserData] = useState({
        name: "",
        tel: "",
        email: "",
    });

    let total = getTotalPrice();

    const funcionDelFormulario = (evento) => {
        evento.preventDefault();

        let order = {
            buyer: userData,
            items: cart,
            total,
            data: serverTimestamp(),
        };

        let ordersCollections = collection(db, "orders");
        addDoc(ordersCollections, order).then((res) => setOrderId(res.id));

        cart.forEach((elemento) => {
            updateDoc(doc(db, "products", elemento.id), {
                stock: elemento.stock - elemento.quantity,
            });
        });
    };

    const funcionDeLosInput = (evento) => {
        setUserData({ ...userData, [evento.target.name]: evento.target.value });
    };

    return (
        <Checkout
            orderId={orderId}
            funcionDelFormulario={funcionDelFormulario}
            funcionDeLosInput={funcionDeLosInput}
        />
    );
};

export default CheckoutContainer;
