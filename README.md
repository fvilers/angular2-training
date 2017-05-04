# Angular2Training

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Requirements

The server side of this project use `bcrypt` to hash password of registered accounts. This package has some [dependencies](https://www.npmjs.com/package/bcrypt#dependencies) in order to be built. If you haven't already used node-gyp on your machine, you should follow this [guide](https://github.com/nodejs/node-gyp#installation).

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

This application use a dedicated back-end application. Ensure to run `npm start` before trying to fetch data. The back-end server runs on `http://localhost:3000/`

## Database seeding
You should run `node run seed` to seed your database with some heroes.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
