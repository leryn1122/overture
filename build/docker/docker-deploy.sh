#!/usr/bin/env bahs

docker stop overture
docker rm   overture

docer pull docker.leryn.top/leryn/website-frontend:nightly
docker run -itd \
           --name=overture \
           --hostname=frontend \
           -p 8081:80 \
           docker.leryn.top/leryn/website-frontend:nightly

# Command to enter the container:
#    docker exec -it leryn-frontend bash
