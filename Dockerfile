FROM docker.leryn.top/node:16-slim as build

WORKDIR /opt

COPY .npmrc ~
RUN npm install pnpm -g

COPY package.json pnpm-lock.yaml .
RUN pnpm install

COPY . .
RUN pnpm build

FROM docker.leryn.top/nginx:1.21.1 as publish

WORKDIR /usr/share/nginx/html/

COPY ./nginx.conf  /etc/nginx/nginx.conf.d/app.conf
COPY --from=build  /opt/dist/admin/   .

EXPOSE 80/tcp

ENTRYPOINT ["nginx", "-g", "daemon off;"]
