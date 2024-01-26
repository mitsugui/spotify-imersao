# Dockerfile to run json-server with api-artists/artists.json

# Use the official Node.js image as the base image
FROM node:16.18.1-alpine

RUN mkdir -p /app

# Set the working directory inside the container
WORKDIR /app

# Copy the api-artists directory containing the artists.json file to the container
COPY api-artists/artists.json /app

# Install json-server globally
RUN npm install -g json-server@0.17.4

# Expose the default json-server port
EXPOSE 3000

# Start json-server with the artists.json file as the data source
CMD json-server --watch /app/artists.json --port 3000 --host 0.0.0.0