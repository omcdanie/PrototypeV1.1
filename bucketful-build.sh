#!/usr/bin/env bash

export BUCKETFUL_APP_IMAGE="bucketful/prototype1.1"

echo "building meteor bundle ..."
meteor build --server-only --directory .build

echo "building docker image ..."
docker build -t $BUCKETFUL_APP_IMAGE .

echo "start docker compose ..."
docker-compose up -d
