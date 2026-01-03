# 1. Use Node.js to build the frontend
FROM node:18-alpine

WORKDIR /app

# 2. Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# 3. Copy the rest of the frontend code
COPY . .

# 4. Expose the port Vite runs on (usually 5173 or 3000)
EXPOSE 3000

# 5. Start the development server
# --host 0.0.0.0 is needed so Docker can "see" the app from outside
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0", "--port", "3000"]