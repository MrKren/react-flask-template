# React Flask Web App

A simple React Flask web app template.

## Stack

The frontend is built using [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/) with [Yarn](https://classic.yarnpkg.com/lang/en/) for package management, [Webpack](https://webpack.js.org/) for bundling & development and [Jest](https://jestjs.io/) for frontend unit tests.

The backend is a [Flask](https://flask.palletsprojects.com/en/2.2.x/) [Python](https://www.python.org/)  server for serving the frontend with [Poetry](https://python-poetry.org/) for dependancy managment.

The app can be easily hosted in a [Docker](https://docs.docker.com/) container using [Render](https://render.com/).

## Development

### General

Run `make help` or just `make` to see a list of all make commands with short descriptions.

If you have [Docker](https://docs.docker.com/) installed you can skip the below steps and just use `make build` and then `make up` to start the app in dev mode (you may want to do the following steps anyway for editor type hints, autocompletions, etc).

### CI setup

Create a Github Personal Access Token with the following scopes listed [here](https://github.com/myoung34/docker-github-actions-runner/wiki/Usage#token-scope).

Create a `.env` file and store the token in it under the following environment variable:

`ACCESS_TOKEN = github_token_here`

### Backend

Make sure you have [Python](https://www.python.org/) and [Poetry](https://python-poetry.org/) installed.

Then in `src/` run:

`poetry install`

### Frontend

Make sure you have [Node](https://nodejs.org/en) installed, I recommend using [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to install and manage your node versions. Once you have Node installed make sure you install [Yarn](https://classic.yarnpkg.com/lang/en/).

Then in `frontend/` run:

`yarn install`
