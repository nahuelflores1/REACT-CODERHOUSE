import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartContainer.css";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash } from "@fortawesome/free-solid-svg-icons";

const CartContainer = () => {
    const { cart, clearCart, deleteById, getTotalPrice } =
        useContext(CartContext);

    let cleanCart = () => {
        Swal.fire({
            title: "¿Estás seguro de que quieres eliminar todo?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: "Sí, limpiar",
            denyButtonText: `No, no limpiar`,
        }).then((result) => {
            if (result.isConfirmed) {
                clearCart();
            } else if (result.isDenied) {
            }
        });
    };

    let total = getTotalPrice();

    // Verificar si el carrito está vacío
    if (cart.length === 0) {
        return null; // No se muestra nada si el carrito está vacío
    }

    return (
        <div className="" style={{ margin: "150px" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col">
                        <p>
                            <span className="h2">Resumen de Compra</span>
                        </p>
                        {cart.map((elemento) => {
                            return (
                                <div key={elemento} className="card mb-4">
                                    <div className="card-body p-4">
                                        <div className="row align-items-center">
                                            <div className="col-md-2">
                                                <img
                                                    src={elemento.img}
                                                    className="img-fluid"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div className="">
                                                    <p className="small text-muted mb-4 pb-2">
                                                        PRODUCTO
                                                    </p>
                                                    <p className="lead fw-normal mb-0">
                                                        {elemento.title}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                {cart.length > 0 && (
                                                    <FontAwesomeIcon
                                                        style={{
                                                            cursor: "pointer",
                                                        }}
                                                        onClick={() =>
                                                            deleteById(
                                                                elemento.id
                                                            )
                                                        }
                                                        className="delete-icon"
                                                        icon={faTrash}
                                                    />
                                                )}
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">
                                                        CANTIDAD
                                                    </p>
                                                    <p className="lead fw-normal mb-0 text-center">
                                                        {elemento.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2 text-center">
                                                        PRECIO
                                                    </p>
                                                    <p className="lead fw-normal mb-0">
                                                        {elemento.price}
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-2 d-flex justify-content-center">
                                                <div>
                                                    <p className="small text-muted mb-4 pb-2">
                                                        TOTAL
                                                    </p>
                                                    <p className="lead fw-normal mb-0 text-center">
                                                        {elemento.price *
                                                            elemento.quantity}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                        <div className="card mb-5">
                            <div className="card-body p-4">
                                {cart.length > 0 && (
                                    <button onClick={cleanCart}>
                                        Limpiar Carrito
                                    </button>
                                )}
                                <div className="float-end d-flex align-items-center">
                                    <p className="mb-0 me-5 d-flex align-items-center">
                                        <span className="small text-muted me-2">
                                            TOTAL DE COMPRA
                                        </span>{" "}
                                        <span className="lead fw-normal">
                                            {total}
                                        </span>
                                    </p>
                                    <div className="d-flex justify-content-end text-center">
                                        {cart.length > 0 && (
                                            <Link to="/checkout">
                                                <button>Terminar compra</button>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartContainer;
