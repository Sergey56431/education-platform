#!/usr/bin/env bash
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

echo "1/3 сборка JAR"
cd "$PROJECT_ROOT/academiland"
mvn clean package -Pdev -DskipTests

echo "2/3 остановка старых контейнеров"
cd "$PROJECT_ROOT"
docker-compose down

echo "3/3 cборка образа и запуск контейнеров"
docker-compose up --build
