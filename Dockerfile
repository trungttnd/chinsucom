FROM node:14 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
COPY ./yarn.lock /usr/src/app/
RUN yarn --prefer-offline --no-audit --progress=false

WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm run build


FROM nginx:stable-alpine

COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /usr/src/app/out /usr/share/nginx/html

EXPOSE 80

WORKDIR /usr/share/nginx/html
# COPY ./env.sh .
# COPY ./.env .

RUN apk add --no-cache bash
# RUN chmod +x env.sh

CMD ["/bin/bash", "-c", "nginx -g \"daemon off;\""]