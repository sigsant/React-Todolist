import {shallow} from 'enzyme';
import {TextField, Button} from '@material-ui/core';

import Form from '../Components/Form/Form';
import {Tarea, agregarTarea, addPropiedad} from './testTareas';

describe("<Form /> renderizado", () => {
    it("Renderiza el elemento TextField como input para introducir la tarea", () => {
        const formWrapper = shallow(<Form />);
        expect(formWrapper.find(TextField)).toHaveLength(1);
    });
    it("Renderiza un elemento Button para agregar tareas", () => {
        const formWrapper = shallow(<Form />);
        expect(formWrapper.find(Button)).toHaveLength(1);
    });
});

describe("Funciones de crear tareas", () => {
    it("Crea una lista de tareas: {tarea:string, completado:boolean}", () => {
       agregarTarea("Leer");
       expect(Tarea).toStrictEqual([{tarea: "Leer", completado: false}]);
    });
});