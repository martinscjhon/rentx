# image
FROM node

# diretorio
WORKDIR /usr/app

# copy das dependencias
COPY package.json ./

# run dependencias
RUN npm install

# copia tudo para o package
COPY . .

# porta
EXPOSE 3333

# start
CMD ["npm","run","dev"]