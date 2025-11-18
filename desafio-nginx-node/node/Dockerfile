
FROM node:18-slim

WORKDIR /usr/src/app

RUN apt-get update && apt-get install -y wget && rm -rf /var/lib/apt/lists/*

ENV DOCKERIZE_VERSION v0.7.0
RUN wget -O - https://github.com/jwilder/dockerize/releases/download/$DOCKERIZE_VERSION/dockerize-linux-amd64-$DOCKERIZE_VERSION.tar.gz | tar xzf - -C /usr/local/bin

EXPOSE 3000

CMD ["node", "index.js"]