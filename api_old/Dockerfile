FROM node:12.2.0-alpine as build
WORKDIR /api 
COPY package.json ./api/package.json
RUN npm install --silent
COPY . /api

EXPOSE 5000
CMD ["node", "index.js"]