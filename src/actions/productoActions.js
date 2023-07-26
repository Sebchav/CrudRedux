import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR
} from "../types";

import clienteAxios from "../config/axios";
import Swal from "sweetalert2";

export function crearNuevoProductoAction(producto){
    return async(dispatch)=> {
        dispatch( agregarProducto() );

        try{
            //insertar en la API
            await clienteAxios.post("/productos", producto);

            //Si todo sale bien actualizar al state
            dispatch( agregarProductoExito(producto));

            //Alerta
            Swal.fire(
                "Correcto",
                "El producto se agregó correctamente",
                "success"
            )
        }catch(error){
            //Si hay un error cambiar el state
            dispatch( agregarProductoError(true));

            Swal.fire({
                icon: "error",
                title: "Hubo un error",
                text: "Hubo un error, intenta de nuevo"
            })
        }
    }
}

const agregarProducto = () => ({
    type: AGREGAR_PRODUCTO,
    payload: true
})

//Si el producto se guarda en la base de datos
const agregarProductoExito = producto => ({
    type: AGREGAR_PRODUCTO_EXITO,
    payload: producto
})

//Si hubo un error
const agregarProductoError = (estado)=>({
    type: AGREGAR_PRODUCTO_ERROR,
    payload: estado
});