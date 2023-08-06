import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { db } from "../../../../firebaseConfig";
import { getDocs, collection, query, where } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Skeleton } from "@mui/material";
import { array } from "yup";
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        let consulta;

        let productsCollection = collection(db, "products");

        if (!categoryName) {
            consulta = productsCollection;
        } else {
            consulta = query(
                productsCollection,
                where("category", "==", categoryName)
            );
        }

        getDocs(consulta).then((res) => {
            console.log(res.docs);
            let arrayProductos = res.docs.map((product) => {
                return { ...product.data(), id: product.id };
            });
            setItems(arrayProductos);
        });
    }, [categoryName]);

    if (items.length === 0) {
        <>
            <Skeleton variant="circular" width={40} height={40} />
            <Skeleton variant="rectangular" width={210} height={60} />
            <Skeleton variant="rounded" width={210} height={60} />
        </>;
    }

    return (
        <>
            <ItemList items={items} />
        </>
    );
};
export default ItemListContainer;
