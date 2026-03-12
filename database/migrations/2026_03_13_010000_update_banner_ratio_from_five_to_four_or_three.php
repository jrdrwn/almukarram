<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        DB::table('banner')
            ->where('ratio', '5:1')
            ->update(['ratio' => '4:1']);

        Schema::table('banner', function (Blueprint $table) {
            $table->string('ratio')->default('4:1')->change();
        });
    }

    public function down(): void
    {
        DB::table('banner')
            ->where('ratio', '4:1')
            ->update(['ratio' => '5:1']);

        Schema::table('banner', function (Blueprint $table) {
            $table->string('ratio')->default('5:1')->change();
        });
    }
};
