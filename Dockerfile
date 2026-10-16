
FROM node:22-alpine

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=5000
ENV APP_VERSION=1.0.0

COPY package*.json ./
RUN npm install --omit=dev

COPY app.js .

EXPOSE 5000

CMD ["npm", "start"]
