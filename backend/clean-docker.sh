#!/usr/bin/env bash
set -e

PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$PROJECT_ROOT"

echo "Чистим связанные с docker-compose контейнеры, образы и volume"

docker-compose down --rmi local --volumes --remove-orphans

echo "Готово"
