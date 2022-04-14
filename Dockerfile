FROM node:alpine as dependencies
WORKDIR /my-project

COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

FROM node:alpine as builder
WORKDIR /my-project
COPY . .
RUN yarn build
RUN ls

EXPOSE 3000
CMD ["yarn", "start:prod"]
# FROM node:alpine as runner
# WORKDIR /my-project
# ENV NODE_ENV production
# COPY --from=builder /my-project/node_modules ./node_modules
# COPY --from=builder /my-project/package.json ./package.json
# COPY --from=builder /my-project/dist ./next
