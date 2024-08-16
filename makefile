# variables
DOCKER_COMPOSE = docker compose
DEV_COMPOSE_FILE = docker-compose.yaml

# dev
dev:
	npm i --force && $(DOCKER_COMPOSE) -f $(DEV_COMPOSE_FILE) up --force-recreate --remove-orphans

cdev:
	npm i --force && $(DOCKER_COMPOSE) -f $(DEV_COMPOSE_FILE) up --force-recreate --remove-orphans --build
