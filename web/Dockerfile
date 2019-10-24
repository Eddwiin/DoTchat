FROM node:12.2.0-alpine as build
WORKDIR /web
ENV PATH /node_modules/.bin:$PATH
COPY package.json /web/package.json
RUN npm install --silent
RUN npm install react-scripts@3.1.1 -g --silent
COPY . /web

EXPOSE 3000
CMD ["npm", "start"]
