import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({
    agregarAlCarrito,
    stockProducto,
    cantidadEnCarrito = 1,
}) => {
    const [counter, setCounter] = useState(cantidadEnCarrito);

    const sumarProducto = () => {
        if (counter < stockProducto) {
            setCounter(counter + 1);
        }
    };

    const restarProducto = () => {
        if (counter > 1) {
            setCounter(counter - 1);
        }
    };

    return (
        <Counter
            stockProducto={stockProducto}
            counter={counter}
            sumarProducto={sumarProducto}
            restarProducto={restarProducto}
            agregarAlCarrito={agregarAlCarrito}
        />
    );
};

export default CounterContainer;
