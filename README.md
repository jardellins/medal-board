<h1 align="center">
    The Top
</h1>
<p align="center">In this app we'll show you the rank of all countries that participated in this year.</p>


- <a href="#sobre">About</a> 
- <a href="#tecnologias">Technologies</a>
- <a href="#overview">Overview</a>
- <a href="#iniciando">Starting the application</a>
- <a href="#docker">Starting the application using docker-compose</a>


<br/>
<a id="sobre"></a>

## :scroll: About

This project was developed to show the medal board of all countries thar participated, here we are use [JSON-Server](https://www.npmjs.com/package/json-server) to simulate a real server. With this data we separated to show you the the rank desc medal and filtered by country, that way you will be able to see the medals and athletes for each country. 

<br/>
<a id="tecnologias"></a>

## :wrench: Technologies

This project was developed use this technologies:

- [React](https://reactjs.org/)
- [JSON_Server](https://www.npmjs.com/package/json-server)
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
- [Docker](https://www.docker.com/get-started)
- [docker-compose](https://docs.docker.com/compose/install/)

<br/>
<a id="overview"></a>

## Overview

<p align="center" >
    
Here is the overview of the application running.

![Capturar_select-area_20210916210736](https://user-images.githubusercontent.com/44972197/133703974-4e3dae87-2849-47f5-b47a-c88e6aaa9caa.png)

![Capturar_select-area_20210916210820](https://user-images.githubusercontent.com/44972197/133704021-6b82d28c-7669-4511-8708-b85bf2646db1.png)

<p>
    
<br/>
<a id="iniciando"></a>

## Starting the application

To start the application, you have to include your IP in file .env in the root of your directory, also, you need to starting the JSON-Server following this steps from [Documentation](https://www.npmjs.com/package/json-server#getting-started). After make this adjusted, you'll just have to initiate following the steps bellow:

## Download

```sh

https://github.com/jardellins/medal-board.git

```

## Starting project

Going to directory of the project

```sh

cd medal-board

```

Change IP from .env
```
REACT_APP_BASE_URL=http://<IP-LOCAL>:3333
```

Starting JSON-Server

```
json-server ./src/services/server.json --host <IP-LOCAL> --port 3333
```

And start the application

```sh
yarn install

yarn start
```
<a id="docker"></a>

## Starting the application using docker-compose

If you have [Docker](https://www.docker.com/get-started) and [docker-compose](https://docs.docker.com/compose/install/) installed in your PC, you just need run the command to UP the containers. 

Follow this steps:


Going to directory of the project

```sh

cd medal-board

```

Change IP from .env
```
REACT_APP_BASE_URL=http://<IP-LOCAL>:3333
```

Run docker-compose
```
docker-compose up -d
```
Access your browser an type
```
http://<YOUR-IP>:3000
```
