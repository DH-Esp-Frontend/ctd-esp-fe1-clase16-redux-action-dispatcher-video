import React, {FC} from "react";
import VistaProducto from "../componentes/VistaProducto";
import {productosData} from "../data/productos";

const Historial:FC = () => {
    return <div>
        <p>
           Historial
        </p>
        <div style={{display:'flex', flexDirection: 'column'}}>
            <div className={"App-historial-producto"}>
                <VistaProducto producto={productosData[2]}/>
                <button >Eliminar</button>
            </div>
        </div>
    </div>
}
export default Historial;