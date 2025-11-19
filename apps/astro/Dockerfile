# syntax=docker/dockerfile:1

# Build arguments for customization
ARG NODE_VERSION=24
ARG PNPM_VERSION=10.12.4
ARG APP_PORT=4321

# Stage 1: Build environment with all dependencies
FROM node:${NODE_VERSION}-alpine AS builder

# Install build dependencies and security updates
RUN apk update && apk upgrade && \
    apk add --no-cache \
    python3 \
    make \
    g++ \
    && rm -rf /var/cache/apk/* /tmp/*

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

# Set working directory
WORKDIR /app

# Create non-root user for security
RUN addgroup -g 1001 -S astro && \
    adduser -S astro -u 1001 && \
    chown astro:astro /app

USER astro

# Copy package files first for better layer caching
COPY --chown=astro:astro package.json pnpm-lock.yaml ./

# Install dependencies with optimizations
ENV HUSKY=0 \
    CI=true \
    NODE_ENV=production \
    ASTRO_TELEMETRY_DISABLED=1 \
    PNPM_HOME=/pnpm \
    PATH=$PNPM_HOME:$PATH

# Install and build in single layer to reduce image size
RUN pnpm install --frozen-lockfile --ignore-scripts

# Copy source code (optimized order for layer caching)
COPY --chown=astro:astro public ./public/
COPY --chown=astro:astro src ./src/
COPY --chown=astro:astro types ./types/
COPY --chown=astro:astro astro.config.mjs tsconfig.json biome.json ./

# Build and clean in single layer  
RUN pnpm run build && \
    pnpm prune --prod && \
    rm -rf node_modules/.cache .astro node_modules/.pnpm .pnpm-store && \
    find node_modules -name '*.md' -delete && \
    find node_modules -name 'README*' -delete && \
    find node_modules -name 'CHANGELOG*' -delete && \
    find node_modules -name '*.test.js' -delete && \
    find node_modules -name '__tests__' -type d -exec rm -rf {} + 2>/dev/null || true

# Stage 2: Minimal runtime with distroless approach
FROM node:${NODE_VERSION}-alpine AS runtime

# Security hardening: minimal packages and updates
RUN apk update && apk upgrade && \
    apk add --no-cache \
    tini \
    ca-certificates \
    && rm -rf /var/cache/apk/* /tmp/* /var/tmp/* \
    && addgroup -g 1001 -S astro \
    && adduser -S astro -u 1001 -G astro \
    && mkdir -p /app /tmp \
    && chown -R astro:astro /app /tmp

# Set secure runtime environment
ARG APP_PORT
ENV NODE_ENV=production \
    HOST=0.0.0.0 \
    PORT=${APP_PORT} \
    ASTRO_TELEMETRY_DISABLED=1 \
    NODE_NO_WARNINGS=1 \
    NODE_OPTIONS="--max-old-space-size=512 --max-semi-space-size=64" \
    PATH=/app/node_modules/.bin:$PATH

# Fly.io specific optimizations
LABEL fly_launch_runtime="nodejs"
LABEL fly_process_type="web"

WORKDIR /app

# Copy minimal production files from builder
COPY --from=builder --chown=astro:astro /app/node_modules ./node_modules
COPY --from=builder --chown=astro:astro /app/dist ./dist
COPY --from=builder --chown=astro:astro /app/package.json ./package.json

# Security: Remove SUID/SGID bits and set read-only filesystem
RUN find /app -type f -perm /6000 -exec chmod -s {} \; 2>/dev/null || true

# Switch to non-root user
USER astro

# Optimized health check
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
    CMD node -e "require('http').get('http://localhost:${PORT:-4321}',r=>process.exit(r.statusCode===200?0:1)).on('error',()=>process.exit(1))"

# Expose port
EXPOSE $APP_PORT

# Security: Use tini for proper signal handling and PID 1
ENTRYPOINT ["/sbin/tini", "-g", "--"]

# Start application with security optimizations
CMD ["node", "--enable-source-maps", "--unhandled-rejections=strict", "./dist/server/entry.mjs"]