# Projeto do FrontEnd da Philips Dev Week em Angular da Dio

> Projeto do FrontEnd desenvolvido durante o evento Philips Dev Week promovido pela Philips e pela DIO

> Período: 08-03-2022 a 11-03-2022

## Tecnologias do FrontEnd

- Linguagem : Typescript / Javascript
- Framework : Angular
- Biblioteca de Componentes: Angular Material (Material Design)

## Comandos do Angular CLI

### na Live

- Criação do projeto:

    ng new philips-dev-week-angular

    yarn install

- Adicionado o Material UI:

    ng add @angular/material

    yarn install

- Inciando o projeto:

    ng serve

- Geração do módulo ocorrencias incluindo o routing:

    ng g m ocorrencias --routing

- Geração do componente ocorrencias:

    ng g c ocorrencias/ocorrencias

- Geração do modelo regiao:

    ng g interface /ocorrencias/model/regiao

- Geração do serviço regiao:

    ng g service /ocorrencias/service/regiao

### fora da Live - Adicionando os outros modelos e serviços

- Geração do modelo faixaEtaria:

    ng g interface /ocorrencias/model/faixaEtaria

- Geração do serviços faixaEtaria:

    ng g service /ocorrencias/service/faixaEtaria

- Geração do modelo incidencias:

    ng g interface /ocorrencias/model/incidencias

- Geração do serviços incidencias:

    ng g service /ocorrencias/service/incidencias

## Repositorio do BackEnd

https://github.com/rodolfoHOk/dio.philips-dev-week-backend
