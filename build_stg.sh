#!/bin/bash

VERSION=0.1.6

grep --include="*.html" -rnl 'conan.io/center' . | xargs sed -i '' -e 's@conan.io/center@conan.center/center@g'
docker build -t jfrog-docker-reg2.bintray.io/conan-io-website:$VERSION .
grep --include="*.html" -rnl 'conan.center/center' . | xargs sed -i '' -e 's@conan.center/center@conan.io/center@g'

docker push jfrog-docker-reg2.bintray.io/conan-io-website:$VERSION
