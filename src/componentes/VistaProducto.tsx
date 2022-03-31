import {FC} from "react";
import {Producto} from "../data/productos";

type ProductoProps = {
    producto: Producto;
}

const VistaProducto:FC<ProductoProps> = ({producto}: ProductoProps) => {
    return <div className={"App-product"}>
        <img src={producto.imagen} width={200} height={200} alt={producto.nombre}/>
        <h5>{producto.nombre}</h5>
    </div>
}
export default VistaProducto;