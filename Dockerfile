FROM node:22.12.0-alpine

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci --legacy-peer-deps

COPY . .

EXPOSE 3000
ENV PORT=3000

# Build at container start (when DB is available), then run
CMD ["sh", "-c", "npm run build && cp -r .next/static .next/standalone/.next/static && cp -r public .next/standalone/public && HOSTNAME=0.0.0.0 node .next/standalone/server.js"]
