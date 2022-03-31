import {FC} from "react";
import {Producto} from "../data/productos";

type VistaProductoProps = {
    producto: Producto;
}

const VistaProducto:FC<VistaProductoProps> = ({producto}: VistaProductoProps) => {
    return <div className={"App-product"}>
        <img src={producto.imagen} width={60} height={60} alt={producto.nombre}/>
        <label>{producto.nombre}</label>
    </div>
}
export default VistaProducto;