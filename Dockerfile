# Estágio 1: Build da aplicação (Transforma TS/React em arquivos JS/HTML otimizados)
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Servir os arquivos estáticos com Nginx (Produção)
FROM nginx:alpine
# Copia o build gerado no estágio anterior para a pasta padrão do Nginx
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80 para acesso web
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]