import {FC} from "react";
import { NewLineKind } from "typescript";
import {Producto} from "../data/productos";

type ProductoProps = {
    producto: Producto;
    onClickProducto: (producto: Producto) => void;
}

const TarjetaProducto:FC<ProductoProps> = ({producto,onClickProducto}: ProductoProps) => {
    return (
    <div className={"App-product-card"} 
        onClick={() => onClickProducto(producto)}>
        <img src={producto.imagen} width={120} height={120} alt={producto.nombre}/>
        <h5>{producto.nombre}</h5>
    </div>)
}
export default TarjetaProducto;