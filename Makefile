.PHONY: help # Generate list of targets with descriptions
help:
	@grep '^.PHONY: .* #' Makefile | sed 's/\.PHONY: \(.*\) # \(.*\)/\1	\2/' | expand -t20

.PHONY: build # Builds the docker image used for production
build:
	docker build . -t title2image

.PHONY: format # Formats all files
format: format-be format-fe

.PHONY: lint # Lints all files
lint: lint-be lint-fe

.PHONY: format-be # Formats .py files using isort and black
format-be:
	cd src/ && poetry run isort . && poetry run black .

.PHONY: lint-be # Lints .py files using isort and flake8
lint-be:
	cd src/ && poetry run flake8 && poetry run isort . -c

.PHONY: start-be # Starts the dev flask server
start-be:
	cd src/ && poetry run flask --app app run --debug

.PHONY: test-fe # Runs frontend unit tests
test-fe:
	cd frontend/ && yarn test

.PHONY: format-fe # Formats frontend files
format-fe:
	cd frontend/ && yarn fmt

.PHONY: lint-fe # Lints frontend files
lint-fe:
	cd frontend/ && yarn lint

.PHONY: start-fe # Starts frontend dev server
start-fe:
	cd frontend/ && yarn start
