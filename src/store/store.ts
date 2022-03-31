import {combineReducers} from "@reduxjs/toolkit";
import { createStore, compose } from 'redux';
import productosReducer from "../reducers/productosReducer";

const rootReducer = combineReducers({
    productos: productosReducer,
});

export type IRootState = ReturnType<typeof rootReducer>;


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer, composeEnhancers()
)