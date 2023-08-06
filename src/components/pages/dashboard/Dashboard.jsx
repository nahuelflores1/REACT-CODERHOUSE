import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../../firebaseConfig";
import { products } from "../../../productsMock";

const Dashboard = () => {
    const rellenar = () => {
        let refCollection = collection(db, "products");
        products.forEach((prod) => {
            addDoc(refCollection, prod);
        });
    };
    return (
        <div>
            <h1>Dashboard</h1>
            <Button onClick={rellenar}>Rellear base de datos</Button>
        </div>
    );
};

export default Dashboard;
