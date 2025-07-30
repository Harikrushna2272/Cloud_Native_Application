# Use official Node.js LTS image
FROM node:lts

# Create app directory
WORKDIR /simple-node-api

# Copy package.json and package-lock.json if available
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your application code
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Run the app
CMD ["node", "index.js"]
