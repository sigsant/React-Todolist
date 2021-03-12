import React, {useState, useEffect} from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {TextField, Container, Button} from '@material-ui/core';
import {v4 as uuidv4} from 'uuid';

import './Form.css';

const Form = () => {

    useEffect(() => {
        console.table(task);
    })

    const [task, setTask] = useState([
        {tarea: "Estudiar Angular", completado: false, id: uuidv4()}, 
        {tarea: "Escuchar podcasts", completado: false, id: uuidv4()}, 
        {tarea: "Hacer Ejercicio", completado: false, id: uuidv4()}
    ]);

    const addElement = (e) => {
        const [name, value] = e.target;
        console.log(`Nombre: ${name} -- Valor ${value}`);
    }


    return(
        <Container maxWidth="sm">
            <form noValidate autoComplete="off">
                
                    <TextField id="tarea" 
                    name="tarea" 
                    label="Nombre de la tarea" 
                    placeholder="Nombre de la tarea"
                    onChange={addElement}/>

                    <Button type="submit" 
                            variant="contained"
                            color="primary"
                            size="medium"
                            startIcon={<AddCircleIcon />}
                            id="iconAdd">
                            Añadir
                    </Button>
            </form>
        </Container>
    )
}

export default Form;