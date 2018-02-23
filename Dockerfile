FROM node:8.9.4

# Install passenger and its' dependances
RUN apt-get update \
  && DEBIAN_FRONTEND=noninteractive apt-get install -y net-tools dirmngr gnupg \
  && apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 561F9B9CAC40B2F7 \
  && apt-get install -y apt-transport-https ca-certificates

RUN sh -c 'echo deb https://oss-binaries.phusionpassenger.com/apt/passenger jessie main > /etc/apt/sources.list.d/passenger.list'
RUN apt-get update

RUN apt-get install -y passenger

RUN apt-get clean \
  && rm -rf /var/lib/apt/lists/*

RUN /usr/bin/passenger-config validate-install

# add user & app directory
RUN useradd bucketful -m -s /bin/bash
RUN mkdir -p /var/www/bucketful

# add passenger json
WORKDIR /var/www/bucketful/bundle
COPY --chown=bucketful:bucketful Passengerfile.json .

# deploy the app
WORKDIR /var/www/bucketful
COPY --chown=bucketful:bucketful .build/ .

# install npm packages
WORKDIR /var/www/bucketful/bundle/programs/server
RUN npm install --production

# expose port 3000
EXPOSE 3000

# start passenger which starts the app
WORKDIR /var/www/bucketful/bundle
CMD passenger start
