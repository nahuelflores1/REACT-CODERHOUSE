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
            <div
                style={{
                    display: "flex",
                    margin: "1px 0px",
                    alignItems: "center",
                }}
            >
                <Button
                    size={"xs"}
                    disabled={counter >= stockProducto}
                    onPress={sumarProducto}
                >
                    +
                </Button>
                <h4
                    style={{
                        margin: "0px 10px",
                        display: "flex",
                    }}
                >
                    {counter}
                </h4>
                <Button size={"xs"} onPress={restarProducto}>
                    -
                </Button>
            </div>
            <div>
                <Button s onPress={() => agregarAlCarrito(counter)}>
                    Agregar al carrito
                </Button>
            </div>
        </div>
    );
};

export default Counter;
