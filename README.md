# MCA-FTW

Minecraft Admin ToolKit For The Web

## Dependencies

* [PHP](https://php.net) 7.2 =<
* [NodeJS](https://nodejs.org) 10 =<
* [Composer](https://getcomposer.org)

## Installation

First, install PHP dependencies:

```bash
composer install
```

Then install and build assets:

```bash
npm i
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

Finally, create your first user :

```bash
php artisan create:admin <name> <email>
```

The temporary password will be printed out on your terminal, dont forget to change it.

```
http(s)://<url>/usermgmt
```
