.PHONY: install dev build start clean docker-up docker-down docker-build

install:
	pnpm install

dev:
	pnpm dev

build:
	pnpm build

start:
	pnpm start

clean:
	pnpm clean

docker-build:
	docker-compose build

docker-up:
	docker-compose up -d

docker-down:
	docker-compose down

docker-logs:
	docker-compose logs -f

setup-go:
	cd services/api-gateway && go mod download

run-gateway:
	cd services/api-gateway && go run main.go

test:
	pnpm test

lint:
	pnpm lint

format:
	pnpm format