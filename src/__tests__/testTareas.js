const plantilla = {tarea: "",completado: false};
const Tarea = [];

const agregarTarea = (item) => {
    const nuevaTarea = {...plantilla, tarea: item};
    Tarea.push(nuevaTarea);
}

export { Tarea, plantilla, agregarTarea };