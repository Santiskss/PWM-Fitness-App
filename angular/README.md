# Angular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## TrainFlow

Para probar el proyecto, ejecute "cd angular" y luego "ng serve"

## Componentes
- **MainPage**: Muestra la página inicial desde la que hay acceso a diferentes apartados de la web.
- **Login**: Permite a los usuarios acceder a sus cuentas.
- **Register**: Permite a los usuarios crearse una cuenta nueva.
- **Edit-Profile**: Da la opción al usuario de cambiar los datos de su perfil: nombre, edad, peso, altura.
- **Calendar**: Calendario que pueden ver para planificar sus rutinas.
- **First-page**: Página a la que acceden los usuarios tras acceder a sus cuentas.
- **Add-exercise**: Permite añadir nuevos ejercicios a las rutinas.
- **Create-rutine**: Creación de rutinas nuevas por parte del usuario.
- **Day-Edit**:
- **Edit-Rutine**: Edición de rutinas creadas.
- **Payment**: Pasarela de pago.
- **Pro-rutine**:
- **Routine**:
- **Select-Payment-Plan**: Muestra los distintos planes que el usuario puede adquirir.

## Servicios
- **UserService**: Contiene las funciones necesarias para que un usuario pueda hacer login, registrarse, hacer logout o acceder a la web por medio e una cuenta de google.
-  **RoutineService**:

## Interfaces
- **Exercise**: 
- **Routine**:
- **User**: Interfaz que representa los datos del usuario.

## Estructuras de datos en firebase

- **users**(Database): En la base de datos se guardan el nombre, correo, edad, peso y altura indicados en el momento del registro. En caso de no indicarlo, saldrá un mensaje señalándolo.
 ![users](public/users_database.png)
- **users**(Authentication): Aparecen los usuarios que han accedido a la web con sus cuentas. Los datos que se pueden ver son el correo como el identificador, el medio (correo o google), la fecha de creación y acceso.
 ![users](public/users_auth.png)
En caso de ocurrir algún error en el login por medio de google, llegará un correo a la cuenta encargada (fitness.app.pwm@gmail.com).
