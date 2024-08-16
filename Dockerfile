FROM node:20.9.0

WORKDIR /usr/src/backend

COPY . .

COPY entrypoint.sh /usr/src/app/entrypoint.sh
RUN chmod 755 /usr/src/app/entrypoint.sh

ENTRYPOINT ["/usr/src/app/entrypoint.sh"]