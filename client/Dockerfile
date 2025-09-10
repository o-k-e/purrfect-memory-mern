FROM node:22.16.0-alpine3.20

RUN mkdir memory-game-frontend

WORKDIR /memory-game-frontend

COPY . .

RUN npm install

RUN npm run build

ENTRYPOINT [ "npm", "run", "preview", "--", "--host", "0.0.0.0" ]

EXPOSE 4173