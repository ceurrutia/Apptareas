import React , {useState} from 'react';
import "../estilos/TareaFormulario.css";
import {v4 as uuidv4 } from 'uuid';


function TareaFormulario(props){

    const [input, setInput] = useState('');

    const manejarCambio = e => {
        setInput(e.target.value);
        console.log(e.target.value);
        }

    const manejarEnvio = e => {
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
    }
    
    props.onSubmit(tareaNueva);
   

    }


    return (
        <form className='tarea-formulario' 
        onSubmit={manejarEnvio}>
            <input className='tarea-input' 
            type='text'
            placeholder='Write your task here '
            name='texto'
            onChange={ manejarCambio }
            />

            <button className='tarea-boton' autocomplete>
                Add task
            </button>

        </form>
    )
}

export default TareaFormulario;