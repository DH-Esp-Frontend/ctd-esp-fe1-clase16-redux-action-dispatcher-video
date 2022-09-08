import {Producto} from "../data/productos";
import {Action} from "@reduxjs/toolkit";
import { ProductoActions } from "../actions/productosActions";

export type ProductosState = {
    historial: Producto[];
    // lista de productos
}

const estadoInicial: ProductosState = {
    historial: []
}

const productosReducer = (state: ProductosState = estadoInicial, action: ProductoActions) => {
    switch(action.type){
        case "AGREGAR_PRODUCTO_HISTORIAL":
            return {
                ...state,
                historial: [action.producto, ...state.historial.filter(producto => producto.id !== action.producto.id)]
            }
        case "REMOVER_PRODUCTO_HISTORIAL":
            return {
                ...state,
                historial: [...state.historial.filter(producto => producto.id !== action.producto.id)]
            }
        default:
            return state
    }
}
export default productosReducer;