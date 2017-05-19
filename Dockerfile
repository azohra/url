FROM gliderlabs/alpine:latest
RUN apk-install curl \
    && curl -Ls https://github.com/fgrehm/docker-phantomjs2/releases/download/v2.0.0-20150722/dockerized-phantomjs.tar.gz \
       | tar xz -C /
WORKDIR /tmp
COPY loadspeed.js loadspeed.js
COPY loadsuccess.js loadsuccess.js
ENTRYPOINT ["/usr/local/bin/phantomjs"]

