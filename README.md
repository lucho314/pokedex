<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. clonar el repositorio
2. ejecutar

```sh
yarn install
```

3. Tener nest CLI instalado

```sh
npm i -g @nestjs/cli
```

4. Levantar la base de datos

```sh
docker-compose up -d
```

5. Clonar archivo ```.env_template``` y renombrarlo a ```.env```

6. LLenar la variables de entornos definidas en ```.env```

Ejecutar la aplicacion en dev:

```sh
yarn start:dev
```

7. Reconstruir la base de datos con la semilla

```sh
http://localhost:3000/seed
```

## Stack usado

* MongoDB
* Nest
