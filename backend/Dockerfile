FROM node:18-alpine

# Install curl for mandatory health check
RUN apk add --no-cache curl

WORKDIR /app

# Copy backend package files
COPY package*.json ./
RUN npm install

# Copy backend source code
COPY . .

# Expose the mandatory port
EXPOSE 5000

# --- ADD THIS LINE ---
# This tells the container to run your server file
CMD ["node", "server.js"]