import { useState } from "react";
import Casa from "./Casa";

const CasaContainer = () => {
    const [contador, contadorModificado] = useState(0);

    const funcionQueCambiaElContrador = () => {
        contadorModificado(contador + 2);
    };

    return (
        <Casa
            funcionQueCambiaElContrador={funcionQueCambiaElContrador}
            contador={contador}
        />
    );
};

export default CasaContainer;
