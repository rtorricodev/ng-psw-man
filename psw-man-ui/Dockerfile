### STAGE 1: Build ###
FROM node:latest as node
WORKDIR /psw-man/psw-man-ui
COPY . .
RUN npm install
COPY . .
RUN npm run build

# ### STAGE 2: Run ###
FROM nginx:latest
COPY --from=node /psw-man/psw-man-ui/dist/psw-man-ui /usr/share/nginx/html
EXPOSE 80