# Fitness App
## Componentes
- Santiago Concepción Estévez
- María Cabrera Vérgez
- Mohamed El Ouariachi Lamhamdi
## Descripción
> Este proyecto está diseñado para ofrecer una gestión completa de rutinas de entrenamiento a usuarios que deseen llevar un
> control eficaz de su progreso físico. Con una interfaz intuitiva y un sistema de suscripciones,los usuarios podrán planificar,
> seguir y gestionar sus rutinas de entrenamiento de forma sencilla y eficiente.


 ## Requisitos funcionales:

- Creación de rutinas de ejercicio.
- Editar rutinas creadas.
- Borrar rutinas creadas.
- Poder suscribirse para obtener ventajas, rutinas de profesionales.
- Poder ver rutinas creadas.
- Poder iniciar sesión en tu perfil con tus datos.
- Tener varios roles usuario, profesional, etc.
## Mockups y Storyboard

<p>Mockup_Desktop -> /Figma/Mockups/Desktop </p>
<p>Mockup_Tablet -> /Figma/Mockups/Tablet </p>
<p>Mockup_Mobile -> /Figma/Mockups/Mobile </p>

>[!NOTE]
En esta carpeta se encuentran todos los png de los mockups</p>
>
<p>Storyboard -> /Figma/Storyboard/storyboard.png</p>

## Listado de Templates
> [!NOTE]
> Todos los archivos se encuentran en "/Figma/Templates"
- Edit_and_delete_Rutine
    - Edit_rutine
- Footer
    - Se usa en todas
- Header
    - Se usa en todas
- Image_and_text
    - First_page
    - Pro_rutine
- Info_exercise
    - Create_rutine
    - Rutine
- Login
    - Login
    - Main_page
    - Register
- Subscription
  - Select_Payment_Plan

## Listado de paginas web
- Calendar.html -> Calendar
- Create_rutine.html -> Create_rutine
- Day_edit.html -> Day_edit
- Edit_rutine.html -> Edit_rutine
- First_page.html -> First_Page
- Login.html -> Login
- Main_page.html -> Main_Page (Pagina de inicio)
- Payment.html -> Payment
- Pro_rutine.html Pro_rutine
- Profile.html -> Profile
- Register.html -> Register
- Rutine.html -> Rutine
- Select_Payment_Plan.html -> Select_Payment_Plan
- Payment.html -> Payment

## Formularios
<p>Se han implementado dos formularios:</p>

- Login
  - Formulario donde puedes iniciar sesion con correo y contraseña
  - Validaciones
    - Comprueba que la contraseña tenga una longitud minima(8 caracteres)
    - Comprueba que el correo electronico usado este en la base de datos
    - Comprueba que la contraseña introducida sea identica a la que hay guardada en la base de datos
- Registro
  - Formulario donde se pueden registrar nuevos usuarios introduciendo nombre, correo electronico, contraseña y repetición de contraseña
  - Validacion
    - Comprueba que la contraseña tenga una longitud minima(8 caracteres)
    - Comprueba que la contraseña y la contraseña repetida sean iguales

## Acceso a Strapi
> Para poner en funcionamiento Strapi tiene que acceder al directorio backend y ejecutar los siguientes comandos 

- npm install
- npm run develop

> Una vez este en funcionamiento podra acceder con los siguientes datos
- Correo = admin@gmail.com
- Contraseña = 1234qweR

> [!NOTE]
> Version de node usada 20.15.0

## Enlaces
[![Figma](https://img.shields.io/badge/Figma-8A2BE2)](https://www.figma.com/design/bZUSWn9qFARirKdOZZI1BM/TrainFlow?node-id=0-1&t=9nisu3xCd40wWV6j-1)
[![Trello](https://img.shields.io/badge/Trello-198500FF)](https://trello.com/invite/b/67ab8943e46d194ce6fce3c8/ATTIfd9e6fbd2b77e614d7d34a565e749f6275992BDE/pwm)
