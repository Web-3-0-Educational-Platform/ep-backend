FROM node:20-alpine
WORKDIR /app
COPY package.json .
RUN npm ci
COPY . .
EXPOSE 3000

# dev
CMD ["npm", "run", "start:dev"]

# prod
#CMD ["npm", "run", "start"]