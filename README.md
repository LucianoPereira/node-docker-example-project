# Nodejs Example Application

# Pre-requisites
- Install [Node.js](https://nodejs.org/en/)
- Install [Docker](https://www.docker.com/)
- Install [Docker Compose](https://docs.docker.com/compose/install/)

# Environment vars
You can use the .env.example template file to define the environment variables needed to run the application.

| Name                          | Description                         | Default Value                                  |
| ----------------------------- | ------------------------------------| -----------------------------------------------|
|NODE_ENV           | Running environment, either `development` or `production`            | -|
|NODE_PORT           | Port used by the Node.js application (should match nginx config)           | 3000      |
|DB_PORT           | Port used by the MongoDB            | "27017"      |
|DB_IP           | MongoDB Ip value         | "mongo"      |
|DB_USER           | MongoDB user            | "-"      |
|DB_PASSWORD           | MongoDB password            | "-"      |
|SESSION_SECRET           | Express session secret            | "-"      |

# Getting started
- Clone the repository
```
git clone https://github.com/LucianoPereira/node-docker-example-project.git
```
- Install dependencies
```
yarn
```

## Run app using Docker

In order to run the app successfully, you create a `.env` file using the `.env.example` as reference.

Once the .env is created with the appropiate values, you can run the following command to run the application as a container:

#### Development
> `docker-compose -f docker-compose.base.yml -f docker-compose.dev.yml up --build`

#### Production
> `docker-compose -f docker-compose.base.yml -f docker-compose.prod.yml up --build`
