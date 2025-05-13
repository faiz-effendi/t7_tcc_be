# node:18-alpine untuk node_modules yg lebih enteng
FROM node:20-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3001
CMD ["node", "index.js"]