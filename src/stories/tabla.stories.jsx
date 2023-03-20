import React from 'react';

import Tabla from './tabla';

export default {
  title: 'Ejemplo/Tabla',
  component: Tabla,

};

const Template = (args) => <Tabla {...args} />;

export const FilasYColumnas = Template.bind({});
FilasYColumnas.args = {
  titulo: 'Tabla Personas',
  columna : ['Numero', 'Nombre Completo', 'Ci'],
  fila : [
    ["1", "Alejandro Lucio Lima Maldonado", "3119362"],
    ["2", "Ruben Pedro Lima Maldonado", "3116274"]
  ]
};

