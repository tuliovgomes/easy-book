FROM php:8.4-apache

RUN apt-get update && apt-get install -y \
    git \
    unzip \
    curl \
    libzip-dev \
    libicu-dev \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libonig-dev \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install -j$(nproc) \
    pdo_mysql \
    mbstring \
    bcmath \
    exif \
    pcntl \
    gd \
    zip \
    intl \
    opcache \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

COPY --from=composer:2 /usr/bin/composer /usr/bin/composer

WORKDIR /var/www/html

RUN sed -i \
    's|/var/www/html|/var/www/html/public|g' \
    /etc/apache2/sites-available/000-default.conf \
    && sed -i 's/Listen 80/Listen 8080/' /etc/apache2/ports.conf \
    && sed -i 's/\*:80/*:8080/' /etc/apache2/sites-available/000-default.conf \
    && a2enmod rewrite

# Roda como o usuário do host (UID 1000) para que os arquivos criados por
# artisan/composer/apache não fiquem com dono root.
RUN useradd -u 1000 -m dev \
    && chmod -R a+rwX /var/run/apache2 /var/log/apache2 /var/lock/apache2

USER dev

EXPOSE 8080

CMD ["apache2-foreground"]