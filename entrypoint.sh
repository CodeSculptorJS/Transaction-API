#!/bin/sh
echo "$PWD"

npm run start:dev

exec "$@"