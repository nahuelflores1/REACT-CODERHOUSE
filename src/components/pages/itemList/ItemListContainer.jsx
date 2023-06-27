import { useEffect, useState } from "react";
import ItemList from "./ItemList";

const ItemList = () => {
    const [products, setProducts] = useState([]);

    const [edad, setEdad] = useState(20);

    useEffect(() => {
        console.log("llamado a la API");
    });

    console.log(products);
    return;
    <ItemList
        edad={edad}
        setEdad={setEdad}
        products={products}
        setProducts={setProducts}
    />;
};

export default ItemList;
