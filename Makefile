format-be:
	cd src/ && poetry run isort . && poetry run black .

lint-be:
	cd src/ && poetry run flake8 && poetry run isort . -c

start-be:
	cd src/ && poetry run flask --app app run --debug
