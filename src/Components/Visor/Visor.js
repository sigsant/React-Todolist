import React from 'react';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { Container, Paper, Divider, IconButton, Typography, InputBase } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import './Visor.css';

const Visor = (props) => {

    const useStyles = makeStyles( (theme) => ({
        contenedor: {
            marginTop: "2em",
        },
        tipografia: {
            margin: theme.spacing(1),
            flex: 1,
        },
        displayTareas: {
            display: 'flex',
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            alignItems: "center",
            margin: "1em 0em",
            width: 400,
            padding: "2px 4px",
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 40,
            margin: 4,
        }
    }));

    const estilo = useStyles();

    const clickEdit = (valorId) => {
        // console.log(`Editar: ${valorId}`);
        props.editarItem(valorId);
    }

    const clickDelete = (valor) => {
        props.filterItem(valor);
    }

    return(
        <Container maxWidth="sm" className={estilo.contenedor}>
        {props.element.map( item  => {

            //TODO: Sieditar == false renderizar con Typography. Si true, renderizar con InputBase.

            if(item.editado){
                return(
                    <Paper  elevation={3} 
                        key={item.id}
                        className={estilo.displayTareas}>
                            <InputBase className={estilo.tipografia} placeholder={item.tarea} />
                                <IconButton aria-label="editar" className={estilo.iconButton} 
                                            onClick={() => clickEdit(item.id)}>
                                    <EditIcon />
                                </IconButton> 
                            <Divider orientation="vertical" className={estilo.divider}/>
                                <IconButton aria-label="eliminar" className={estilo.iconButton} 
                                            onClick={() => clickDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton> 
                    </Paper>
                )
            } else {
                return(
                    <Paper  elevation={3} 
                        key={item.id}
                        className={estilo.displayTareas}>
                            <Typography className={estilo.tipografia}>{item.tarea}</Typography>
                                <IconButton aria-label="editar" className={estilo.iconButton} onClick={() => clickEdit(item.id)}>
                                    <EditIcon />
                                </IconButton> 
                            <Divider orientation="vertical" className={estilo.divider}/>
                                <IconButton aria-label="eliminar" className={estilo.iconButton} onClick={() => clickDelete(item.id)}>
                                    <DeleteIcon />
                                </IconButton> 
                    </Paper>
            )}
        })}
    </Container>

    )
}

export default Visor;