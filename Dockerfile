FROM node:12.12.0-alpine
WORKDIR /app
COPY package.json package.json
RUN npm install
RUN npm audit fix
COPY . .
CMD ["npm", "start"]