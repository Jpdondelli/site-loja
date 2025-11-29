# ETAPA 1: Dependências
# Usamos uma imagem leve do Node
FROM node:18-alpine AS deps
# Instalar libc6-compat (necessário para o Next.js em Alpine)
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Copiar apenas os arquivos de dependência primeiro (para aproveitar o cache do Docker)
COPY package.json package-lock.json ./
RUN npm ci

# ETAPA 2: Builder (Compilação)
FROM node:18-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Desabilitar telemetria do Next.js (opcional, mas recomendado)
ENV NEXT_TELEMETRY_DISABLED 1

# Compilar o projeto
RUN npm run build

# ETAPA 3: Runner (Imagem Final de Produção)
FROM node:18-alpine AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

# Criar um usuário não-root por segurança
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copiar a pasta public (imagens, logos, favicon)
COPY --from=builder /app/public ./public

# Configurar permissões para o cache de imagens do Next.js
RUN mkdir .next
RUN chown nextjs:nodejs .next

# Copiar apenas o build standalone gerado na etapa anterior
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

# Mudar para o usuário seguro
USER nextjs

# Expor a porta 3000
EXPOSE 3000

# Variáveis de porta
ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

# Comando para iniciar
CMD node server.js