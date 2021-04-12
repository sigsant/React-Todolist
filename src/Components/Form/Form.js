import React, { useEffect,useState } from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import { Container, Button, InputBase } from '@material-ui/core';

import Visor from '../Visor/Visor'

import {v4 as uuidv4} from 'uuid';

import './Form.css';

const Form = (props) => {

    const [task, setTask] = useState([
        {tarea: "Estudiar Angular", completado: false, editado: false, id: uuidv4()}, 
        {tarea: "Escuchar podcasts", completado: false, editado: false, id: uuidv4()}, 
    ]);

    const [newTask, setNewTask] = useState({
        tarea: "",
        completado: false,
        editado: false
    })

    // useEffect(() => {
    //     console.table(task)
    // }, [task])

    const handleInput = (event) => {
        const {name, value} = event.target;
        setNewTask({...newTask, [name]: value});
    }

    const agregarTarea = (e) =>{
        e.preventDefault();
        let nuevoId = {...newTask, id: uuidv4()};
        setTask(state => [...state, nuevoId]);
    }

    //Permite editar el objeto dentro de un setState mediante un spread Array.
    const editarItem = (valorId) => {
        let editItem = task.map(item => {
            if(item.id === valorId){
                return {...item, editado: !item.editado};
            }
            return item;
        });
        setTask(editItem)
    }

    const filterItem = (valorId) => {
        setTask(task.filter(item => item.id !== valorId));
    }

    return(
        <Container maxWidth="sm">
            <form noValidate autoComplete="off">
                
                    <InputBase
                        id="tarea"
                        name="tarea" 
                        label="Nombre de la tarea" 
                        placeholder="Nombre de la tarea"
                        inputProps={{ 'aria-label': 'Nombre de la tarea' }}
                        onChange={handleInput}
                        required
                    />

                    <Button type="submit" 
                            variant="contained"
                            color="primary"
                            size="medium"
                            startIcon={<AddCircleIcon />}
                            id="iconAdd"
                            onClick={agregarTarea}>
                            Añadir
                    </Button>
            </form>
            <Visor element={task} filterItem={filterItem}  editarItem={editarItem}/>
        </Container>
    )
}

export default Form;