# docker rm -f webapp | true
# docker rm -f daggerok/ng2-redux | true
# docker rmi -f daggerok/ng2-redux:latest | true
# docker build --rm -t daggerok/ng2-redux -f $PWD/docker/src/main/docker/Dockerfile $PWD
# docker tag daggerok/ng2-redux daggerok/ng2-redux:latest
# docker push daggerok/ng2-redux:latest
# docker run -d -p 80:8080 --name webapp daggerok/ng2-redux:latest
# docker run -d -p 80:8080 --name webapp -v $PWD/server/build/libs:/opt daggerok/ng2-redux:latest
FROM frolvlad/alpine-oraclejdk8:slim
COPY ./server/build/libs /opt
EXPOSE 8080
VOLUME "/opt"
ENTRYPOINT java -jar /opt/*.jar
