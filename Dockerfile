FROM node:12-alpine

ENV NODE_ENV=production

WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 80

CMD [ "npm", "start" ]