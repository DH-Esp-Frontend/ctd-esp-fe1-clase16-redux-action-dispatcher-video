import React, {FC, useEffect} from "react";
import { connect, ConnectedProps } from "react-redux";
import { removerProductoHistorial } from "../actions/productosActions";
import VistaProducto from "../componentes/VistaProducto";
import {Producto} from "../data/productos";
import { IRootState } from "../store/store";

const mapState = (state: IRootState) => ({
    historial: state.productos.historial
});

const mapDispatch = {
    removerProductoHistorial
}

const connector = connect(mapState, mapDispatch);
type HistorialProps = ConnectedProps<typeof connector>;

const Historial:FC<HistorialProps> = ({historial, removerProductoHistorial}:HistorialProps) => {

    const onEliminarProducto = (producto: Producto) => {
        console.log(`Eliminado ${producto.id}:${producto.nombre}`);
        removerProductoHistorial(producto);
    }

    return <div>
        <p>
           Historial
        </p>
        <div style={{display:'flex', flexDirection: 'column'}}>
            {historial.map(producto => (
                <div className={"App-historial-producto"} key={"producto_" + producto.id}>
                <VistaProducto producto={producto}/>
                <button onClick={() => onEliminarProducto(producto)}>Eliminar</button>
            </div>
            ))}
        </div>
    </div>
}
export default connector(Historial);