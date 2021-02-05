import React, { useContext } from 'react';
import proyectoContext from '../../context/proyectos/proyectoContext';
import tareaContext from '../../context/tareas/tareaContext';

const Tarea = ({ tarea }) => {

    // Extrar si un proyecto esta activo
    const proyectosContext = useContext(proyectoContext);
    const { proyecto } = proyectosContext;

    // obtener la función del context de tarea
    const tareasContext = useContext(tareaContext);
    const { obtenerTareas,  eliminarTarea, cambiarEstado,guardarTareaActual } = tareasContext;


    // Extraer el proyecto
    const [proyectoActual] = proyecto;



    // Agrega una tarea actual cuando el usuario desea editarla
    const seleccionarTarea = tarea => {
        guardarTareaActual(tarea);
    }
    // Eliminar un Tarea 
    const onClickEliminarTarea = () => {
        console.log(tarea.id)
        eliminarTarea(tarea.id)
        obtenerTareas(proyectoActual.id)
    }
    // pasa de tarea incompleta a completa
    const onClickincompletoTarea = (tarea) => {

        tarea.estado = tarea.estado ? false : true;

        cambiarEstado(tarea)
    }


    return (
        <li className="tarea sombra">
            <p>{tarea.nombre} </p>

            <div className="estado">
                {tarea.estado
                    ?
                    (
                        <button
                            type="button"
                            className="completo"
                            onClick={() => onClickincompletoTarea(tarea)}
                        >Completo</button>
                    )
                    :
                    (
                        <button
                            type="button"
                            className="incompleto"
                            onClick={() => onClickincompletoTarea(tarea)}
                        >Incompleto</button>
                    )
                }
            </div>

            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() =>seleccionarTarea(tarea)}

                >Editar</button>

                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={onClickEliminarTarea}

                >Eliminar</button>
            </div>
        </li>
    );
}

export default Tarea;