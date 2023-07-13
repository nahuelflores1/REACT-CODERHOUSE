import { useState } from "react";
import Counter from "./Counter";

const CounterContainer = ({ agregarAlCarrito, stockProducto }) => {
    const [counter, setCounter] = useState(1);

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
