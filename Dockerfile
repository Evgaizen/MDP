# Stage 1 build client
FROM node:latest as client

WORKDIR /usr/app/client/

COPY client/package*.json ./

RUN npm ci

COPY client/ ./

RUN npm run build

# Stage 2 build server

FROM node:latest

RUN apt-get update && apt-get upgrade -y
RUN apt-get install clamav -y
RUN freshclam

WORKDIR /usr/src/app
COPY --from=client /usr/app/client/dist/ ./client/dist/

WORKDIR /usr/src/app/server
COPY server/package*.json ./
RUN npm ci
COPY server/ ./


EXPOSE 3000

CMD ["npm", "start"]