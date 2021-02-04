import React, { useReducer } from 'react';
import TareaContext from './tareaContext';
import TareaReducer from './tareaReducer';

import { 

    TAREAS_PROYECTO,
    AGREGAR_TAREA,
  
} from '../../types';

const TareaState = props => {

    const initialState = {
      
        tareas: [ {id:1,nombre:'Elegir Plataforma',estado:true,proyectoId:1},
        {id:2,nombre:'Elegir Colores',estado:false,proyectoId:1},
        {id:3,nombre:'Elegir Plataformas de pago',estado:false,proyectoId:1},
        {id:4,nombre:'Elegir Hosting',estado:true,proyectoId:1},
        {id:5,nombre:'Elegir Colores',estado:false,proyectoId:2},
        {id:6,nombre:'Elegir Plataformas de pago',estado:false,proyectoId:2},
        {id:7,nombre:'Elegir Hosting',estado:true,proyectoId:2},
        {id:8,nombre:'Elegir Plataforma',estado:true,proyectoId:3},
        {id:9,nombre:'Elegir Colores',estado:false,proyectoId:3},
        {id:10,nombre:'Elegir Plataformas de pago',estado:false,proyectoId:3},
        {id:11,nombre:'Elegir Plataforma',estado:true,proyectoId:4},
        {id:12,nombre:'Elegir Colores',estado:false,proyectoId:4}],
    
        errortarea: false,
        tareaseleccionada: null
    }

    // Crear dispatch y state
    const [state, dispatch] = useReducer(TareaReducer, initialState);

    // Crear las funciones

    // Obtener las tareas de un proyecto
    const obtenerTareas =(proyectoId) => {
          

            dispatch({
                type: TAREAS_PROYECTO,
               payload:proyectoId
            })

        }
          // Obtener las tareas de un proyecto

    // Agregar una tarea al proyecto seleccionado
    const agregarTarea = async tarea => {
        console.log(tarea);

            dispatch({
                type: AGREGAR_TAREA,
                payload: tarea
            })
     
    }

    


    return (
        <TareaContext.Provider
            value={{
               
                tareas: state.tareas,
                errortarea: state.errortarea,
                tareaseleccionada: state.tareaseleccionada,
        
                obtenerTareas,
                agregarTarea,
        
            }}
        >
            {props.children}
        </TareaContext.Provider>
    )
}

export default TareaState;