#!/bin/bash

VERSION=0.2.4

docker build -t jfrog-docker-reg2.bintray.io/conan-io-website:$VERSION .

docker push jfrog-docker-reg2.bintray.io/conan-io-website:$VERSION
