# Diario de desarrollo

## Pre-scriptum
La idea de crear una serie de logs para los nuevos proyectos que realice con los cambios más importantes durante el desarrollo de este proyecto es prestado de "100 Days of Code". Este log servirá tanto como una forma de desarrollar el ámbito de documentar los cambios más relevantes -sea en mejora profesional o impresiones en la tecnología usada- mientras termino esta tarea como una forma de ver mi evolución como programador con el paso del tiempo.

### Nota 1: 10/03/2021 - Sobre cuestiones de maquetación (I)

La idea general de una lista de tareas es que debe ser lo más simple posible con las funciones más elementales para su uso personal. Durante los dos primeros días de proyecto -el 8 y el 9 de marzo- estuve realizando un prototipo en papel sobre cómo se tendría que ver la aplicación. Los dos requisitos indispensables para mí son los siguientes:

- La interfaz debe ser lo más minimalista y funcional posible.

Esto es, la presentación no debe distraer de sus funciones más básicas. Esto se reduce a primera instancia utilizar colores planos, sin animación y con iconos que sean lo más explicativo posible. Evidentemente esto conlleva aprender las cuestiones de accesibilidad: etiquetas Aria y patrones visuales.

- La web-app debe tener un diseño adaptativo mediante el pensamiento: "Los dispositivos móviles primero; tablets y ordenadores personales después".


Con estos dos requisitos en mente comencé a realizar la cabecera del programa y la barra de tareas con Bootstrap 5. Después de años utilizandolo en tareas en academias recordé la razón por la cual he intentado evitarlo: la presentación de las webs realizadas en este framework es muy genérica y enseña malos hábitos de legibilidad y encapsulación de elementos divs innecesarios. 
Buscando otras alternativas que generen un código mucho más limpio, me decidí a emplear Material UI en su lugar.

**Recordatorio:** La sobreescritura de estilo de un componente en Material UI afecta globalmente a TODA la aplicación. Emplear extensivamente las reglas, variables y Flexbox en CSS.
