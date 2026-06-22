# To Do List - Aplicación en React

**Santiago Valencia García**

Aplicación de gestión de tareas desarrollada con React y Vite. Permite agregar, completar, eliminar y filtrar tareas, con persistencia en el navegador y soporte para tema claro y oscuro.

[Visitar la aplicación](https://to-do-list-react-seven-gamma.vercel.app/)

## Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior.
- npm (incluido con Node.js).

## Instalación

1. Clonar el repositorio:

```bash
git clone https://github.com/Tiago0507/to-do-list-react.git
cd to-do-list-react
```

2. Instalar las dependencias:

```bash
npm install
```

3. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

4. Abrir `http://localhost:5173` en el navegador.

Para generar la versión de producción:

```bash
npm run build
```

## Estructura del proyecto

```
src/
├── main.jsx                   Punto de entrada de la aplicación
├── App.jsx                    Componente raíz que orquesta la interfaz
├── components/
│   ├── ThemeToggle.jsx        Botón para alternar entre tema claro y oscuro
│   ├── TodoStats.jsx          Panel de estadísticas con progreso circular
│   ├── TodoForm.jsx           Formulario para agregar tareas
│   ├── TodoFilters.jsx        Filtros por estado (todas, pendientes, completadas)
│   ├── TodoList.jsx           Contenedor de la lista con estado vacío
│   └── TodoItem.jsx           Tarea individual con checkbox y eliminación
├── hooks/
│   ├── useTodos.js            Lógica de negocio para las tareas
│   └── useTheme.js            Lógica para el cambio de tema
├── data/
│   └── initialTasks.js        Datos iniciales proporcionados en la prueba
└── styles/
    └── index.css              Estilos globales con variables CSS y responsive
```

## Tecnologías utilizadas

- **React 19** con componentes funcionales y hooks.
- **Vite 8** como bundler y servidor de desarrollo.
- **CSS3** con variables CSS, Flexbox y media queries.
- **localStorage** para persistencia de tareas y preferencia de tema.

## Funcionalidades implementadas

- Agregar tareas con validación de texto vacío.
- Mostrar la lista de tareas con sus estados.
- Marcar tareas como completadas o pendientes.
- Eliminar tareas con animación de salida.
- Contador de tareas totales, completadas y pendientes con barra de progreso circular.
- Filtros para ver todas las tareas, solo pendientes o solo completadas.
- Cambio de tema (claro / oscuro) con detección automática de la preferencia del sistema.
- Persistencia de tareas y tema en localStorage.
- Diseño responsive adaptado a móviles, tablets y desktop.
- Respeto por la preferencia de movimiento reducido del sistema operativo.

## Decisiones tomadas

**Vite como herramienta de desarrollo.** Se elige Vite en lugar de Create React App porque ofrece tiempos de inicio y recarga significativamente más rápidos. Es el estándar actual recomendado por la comunidad de React para proyectos nuevos.

**Custom hooks para separar lógica y presentación.** Toda la lógica de las tareas se encapsula en `useTodos` y la del tema en `useTheme`. Los componentes solo se encargan de renderizar la interfaz. Esto facilita el mantenimiento y las pruebas.

**Componentes con responsabilidad única.** Cada componente tiene una sola función: `TodoForm` solo maneja el formulario, `TodoItem` solo representa una tarea, `TodoStats` solo muestra las estadísticas. Esto sigue el principio de responsabilidad única y hace que el código sea más fácil de entender y modificar.

**Variables CSS para el sistema de temas.** Los colores se definen como variables CSS en `:root` y se sobrescriben con el selector `[data-theme="dark"]`. Esto permite cambiar todo el esquema de colores sin duplicar estilos ni usar JavaScript para manipular clases individuales.

**localStorage para persistencia.** Las tareas y la preferencia de tema se guardan en localStorage para que el usuario no pierda su progreso al cerrar el navegador. La lectura inicial incluye manejo de errores por si localStorage no está disponible o los datos están corruptos.

**Animaciones con CSS puro.** Las transiciones y animaciones se implementan exclusivamente con CSS, sin librerías de animación. Esto mantiene el bundle ligero y el rendimiento óptimo. Se respeta `prefers-reduced-motion` para usuarios que prefieren menos movimiento.

**Datos iniciales en módulo separado.** Los datos proporcionados en la prueba técnica se mantienen en su propio archivo (`initialTasks.js`), separados de la lógica de la aplicación. Esto facilita su localización y modificación.

## Mejoras futuras

- Edición inline del texto de las tareas.
- Reordenamiento de tareas mediante drag and drop.
- Fechas de vencimiento con indicador visual de tareas próximas a vencer.
- Pruebas unitarias con Vitest y Testing Library.
- Categorías o etiquetas para agrupar tareas por contexto.
