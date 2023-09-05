FROM node:16

WORKDIR /app

COPY package*.json /app/
RUN npm install

EXPOSE 3000

CMD ["npm", "start"]