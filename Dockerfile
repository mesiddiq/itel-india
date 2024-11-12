# Step 1: Build the React app
# Use a Node.js image to build the app
FROM node:16 AS build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the container
COPY . .

# Expose port 80 to access the app
EXPOSE 5173

# Start Nginx server
CMD ["npm","run","dev"]
