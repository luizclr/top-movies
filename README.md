![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Webpack](https://img.shields.io/badge/webpack-%238DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black)
![Babel](https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Jest](https://img.shields.io/badge/-jest-%23C21325?style=for-the-badge&logo=jest&logoColor=white)
![Testing-Library](https://img.shields.io/badge/-TestingLibrary-%23E33332?style=for-the-badge&logo=testing-library&logoColor=white)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)
![Nginx](https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&logo=nginx&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)


# 🔍 Top Movies

## 🌐 [top-movies-react-app.netlify.app/](https://top-movies-react-app.netlify.app/)
![example workflow](https://github.com/luizclr/top-movies/actions/workflows/main.yml/badge.svg)
[![Netlify Status](https://api.netlify.com/api/v1/badges/3686df98-70c6-43be-bb8b-f5f7b5b238c9/deploy-status)](https://app.netlify.com/sites/top-movies/deploys)

![Top Movies](/public/top-movies.png "Top Movies")

## 📖 Tabe of contents

1. [💡 Motivation](#motivation)
    - [Intro](#intro)
    - [Before starting](#before-starting)
    - [Technologies used](#technologies-used)
2. [📋 Features](#features)
3. [📋 Requirements](#requirements)
4. [🛠️ Installation and usage](#installation-and-usage)
    - [Using yarn](#using-yarn)
    - [Using Docker](#using-docker)
5. [🗂️ Component Structure (general)](#component-structure-general)
6. [🧑🏻‍💻 Contributing](#contributing)
    - [Branch names](#branch-names)
    - [Commit messages](#commit-messages)

## Motivation

### Intro:

The main objective of this repository is create a react application consuming [The movie DB API](https://developer.themoviedb.org/docs/getting-started).

### Before starting

> This project was created based on [luizclr/react-base](https://github.com/luizclr/react-base) template and using [react-styled-guide](https://www.npmjs.com/package/react-styled-guide) package.

> The application is hosted on [top-movies-react-app.netlify.app](https://top-movies-react-app.netlify.app) and you can access any time you want.

> You must create an account on [The movie DB API](https://developer.themoviedb.org/docs/getting-started) to be able to authenticate yourself using a _JWT_ token. For more information check the [authentication docs](https://developer.themoviedb.org/docs/authentication-application). Once you have the _token_, please add it in `MOVIES_TOKEN` variable into `.env` file.
eg: `MOVIES_TOKEN="your.token.here"`

> This application is using a fake authentication API! It means that you don't need to create any other account. You just need to type any fake e-mail but with a valid format and a random string greater or equal to 8 characters as password.
eg: `e-mail: example@email.com, password: 12345678`.

### Technologies used:

- **Language and framework**:
  - React ([react.dev](https://react.dev/))
  - TypeScript ([typescriptlang.org](https://www.typescriptlang.org/))
  - Node.js ([nodejs.org](https://nodejs.org/en))
- **Styling**:
  - Styled components ([styled-components.com](https://styled-components.com/))
  - React styled guide ([github.com/luizclr/react-styled-guide](https://github.com/luizclr/react-styled-guide))
- **Build and development**:
  - Webpack ([webpack.js.org](https://webpack.js.org/))
  - Babel ([babeljs.io](https://babeljs.io/))
  - Docker ([docker.com](https://www.docker.com/))
  - Nginx ([nginx.com](https://www.nginx.com/))
- **Linting**:
  - Eslint ([eslint.org](https://eslint.org/))
  - Prettier ([prettier.io](https://prettier.io/))
- **Testing**:
  - Jest ([jestjs.io](https://jestjs.io/))
  - React testing library ([testing-library.com/react-testing-library](https://testing-library.com/docs/react-testing-library/intro/))
- **API consuming**
  - Axios ([axios-http.com](https://axios-http.com/docs/intro))
- **CI/CD**:
  - Github Actions ([github.com/features/actions](https://github.com/features/actions))
  - Netlify ([netlify.com](https://www.netlify.com/))
- **Schema Validation**:
  - Zod ([zod.dev](https://zod.dev/))
- **Other tools**:
  - Husky ([typicode.github.io/husky](https://typicode.github.io/husky/))

## Features

### Main

- [x] The user has access to a list of the most popular movies of the day
- [x] User can page through the list to find new movies
- [x] The user has access to another page with details about the film, when clicking on an item in the listing
- [x] The user can filter the movies listed by genre, with the possibility of using more than one genre
- [x] The user can remove filters and the listing must be updated according to the removed filter
- [x] The user is able to return to the movie listing page with the filters still active

### Extra
- [x] User can manipulate theme between dark and light
- [x] User is able to login/logout
## Requirements

- NodeJs
- yarn
- nvm

or

- docker
- docker-compose
## Installation and usage

> Create a copy `.env` file from `.env.example` and populate the variables.

```shell
cp .env.example .env
```

### Using yarn

Using `nvm`? change local node version to project's node version on `.nvmrc`.

```shell
nvm install
```

Install dependencies:
```shell
yarn install
```

Run project on development mode:
```shell
yarn dev
```
> Open new browser window on [localhost:4000](http://localhost:4000).

Run unit tests:
```shell
yarn test
```

Run linter:
```shell
yarn lint
```

Build for production:
```shell
yarn build
```

Start server with built code:
```shell
yarn start
```

### Using Docker

create a docker network:
```shell
docker network create top-movies
```

build image:
```shell
make build
```

Run project on development mode:
```shell
make up
```
> Open new browser window on [localhost:4000](http://localhost:4000).

stop container:
```shell
make down
```

Run unit tests:
```shell
make test
```

Run linter:
```shell
make lint
```

## Component Structure (general)

```
└─ component
    ├─ component.container.tsx
    ├─ component.schema.ts
    ├─ component.styles.tsx
    ├─ component.tsx
    └─ types.ts
```

## Contributing

Follow the next steps to contribute
### Branch names

Name your branch with a meaningful name that represents the changes you have done.

Examples:

```
chore/updating-changelog
fix/user-authentication
feat/add-card
```

### Commit messages

Use the format {type}({scope}): {message}.

Eg: `feat(login): added remember me`.

See [conventional commit guideline](https://www.conventionalcommits.org/en/v1.0.0/).
