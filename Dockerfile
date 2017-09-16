FROM node
MAINTAINER Shaun Martin <shaun@samsite.ca>

EXPOSE 3000
EXPOSE 3001


RUN apt-get update && apt-get install -y \
  vim

RUN npm install -g \
  less \
  copyfiles \
  grunt-cli \
  gulp-cli

CMD /bin/bash
