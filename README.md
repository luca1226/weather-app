# WeatherAppBackbase

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.5.

## How to Run?

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Assignment

I have created a angular app to retrieve data from the [Open Weather API](https://openweathermap.org/current).
We have a APIService that retrieve the data from the API and the weather-component uses these data to show them to the user.
The user can click on one of the weather component to have more details of this city with the next forecast hours.

## Directory Structure

```
project
│   .editorconfig
│   .gitignore
│   angular.json
│   README.md
│   package.json
└───src
│   └─── app
│        └─── components 
│        └─── models
│        └─── providers
│        └─── weather-dashboard
│   └─── assets 
│   └─── environments
│   │    backbase.png
│   │    index.html
│   │    main.ts
│   │    polyfills.ts
│   │    test.ts
|   |    style.scss
```


## Running unit tests

Run `nom run test` to execute the unit tests via [Karma](https://karma-runner.github.io).

