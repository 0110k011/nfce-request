FROM node:14.16.0-alpine
RUN mkdir -p /config /src
WorkDIR /src
COPY package.json /package.json
COPY package-lock.json /package-lock.json
RUN npm install
CMD ["npm", "run", "start"]