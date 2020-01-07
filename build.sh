#!/bin/bash

VERSION=1.0.0

docker build -t jfrog-docker-reg2.bintray.io/conan-io-website:$VERSION .

docker push jfrog-docker-reg2.bintray.io/conan-io-website:$VERSION
