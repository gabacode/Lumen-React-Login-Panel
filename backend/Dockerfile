FROM php:7.4-fpm-alpine

WORKDIR /app/backend

RUN docker-php-ext-install mysqli pdo pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN pwd
COPY . /app/backend

EXPOSE 8000
