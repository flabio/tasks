import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';
import uuid from 'uuid/dist/v1';

import {

    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA

} from '../../types';

const TareaState = props => {

    const initialState = {

        tareas: [{ id: 1, nombre: 'Elegir Plataforma', estado: true, proyectoId: 1 },
        { id: 2, nombre: 'Elegir Colores', estado: false, proyectoId: 1 },
        { id: 3, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 1 },
        { id: 4, nombre: 'Elegir Hosting', estado: true, proyectoId: 1 },
        { id: 5, nombre: 'Elegir Colores', estado: false, proyectoId: 2 },
        { id: 6, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 2 },
        { id: 7, nombre: 'Elegir Hosting', estado: true, proyectoId: 2 },
        { id: 8, nombre: 'Elegir Plataforma', estado: true, proyectoId: 3 },
        { id: 9, nombre: 'Elegir Colores', estado: false, proyectoId: 3 },
        { id: 10, nombre: 'Elegir Plataformas de pago', estado: false, proyectoId: 3 },
        { id: 11, nombre: 'Elegir Plataforma', estado: true, proyectoId: 4 },
        { id: 12, nombre: 'Elegir Colores', estado: false, proyectoId: 4 }],

        errortarea: false,
        tareaseleccionada: null,
        tareaeditar:null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas = (proyectoId) => {
        dispatch({
            type: TAREAS_PROYECTO,
            payload: proyectoId
        })

    }
    // Obtener las tareas de un proyecto

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = async tarea => {

        tarea.id = uuid();
        dispatch({
            type: AGREGAR_TAREA,
            payload: tarea
        })
    }
    //valida y muestrar el error
    const validarTarea = () => {
        dispatch({
            type: VALIDAR_TAREA
        })
    };


    //Eliminar tarea
    const eliminarTarea = (tareaId) => {
        dispatch({
            type: ELIMINAR_TAREA,
            payload: tareaId
        })
    }
    // Cambia el estado de cada tarea
    const cambiarEstado = tarea => {

        dispatch({
            type: ESTADO_TAREA,
            payload: tarea
        })
    }
    //Seleciona una tarea para editar
    const guardarTareaActual = tarea => {
        dispatch({
            type: TAREA_ACTUAL,
            payload: tarea
        });
    }
    const actualizarTarea = tarea => {
        dispatch({
            type: ACTUALIZAR_TAREA,
            payload: tarea
        });
    }
    return (
        <TareaContext.Provider
            value={{

                tareas: state.tareas,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
                tareaeditar:state.tareaeditar,

                obtenerTareas,
                agregarTarea,
                validarTarea,
                eliminarTarea,
                cambiarEstado,
                guardarTareaActual,
                actualizarTarea

            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;