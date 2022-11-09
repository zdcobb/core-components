FROM node:alpine
WORKDIR /app
COPY . .
RUN apk add --no-cache bash
RUN npm install --save @types/react @types/react-dom
RUN npm install 
EXPOSE 3000
CMD ["npm", "start"]