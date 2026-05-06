# syntax=docker/dockerfile:1.7

# =========================================================================
# Stage 1 — build the Vite production bundle
# =========================================================================
FROM node:25-alpine AS build

WORKDIR /app

# Install dependencies first (better Docker layer caching)
COPY package.json package-lock.json ./
RUN npm ci --no-audit --no-fund

# Copy source and build
COPY . .
RUN npm run build

# =========================================================================
# Stage 2 — runtime (serve static files with `serve`)
# =========================================================================
FROM node:25-alpine AS runtime

WORKDIR /app

# Install `serve` globally (Vercel's static file server, ~1.5 MB)
RUN npm install -g serve@14 \
    && npm cache clean --force

# Copy only the built output and serve config
COPY --from=build /app/dist ./dist
COPY serve.json ./dist/serve.json

ENV NODE_ENV=production
ENV PORT=3000
EXPOSE 3000

# Drop privileges — node:alpine ships a non-root `node` user
USER node

# Lightweight healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- "http://localhost:${PORT}/" >/dev/null 2>&1 || exit 1

# `serve` auto-picks up dist/serve.json. -l listens on the given port, -n no clipboard
CMD ["sh", "-c", "serve dist -l ${PORT} -n"]
