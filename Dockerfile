# Use lightweight Node.js runtime
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Set env to production
ENV NODE_ENV=production

# Install dependencies
COPY package*.json ./
RUN npm ci --omit=dev

# Copy app source
COPY . .

# Drop privileges to non-root user provided by the base image
RUN chown -R node:node /app
USER node

# Expose the app port
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
