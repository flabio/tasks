import {
    TAREAS_PROYECTO,
    AGREGAR_TAREA,
    VALIDAR_TAREA,
    ELIMINAR_TAREA,
    ESTADO_TAREA,
    TAREA_ACTUAL,
    ACTUALIZAR_TAREA

} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case TAREAS_PROYECTO:
            return {
                ...state,
                tareaseleccionada: state.tareas.filter(x => x.proyectoId === action.payload)

            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareas: [action.payload, ...state.tareas],
                errortarea: false,

            }
        case VALIDAR_TAREA:
            return{
                ...state,
                errortarea: true
            }
        
        case ELIMINAR_TAREA:
            return{
                ...state,
                tareas:state.tareas.filter(x =>x.id !== action.payload)
            }
        case ACTUALIZAR_TAREA:
        case ESTADO_TAREA:
            return{
                ...state,
                tareas: state.tareas.map(x => x.id === action.payload.id
                    ?
                    action.payload :x),
                    tareaeditar:null
                    
            }
        case TAREA_ACTUAL:
            return{
                ...state,
                tareaeditar:action.payload
            }
        default:
            return state;
    }
}
