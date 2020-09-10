FROM node:lts as builder

ADD . /app
WORKDIR /app

RUN npm install -g gulp-cli
RUN npm install && gulp && gulp imagesTask
RUN rm -fr /app/node_modules

FROM nginx:1.17.6

# Copy files
COPY  --from=builder /app /etc/nginx/html
