FROM node:20.5.1

WORKDIR /usr/src/smart-brain-app/

COPY ./package*.json ./

RUN npm install

COPY ./ ./

CMD ["/bin/bash"]