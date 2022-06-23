# A bitcoin minning platform
A bitcoin minning platform
---

## Requirements

For development, you will only need Node.js, npm, postgres, bitcoind and a node global package - Yarn, installed in your environment.

### Node

- #### Node installation on Windows

    Just go on [official Node.js website](https://nodejs.org/) and download the installer.
    Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

    You can install nodejs and npm easily with apt install, just run the following commands.

    ##### Installation Commands

        $ sudo apt install nodejs
        $ sudo apt install npm

- #### Other Operating Systems

    You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).
    If the installation was successful, you should be able to run the following command.

    ##### verification Commands

        $ node --version
        v14.17.3 (recommended for this project)
        $ npm --version
        v7.20.5
    If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    ##### update Command

        $ npm install npm -g

### Yarn

After installing node, this project will need yarn too, so just run the following command.

##### Installation Commands

    $ npm install -g yarn

---

## Project Installation

    $ Clone the App
    $ run `npm install` to install dependencies.
    $ run `npm run prepare` to initialize husky. (optional)
    $ run `npm run migrate:up` to run migrations.

---

## Configure app

    Create a `.env` on the project's root directory, copy and fill in the values for the variables listed on the `.env.example` file

---

## Running migrations

    $ Use `npm run migrate:up` to mannually run migrations
    $ Use `npm run migrate:down` to mannually run migrations

---

## Running the project locally

    $ run `npm run dev` to serve the app with hot reload at `localhost:${Port}` or `http://127.0.0.1:${Port}`

---

## Running tests

    $ npm test OR yarn run test

---

## Technologies

- Node JS
- Express
- Chai, Chai-http and mocha
- Postman
- Postgres
- Bitcoind

---

## Documentation

    $ The API documentation can be found at 
    
---

## Copyright

Copyright (c) 2022 Austin

---