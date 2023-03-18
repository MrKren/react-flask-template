FROM node:18 as frontend

COPY ./frontend /frontend
WORKDIR /frontend
RUN yarn install
RUN yarn webpack --config webpack.prod.js

FROM python:3.7 as backend

RUN curl -sSL https://install.python-poetry.org | python3 -
ENV PATH="/root/.local/bin:$PATH"
RUN poetry config virtualenvs.create false
COPY ./src /title2image
WORKDIR /title2image
RUN poetry install
COPY --from=frontend /frontend/dist /title2image/static/dist

CMD [ "gunicorn", "app:app" ]
