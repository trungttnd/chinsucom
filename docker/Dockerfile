ARG BUILDER_IMAGE_NAME
FROM $BUILDER_IMAGE_NAME as builder
ARG ENV
ENV ENV=$ENV

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