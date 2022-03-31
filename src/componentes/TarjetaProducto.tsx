import {FC} from "react";
import {Producto} from "../data/productos";

type ProductoProps = {
    producto: Producto;
}

const TarjetaProducto:FC<ProductoProps> = ({producto}: ProductoProps) => {
    return <div className={"App-product-card"}>
        <img src={producto.imagen} width={200} height={200} alt={producto.nombre}/>
        <h5>{producto.nombre}</h5>
    </div>
}
export default TarjetaProducto;