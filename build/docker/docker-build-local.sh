#!/usr/bin/env bash

# Those are base images with node & nginx:
#   docker pull node:16.13
#   docker pull nginx:1.21.1

# Build frontend.
# npm run build

docker build -t overture-vue:1.0.0 .
