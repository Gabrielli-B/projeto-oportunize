# Imagem base do Node
FROM node:24-alpine

# Diretório de trabalho dentro do container
WORKDIR /usr/src/app

# Copiar package.json e package-lock.json
COPY package*.json ./

# Instalar dependências
RUN npm install

# Copiar todo o código do backend
COPY . .

# Expor a porta que o backend vai rodar
EXPOSE 3000

# Comando para rodar a aplicação em dev
CMD ["npm", "run", "dev"]
