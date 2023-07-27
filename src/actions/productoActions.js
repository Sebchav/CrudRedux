import {
    AGREGAR_PRODUCTO,
    AGREGAR_PRODUCTO_EXITO,
    AGREGAR_PRODUCTO_ERROR,
    DESCARGA_PRODUCTOS_EXITO,
    DESCARGA_PRODUCTOS_ERROR,
    COMENZAR_DESCARGA_PRODUCTOS,
    OBTENER_PRODUCTO_ELIMINAR,
    PRODUCTO_ELIMINADO_ERROR,
    PRODUCTO_ELIMINADO_EXITO
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

//Función que descarga los productos de la base de datos
export function obtenerProductosAction(){
    return async (dispatch)=>{
        dispatch( descargarProductos() );

        try{
            const {data} = await clienteAxios("/productos");  
            dispatch( descargarProductosExitosa(data) );

        }catch(error){
            dispatch ( descargarProductosError() );
        }

    }
}

const descargarProductos = ()=> ({
    type: COMENZAR_DESCARGA_PRODUCTOS,
    payload: true
});

const descargarProductosExitosa = (productos)=>({
    type: DESCARGA_PRODUCTOS_EXITO,
    payload: productos
})

const descargarProductosError = ()=>({
    type: DESCARGA_PRODUCTOS_ERROR,
    payload: true
})

//Selecciona y elimina el producto
export function borrarProductoAction(id){
    return async(dispatch) => {
        dispatch(obtenerProductoEliminar(id));

        try{  
            await clienteAxios.delete(`/productos/${id}`);
            dispatch( eliminarProductoExito() );

            //Si se elimina mostrar alerta
            Swal.fire(
                'Producto eliminado',
                'El producto se eliminó correctamente',
                'success'
              )
        }catch(error){
            console.log(error)
            dispatch( eliminarProductoError() );
        }
        
    }
}

const obtenerProductoEliminar = id => ({
    type: OBTENER_PRODUCTO_ELIMINAR,
    payload: id
});

const eliminarProductoExito = ()=>({
    type: PRODUCTO_ELIMINADO_EXITO
})

const eliminarProductoError = ()=>({
    type: PRODUCTO_ELIMINADO_ERROR,
    payload: true
})