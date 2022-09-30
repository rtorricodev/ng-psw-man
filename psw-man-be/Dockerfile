FROM node:latest
WORKDIR /psw-man/psw-man-be
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 80
CMD [ "npm", "start" ]