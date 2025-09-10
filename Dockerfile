# Stage 1: Build the React app
FROM node:20-slim AS build

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy the full source
COPY . .

# Build the app
RUN npm run build

# Stage 2: Serve the app with NGINX
FROM nginx:stable-alpine

# Copy build output to NGINX html folder
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 inside container
EXPOSE 80

# Run NGINX in foreground
CMD ["nginx", "-g", "daemon off;"]
