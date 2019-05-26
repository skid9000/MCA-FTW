# MCA-FTW

Minecraft Admin ToolKit For The Web

## Installation

You'll need to install [composer](https://getcomposer.org) for PHP dependencies, [Nodejs](https://nodejs.org) to compile assets.

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

Then setup the database:
```
php artisan migrate
```

To use SQLite, replace the whole `DB_*` block by this:
```
DB_CONNECTION=sqlite
```
You must also create the database file itself:
```bash
touch database/database.sqlite
```
