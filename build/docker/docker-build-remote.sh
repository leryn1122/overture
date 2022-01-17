#!/usr/bin/env bash

tar --exclude=app.tar.gz \
    --exclude=dist/* \
    --exclude=node_modules/* \
    --exclude=*.local \
    -zcf app.tar.gz .

# Deprecated
# Use docker-build-remote.ts
# curl -H 'Content-Type: application/x-tar' \
#      -X POST http://xxx.xxx.xxx.xxx:2375/build?t=leryn-frontend:1.0.0 \
#      --data-binary @app.tar.gz