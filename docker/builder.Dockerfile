FROM node:14 as builder
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY ./package.json /usr/src/app/
COPY ./yarn.lock /usr/src/app/
RUN yarn --prefer-offline --no-audit --progress=false
