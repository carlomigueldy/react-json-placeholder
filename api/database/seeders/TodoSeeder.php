<?php

namespace Database\Seeders;

use App\Models\Todo;
use Illuminate\Database\Seeder;

class TodoSeeder extends Seeder
{
    private $todo;
    
    public function __construct(Todo $todo)
    {
        $this->todo = $todo;
    }
    
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    }
}
