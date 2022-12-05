FROM node:19
WORKDIR /usr/src/clean-arch-node-api
COPY ./package.json .
RUN npm install --only=prod
COPY ./dist ./dist
EXPOSE 5000
CMD npm start