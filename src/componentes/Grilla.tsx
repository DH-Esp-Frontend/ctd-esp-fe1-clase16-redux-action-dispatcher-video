import React, {FC} from "react";
import {productosData} from "../data/productos";
import TarjetaProducto from "../componentes/TarjetaProducto";

const Grilla:FC = () => {
    return <div>
        <p>Productos</p>
        <div className={"App-grid"}>
            {productosData.map((producto) => {
                return <TarjetaProducto producto={producto} key={"product_" + producto.id}/>
            })}
        </div>
    </div>
}
export default Grilla;