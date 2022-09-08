import React, {FC} from "react";
import {Producto, productosData} from "../data/productos";
import TarjetaProducto from "../componentes/TarjetaProducto";
import { IRootState } from "../store/store";
import { agregarProductoHistorial } from "../actions/productosActions";
import { connect, ConnectedProps } from "react-redux";

const mapState = (state: IRootState) => ({});

const mapDispatch = {
    agregarProductoHistorial
}

const connector = connect(mapState, mapDispatch);
type GrillaProps = ConnectedProps<typeof connector>;

const Grilla:FC<GrillaProps> = ({agregarProductoHistorial}: GrillaProps) => {

    const onClickProducto = (producto: Producto) => {
        console.log(`Seleccionado ${producto.id}:${producto.nombre}`);
        agregarProductoHistorial(producto);
    }

    return <div>
        <p>Productos</p>
        <div className={"App-grid"}>
            {productosData.map((producto) => {
                return <TarjetaProducto producto={producto}
                onClickProducto={onClickProducto}
                key={"product_" + producto.id}/>
            })}
        </div>
    </div>
}
export default connector(Grilla);