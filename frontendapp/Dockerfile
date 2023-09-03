# Stage 1: Build
FROM node:16-alpine AS development
ENV NODE_ENV development
# Add a working directory
RUN mkdir -p /usr/src/app/frontend
WORKDIR /usr/src/app/frontend
# Cache and Install dependencies
COPY package.json .
COPY package-lock.json .
RUN npm ci
# Copy app files
COPY . .
# Expose port
EXPOSE 3000
# Stage 2: Start the app
CMD [ "npm", "start" ]