# Use an official Node runtime as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the app's source code to the container
COPY . .

# Build the app
RUN npm run build

# Set the command to run the app using a production-ready server like serve
CMD ["npx", "serve", "-s", "build"]

# Expose the port that the app will run on
EXPOSE 5000