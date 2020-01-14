# # Original
# FROM node:12.12.0-alpine
# WORKDIR /app
# COPY package.json package.json
# RUN npm install
# RUN npm audit fix
# COPY . .
# EXPOSE 3000
# CMD ["npm", "start"]

##################################################################

# Stage 1 - the build process
FROM node:12.12.0-alpine as build
WORKDIR /app
COPY package.json package.json
RUN npm install
RUN npm audit fix
COPY . .
RUN npm run-script build
RUN CI=true npm test a

# Stage 2 - the production environment
FROM nginx:1.17-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm -f /etc/nginx/conf.d/default.conf
COPY nginx/confound.conf etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]