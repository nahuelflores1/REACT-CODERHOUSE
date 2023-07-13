import CounterContainer from "../../common/Counter/CounterContainer";

const ItemDetail = ({ product, agregarAlCarrito }) => {
    return (
        <div>
            <h1>{product.title}</h1>
            <h4>{product.price}</h4>
            <CounterContainer
                stockProducto={product.stock}
                agregarAlCarrito={agregarAlCarrito}
            />
        </div>
    );
};

export default ItemDetail;
