# MCA-FTW

Minecraft Admin ToolKit For The Web

## Dependencies

* [PHP](https://php.net) 7.1 =<
* [NodeJS](https://nodejs.org) 10 =<
* [Composer](https://getcomposer.org)

## Installation

First, install PHP dependencies:

```bash
composer install
```

Then build assets:

```bash
npm i
cd resources/semantic
npx gulp build
cd ../..
npm run production
```

Configure the .env file correctly:

```bash
cp .env.production-example .env
$EDITOR .env
php artisan key:generate
```

If you want to use SQLite you must create the database file itself:

```bash
touch database/database.sqlite
```

Then setup the database:

```bash
php artisan migrate
```
