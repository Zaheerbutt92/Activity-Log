FROM node:alpine

WORKDIR /activity-log-client-app

COPY package.json ./
COPY package-lock.json ./

RUN npm install

CMD [ "npm","run","start" ]