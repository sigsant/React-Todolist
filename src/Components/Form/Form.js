import React, {useState, useEffect} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {TextField, Container, Button} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';

import './Form.css';

const Form = () => {

    const [task, setTask] = useState([
        {tarea: "Estudiar Angular", completado: false, id: uuidv4()}, 
        {tarea: "Escuchar podcasts", completado: false, id: uuidv4()}, 
        {tarea: "Hacer Ejercicio", completado: false, id: uuidv4()}
    ]);

    const [newTask, setNewTask] = useState({
        tarea: "",
        completado: false,
    })

    useEffect(() => {
        console.table(task);
    }, [task])

    const handleInput = (event) => {
        const {name, value} = event.target;
        setNewTask({...newTask, [name]: value});
    }

    const agregarTarea = (e) =>{
        e.preventDefault();
        let nuevoId = {...newTask, id: uuidv4()};
        setTask(state => [...state, nuevoId]);
    }


    return(
        <Container maxWidth="sm">
            <form noValidate autoComplete="off">
                
                    <TextField id="tarea" 
                    name="tarea" 
                    label="Nombre de la tarea" 
                    placeholder="Nombre de la tarea"
                    onChange={handleInput}/>

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
        </Container>
    )
}

export default Form;