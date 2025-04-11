# Use an existing node alpine image as a base image.
FROM node:16-alpine3.18 as build
 
# Set the working directory.
WORKDIR /app
 
# Copy the package.json and package-lock.json files.
COPY package*.json ./
 
# Install application dependencies.
RUN npm install
 
# Copy the React application's source code to the container.
COPY . .

# Increase the Node.js heap memory for the build process.
ENV NODE_OPTIONS=--max-old-space-size=4096
 
# Build the React application.
RUN npm run build
 
# Use a lightweight Node.js-based server to serve the application.
FROM node:16-alpine3.18
 
# Set the working directory for the production server.
WORKDIR /app
 
# Install 'serve' globally to serve the application.
RUN npm install -g serve
 
# Copy the production-ready build files from the build stage to the production image.
COPY --from=build /app/build ./build
 
# Expose the port.
EXPOSE 3000
 
# Start the application using 'serve' on port 3000.
CMD ["serve", "-s", "build", "-l", "3000"]