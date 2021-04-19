FROM node

RUN mkdir -p /config /src
WORKDIR /src
COPY package.json /package.json
COPY package-lock.json /package-lock.json
RUN npm install
CMD ["npm", "run", "start"]