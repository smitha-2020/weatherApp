# Stage 1: Build
FROM node:16-alpine AS development
# Add a working directory
RUN mkdir -p /usr/src/app/backend
WORKDIR /usr/src/app/backend
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
# Copy app files
COPY . .
# Expose port
EXPOSE 9000
# Stage 2: Start the app
CMD [ "npm", "start" ]