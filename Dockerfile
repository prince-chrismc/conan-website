FROM ubuntu:14.04
MAINTAINER Luis Martinez de Bartolomé (laso@barbarianware.com) Barbarian Ware

# Create conan user
RUN groupadd -f conan
RUN useradd -m -d /home/conan -s /bin/bash -c "conan on ubuntu" -g conan conan
RUN su conan
RUN echo "conan ALL=(ALL) NOPASSWD:ALL" > /etc/sudoers.d/conan

RUN apt-get update
RUN apt-get install -y software-properties-common
RUN sudo add-apt-repository ppa:chris-lea/node.js 
RUN sudo apt-get update
RUN sudo apt-get -y install curl

ENV USER conan
USER conan
WORKDIR /home/conan
ENV HOME /home/conan


# Copy files and change permission
RUN mkdir /home/conan/web
ADD * /home/conan/web/
WORKDIR /home/conan/web
RUN curl -sL https://deb.nodesource.com/setup_6.x -o nodesource_setup.sh
RUN sudo apt-get install -y nodejs
RUN echo $(npm --version)
RUN npm install
