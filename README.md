
Instalación
## npm install

Iniciar proyecto
### `npm start`
Abrir [http://localhost:3000](http://localhost:3000) para verlo en el navegador.

## Tecnologias y uso
* React - Hooks 
  Libreria React
* Axios
  Se hace uso de Axios como API unificada para realizar peticiones asincronas para nutrir la aplicación.
* Typescript
  Se usa Typescript para implementar typos en Props y tipar las respuestas de la API.
* MaterialUI
  Se usa para establecer algunos elementos de MaterialUI como las tarjetas de la pantalla principal.
* Redux-Toolkit
  Se usa para establecer el State Managment de la aplicación, en este caso se establece un estado global para controlar el idioma seleccionado en el selector.
  Además se usa en la primera pantalla para recoger y guardar los datos de todos los personajes de la API.
* i18n
  Se usa para establecer la configuración del idioma seleccionado.
* React router
  Se hace uso de React router para redirigir y poder navegar entre pantallas, usandolo en este caso además para pasar identificadores.

## Componentes
Tenemos dos componentes centrales, componente Home que contiene un listado filtrable con todos los personajes disponibles y el componente Detalle donde se muestra el detalle para el personaje seleccionado.

## Scaffolding
--src
  -api
  -assets
  -components
  -i18n 
  -pages
  -routes
  -store
  -utils
