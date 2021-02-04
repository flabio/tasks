import React, { useReducer } from 'react';
import uuid from 'uuid/dist/v1';

import proyectoContext from './proyectoContext';
import proyectoReducer from './proyectoReducer';

import { 
    FORMULARIO_PROYECTO, 
    OBTENER_PROYECTOS,
    AGREGAR_PROYECTO,
    PROYECTO_ERROR,
    VALIDAR_FORMULARIO,
    PROYECTO_ACTUAL,
    ELIMINAR_PROYECTO
} from '../../types';

import clienteAxios from '../../config/axios';


const ProyectoState = props => {
    const proyectos=[
        {id:1,nombre:'Tienda Virtual'},
        {id:2,nombre:'Intranet'},
        {id:3,nombre:'Diseño de sitio web'},
        {id:4,nombre:'MERN'},
    ]
    const initialState = {
        proyectos : [],
        formulario : false,
        errorformulario: false,
        proyecto: null, 
        mensaje: null
    }

    // Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(proyectoReducer, initialState)

    // Serie de funciones para el CRUD
    const mostrarFormulario = () => {
        dispatch({
            type: FORMULARIO_PROYECTO
        })
    }

    // Obtener los proyectos
    const obtenerProyectos = async () => {
       

            dispatch({
                type: OBTENER_PROYECTOS,
                payload: proyectos
            })
        
    }

    // Agregar nuevo proyecto
    const agregarProyecto = async proyecto => {

            proyecto.id=uuid();
         
            dispatch({
                type: AGREGAR_PROYECTO,
                payload: proyecto
            })
       
    }

    // Valida el formulario por errores
    const mostrarError = () => {
        dispatch({
            type: VALIDAR_FORMULARIO
        })
    } 

    // Selecciona el Proyecto que el usuario dio click
    const proyectoActual = proyectoId => {
        dispatch({
            type: PROYECTO_ACTUAL,
            payload: proyectoId
        })
    }

    // Elimina un proyecto
    const eliminarProyecto = async proyectoId => {
        try {
            await clienteAxios.delete(`/api/proyectos/${proyectoId}`);
            dispatch({
                type: ELIMINAR_PROYECTO,
                payload: proyectoId
            })
        } catch (error) {
            const alerta = {
                msg: 'Hubo un error',
                categoria: 'alerta-error'
            }
            
            dispatch({
                type: PROYECTO_ERROR,
                payload: alerta
            })
        }
    }


    return (
        <proyectoContext.Provider
            value={{
                proyectos: state.proyectos,
                formulario: state.formulario,
                errorformulario: state.errorformulario,
                proyecto: state.proyecto,
                mensaje: state.mensaje,
                mostrarFormulario,
                obtenerProyectos,
                agregarProyecto,
                mostrarError,
                proyectoActual,
                eliminarProyecto
            }}
        >
            {props.children}
        </proyectoContext.Provider>
        
    )
}

export default ProyectoState;