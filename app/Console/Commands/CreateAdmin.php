<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Str;
use Hash;

class CreateAdmin extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'create:admin {name} {email}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create an admin user';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $password = Str::random(32);
        $name = $this->argument('name');
        $email = $this->argument('email');
		$user = \App\User::create(['name' => $name, 'email' => $email, 'password' => Hash::make($password)]);
		$role = \Hexters\Ladmin\Models\Role::first();
        $user->roles()->attach($role->id, [], false);
		$this->info("Your password is :" . $password);
        return 0;
    }
}
