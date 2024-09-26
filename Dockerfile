FROM node:18-alphine

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install

COPY . .

ENV NEXT_PUBLIC_API_BASE_URL=http://103.17.37.8/api

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]