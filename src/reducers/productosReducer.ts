import {Producto} from "../data/productos";
import {Action} from "@reduxjs/toolkit";

export type ProductosState = {
    historial: Producto[];
}

const productosReducer = (state={} as ProductosState, action: Action) => {
    switch(action.type){
        default:
            return state
    }
}
export default productosReducer;