const Checkout = ({ funcionDelFormulario, funcionDeLosInput, orderId }) => {
    return (
        <div>
            <h1>checkout</h1>

            {!orderId ? (
                <form onSubmit={funcionDelFormulario}>
                    <input
                        type="text"
                        placeholder="ingrese su nombre"
                        name="name"
                        onChange={funcionDeLosInput}
                    />
                    <input
                        type="text"
                        placeholder="ingrese su telefono"
                        name="tel"
                        onChange={funcionDeLosInput}
                    />
                    <input
                        type="text"
                        placeholder="ingrese su email"
                        name="email"
                        onChange={funcionDeLosInput}
                    />
                    <button type="submit">Finalizar Compra</button>
                </form>
            ) : (
                <h3>su numero de compra es {orderId}</h3>
            )}
        </div>
    );
};

export default Checkout;
