import { Button } from "@nextui-org/react";

const Counter = ({
    sumarProducto,
    restarProducto,
    counter,
    agregarAlCarrito,
    stockProducto,
}) => {
    return (
        <div>
            <h4>{counter}</h4>
            <Button onPress={() => agregarAlCarrito(counter)}>
                Agregar al carrito
            </Button>
            <Button disabled={counter >= stockProducto} onPress={sumarProducto}>
                +
            </Button>
            <Button onPress={restarProducto}>-</Button>
        </div>
    );
};

export default Counter;
