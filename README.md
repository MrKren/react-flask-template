# Title2Image Web App

https://title2image.onrender.com

A simple web app for adding the title of a reddit post to the post's image. Inspired by the now dead [/u/title2imagebot](https://github.com/calicocatalyst/titletoimagebot) on reddit.

## Stack

The frontend is built using [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/) with [Yarn](https://classic.yarnpkg.com/lang/en/) for package management, [Webpack](https://webpack.js.org/) for bundling & development and [Jest](https://jestjs.io/) for frontend unit tests.

The backend is a [Flask](https://flask.palletsprojects.com/en/2.2.x/) [Python](https://www.python.org/)  server for serving the frontend and managing requests to the [Reddit API](https://github.com/reddit-archive/reddit/wiki/API) with [Poetry](https://python-poetry.org/) for dependancy managment.

The app is hosted in a [Docker](https://docs.docker.com/) container using [Render](https://render.com/).

## Development

### General

Run `make help` or just `make` to see a list of all make commands with short descriptions.

### Backend

Make sure you have [Python](https://www.python.org/) and [Poetry](https://python-poetry.org/) installed.

Then in `src/` run:

`poetry install`

### Frontend

Make sure you have [Node](https://nodejs.org/en) installed, I recommend using [NVM](https://github.com/nvm-sh/nvm#installing-and-updating) to install and manage your node versions. Once you have Node installed make sure you install [Yarn](https://classic.yarnpkg.com/lang/en/).

Then in `frontend/` run:

`yarn install`
