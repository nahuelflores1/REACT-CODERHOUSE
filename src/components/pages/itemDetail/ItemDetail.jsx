import CounterContainer from "../../common/Counter/CounterContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const ItemDetail = ({ product, agregarAlCarrito, cantidadEnCarrito }) => {
    return (
        <div>
            <section className="py-5">
                <div className="container">
                    <div className="row gx-5">
                        <aside className="col-lg-6">
                            <div className="border mb-3 d-flex justify-content-center">
                                <img
                                    style={{ width: "100%" }}
                                    src={product.img}
                                    alt="imgProduct"
                                />
                            </div>
                        </aside>
                        <div className="col-lg-6">
                            <div className="ps-lg-3">
                                <h4 className="title text-dark">
                                    {product.title}
                                </h4>
                                <div class="mb-3">
                                    <span class="h5">
                                        Precio: ${product.price}
                                    </span>
                                </div>
                                <p>{product.description}</p>
                                <div className="row mb-4">
                                    <div className="col-md-4 col-6 md-3">
                                        <div
                                            className="input-group md-3"
                                            style={{ width: "170px" }}
                                        >
                                            <label className="mb-2 d-block">
                                                Cantidad
                                            </label>
                                            <CounterContainer
                                                cantidadEnCarrito={
                                                    cantidadEnCarrito
                                                }
                                                stockProducto={product.stock}
                                                agregarAlCarrito={
                                                    agregarAlCarrito
                                                }
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ItemDetail;
