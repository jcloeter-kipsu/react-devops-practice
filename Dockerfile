#FROM node:19-alpine3.16
#
#WORKDIR /app
#
#COPY ./package.json ./
#
#RUN npm install
#
#COPY . .
#
#EXPOSE 3000
#
#CMD ["npm", "run", "start"]




FROM node:14.14.0-alpine
WORKDIR "/app"
COPY ./package.json ./
RUN npm install
COPY ./ ./
CMD ["npm", "run", "start"]
