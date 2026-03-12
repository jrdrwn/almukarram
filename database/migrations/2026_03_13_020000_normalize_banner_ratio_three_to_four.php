<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('banner')
            ->where('ratio', '3:1')
            ->update(['ratio' => '4:1']);
    }

    public function down(): void
    {
        // no-op: previous 3:1 values cannot be inferred once normalized to 4:1
    }
};
