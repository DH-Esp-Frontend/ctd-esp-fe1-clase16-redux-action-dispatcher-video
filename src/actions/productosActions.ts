import { Action, ActionCreator } from "@reduxjs/toolkit";
import { Producto } from "../data/productos";

export interface ProductoActions extends Action {
    type: "AGREGAR_PRODUCTO_HISTORIAL" | "REMOVER_PRODUCTO_HISTORIAL"
    producto: Producto
}

export const agregarProductoHistorial:ActionCreator<ProductoActions> = (producto: Producto) => {
    return {
        type: "AGREGAR_PRODUCTO_HISTORIAL",
        producto: producto
    }
}

export const removerProductoHistorial:ActionCreator<ProductoActions> = (producto: Producto) => {
    return {
        type: "REMOVER_PRODUCTO_HISTORIAL",
        producto: producto
    }
}