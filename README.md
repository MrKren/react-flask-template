# Title2Image Web App

A simple web app for adding the title of a reddit post to the post's image. Inspired by the now dead [/u/title2imagebot](https://github.com/calicocatalyst/titletoimagebot) on reddit.

## Stack

The frontend is built using [React](https://reactjs.org/) and [Typescript](https://www.typescriptlang.org/) with [Yarn](https://classic.yarnpkg.com/lang/en/) for package management and [Webpack](https://webpack.js.org/) for bundling and development.

The backend is a [Flask](https://flask.palletsprojects.com/en/2.2.x/) [Python](https://www.python.org/)  server for serving the frontend and managing requests to the [Reddit API](https://github.com/reddit-archive/reddit/wiki/API) with [Poetry](https://python-poetry.org/) for dependancy managment.

The app is hosted using [Render](https://render.com/).

## Development

### Backend

Make sure you have [Python](https://www.python.org/) and [Poetry](https://python-poetry.org/) installed.

Then in `src/` run:

`poetry install`

To start the backend server:

`make start-be`

To lint:

`make lint-be`

To fix lint errors:

`make format-be`
