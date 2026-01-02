# Stage 1: Build
FROM node:20-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Stage 2: Serve
FROM nginx:stable-alpine

# Install Python and pip
RUN apk add --no-cache python3 py3-pip

# Set up backend directory and install dependencies
WORKDIR /app
COPY src/backend/ /app/backend/
RUN pip install --no-cache-dir flask flask-cors boto3 "botocore[crt]" --break-system-packages

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["sh", "-c", "python3 /app/backend/app.py & nginx -g 'daemon off;'"]