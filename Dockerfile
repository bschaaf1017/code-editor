FROM node:14.17.4-alpine

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./

RUN npm install --silent 

COPY . ./

CMD ["npm", "start"]