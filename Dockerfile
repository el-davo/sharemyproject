FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html

COPY ./dist /usr/share/nginx/html
COPY ./dist/nginx.conf /etc/nginx/nginx.conf
COPY ./dist/mime.types /etc/nginx/mime.types
