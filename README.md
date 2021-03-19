# back4app-settings

Project which aims to concentrate common settings among back4app projects, such as URLs definitions.

It uses nconf to retrieve the running environment and define the settings.
The environment variable used define the settings is **NODE_ENV**.
Each environment should have its own configuration. There should have at least three: dev, homolog and production.

For consistency purposes, **no setting should be left as undefined or null**.

## How to install
```
$ npm install --save @back4app/back4app-settings
```

## How to use it
```
const settings = require('@back4app/back4app-settings')
console.log(settings.YOUR_SETTING)
```