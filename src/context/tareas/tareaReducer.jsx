import {
    OBTENER_TAREAS,
    TAREAS_PROYECTO,
    AGREGAR_TAREA,

} from '../../types';

export default (state, action) => {
    switch (action.type) {
  
        case TAREAS_PROYECTO:
            return {
                ...state,
                tareaseleccionada:state.tareas.filter(x=>x.proyectoId==action.payload)

            }
        case AGREGAR_TAREA:
            return {
                ...state,
                tareasproyecto: [action.payload, ...state.tareasproyecto],
                errortarea: false
            }


        default:
            return state;
    }
}
