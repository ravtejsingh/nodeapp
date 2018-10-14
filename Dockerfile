FROM node:10.11.0
EXPOSE 8080
COPY server.js .
CMD node server.js