# Stage 1: Build the React app
FROM node:20-alpine AS builder

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

# Stage 2: Serve with Vite preview
FROM node:20-alpine

WORKDIR /app
COPY --from=builder /app /app

# Install vite preview globally
RUN npm install -g vite

EXPOSE 5173

CMD ["vite", "preview", "--port", "5173", "--host"]