import React from 'react';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import {TextField, Container} from '@material-ui/core';

import './Form.css';

const Form = () => {

    const onClickHello = () => console.log('Click me again!')

    return(
        <Container maxWidth="sm">
            <form noValidate autoComplete="off">
                <div id="inputField">
                <TextField id="tarea" label="Nombre de la tarea"/>
                </div>
                <div id="iconField">
                    <AddCircleIcon id="iconAdd" onClick={onClickHello}/>
                </div>
            </form>
        </Container>
    )
}

export default Form;