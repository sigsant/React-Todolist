import {shallow} from 'enzyme';

import {TextField, Button} from '@material-ui/core';

import Form from '../Components/Form/Form';
import {Tarea, agregarTarea, addPropiedad} from './testTareas';

describe("<Form /> renderizado", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<Form />);
    });

    it("Renderiza el elemento TextField como input para introducir la tarea", () => {
        expect(wrapper.containsMatchingElement(TextField)).toBe(true);
    });
    it("Renderiza un elemento Button para agregar tareas", () => {
        expect(wrapper.containsMatchingElement(Button)).toBe(true);
    });
});

describe("Funciones de crear tareas", () => {
    it("Crea una lista de tareas: {tarea:string, completado:boolean}", () => {
       agregarTarea("Leer");
       expect(Tarea).toStrictEqual([{tarea: "Leer", completado: false}]);
    });
});