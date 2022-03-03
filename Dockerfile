FROM node:12 as builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
ARG ENV_DEPLOY=development
RUN npm run build:$ENV_DEPLOY

FROM node:12 AS production
ENV NODE_ENV=production
WORKDIR /app
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
RUN npm install --production

EXPOSE 3000
CMD npm start