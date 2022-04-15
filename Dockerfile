FROM node:alpine as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
RUN yarn build

EXPOSE 3000

ENV PORT 3000
CMD ["yarn", "start:prod"]
# FROM node:alpine as runner
# WORKDIR /my-project
# ENV NODE_ENV production
# COPY --from=builder /my-project/node_modules ./node_modules
# COPY --from=builder /my-project/package.json ./package.json
# COPY --from=builder /my-project/dist ./next
