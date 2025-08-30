FROM node:18-alpine

# Install tools tambahan
RUN apk add --no-cache bash git

# Set working directory
WORKDIR /var/www/html

# Install Framework7 CLI global
RUN npm install -g framework7-cli

# Expose default vite port
EXPOSE 5173
