FROM ubuntu

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_21.x | bash -
RUN apt-get upgrade -y
RUN apt-get install -y nodejs
# WORKDIR /SECURE_BLINK_ASSESSMENT
WORKDIR /Skygoal_Backend_Task

# COPY . /SECURE_BLINK_ASSESSMENT
COPY . /Skygoal_Backend_Task


RUN npm install

ENTRYPOINT [ "npm", "start" ]