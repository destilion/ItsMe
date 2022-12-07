# build stage
FROM node:lts-alpine as build-stage
WORKDIR /app
COPY ./my-site/package*.json ./
RUN npm install
COPY ./my-site/ .
RUN npm install
RUN npm run build

# production stage
FROM nginx:stable-alpine as production-stage
COPY ./my-site/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]