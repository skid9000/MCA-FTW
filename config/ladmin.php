<?php

  return [

    /**
     * Url image logo
     */
    'logo' => env('LADMIN_LOGO', null),

    'user' => App\User::class,

    'prefix' => 'usermgmt',

    /**
     * Authentication Setting
     */
    'auth' => [
      'user' => App\User::class,
      'guard' => 'web'
    ],

    /**
     * Notification status
     */
    'notification' => true


  ];
