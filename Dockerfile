FROM node:13-alpine
WORKDIR /usr/app
COPY package.json .
RUN npm install --quiet
COPY . .
CMD [ "npm", "start" ]