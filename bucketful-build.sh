#!/usr/bin/env bash

export BUCKETFUL_BRANCH="$(git rev-parse --abbrev-ref HEAD)"
export BUCKETFUL_APP_IMAGE="local/bucketful/$BUCKETFUL_BRANCH"

echo "building meteor .tar bundle ..."
#mkdir .build
#rm -rf .build/*.tar.gz
#meteor build --server-only .build

echo "building docker image ..."
docker build -t $BUCKETFUL_APP_IMAGE .

echo "start docker compose ..."
docker-compose up -d