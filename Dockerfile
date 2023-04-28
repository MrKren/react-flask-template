FROM node:18 AS frontend

COPY ./frontend /frontend
WORKDIR /frontend
RUN yarn install
RUN yarn webpack --config webpack.prod.js

FROM python:3.7 AS backend

RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="/root/.local/bin:$PATH"
RUN poetry config virtualenvs.create false
COPY ./src /web-app
WORKDIR /web-app
RUN poetry install --without dev

FROM backend AS development

RUN poetry install
CMD ["poetry", "run", "python", "dev_server.py"]

FROM backend AS production

COPY --from=frontend /frontend/dist /web-app/static/dist
CMD [ "gunicorn", "app:app" ]
