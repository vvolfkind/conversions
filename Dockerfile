FROM node:10.16.3

WORKDIR /usr/src/app

RUN pwd
RUN ls /usr/src/app

RUN apt-get update
RUN apt-get install -y build-essential
RUN apt-get install -y python

RUN npm install pm2@latest -g

EXPOSE 3000

CMD ["pm2-dev", "config/process.json"]