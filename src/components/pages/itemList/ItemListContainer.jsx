import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { products } from "../../../productsMock";

import { useParams } from "react-router-dom";
const ItemListContainer = () => {
    const [items, setItems] = useState([]);
    const { categoryName } = useParams();

    useEffect(() => {
        let productosFiltrados = products.filter(
            (elemento) => elemento.category === categoryName
        );
        const tarea = new Promise((resolve, reject) => {
            resolve(categoryName ? productosFiltrados : products);
        });

        tarea
            .then((respuesta) => setItems(respuesta))
            .catch((error) => console.log(error));
    }, [categoryName]);

    return <ItemList items={items} />;
};

export default ItemListContainer;
