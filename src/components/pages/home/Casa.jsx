const Casa = ({ contador, funcionQueCambiaElContrador }) => {
    return (
        <div>
            <h2>numero {contador}</h2>
            <button onClick={funcionQueCambiaElContrador}>Sumar</button>
        </div>
    );
};

export default Casa;
