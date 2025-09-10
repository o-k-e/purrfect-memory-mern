FROM node:22.16.0-alpine3.20

RUN mkdir memory-game

WORKDIR /memory-game

COPY . .

RUN npm install

ENTRYPOINT [ "npm", "run", "dev" ]

EXPOSE 3000