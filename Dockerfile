# Use the official Node.js image as a parent image
FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the application
RUN npm run build

# Expose the application port (default NestJS port)
EXPOSE 3001

# Command to run the application
CMD ["npm", "run", "start:prod"]