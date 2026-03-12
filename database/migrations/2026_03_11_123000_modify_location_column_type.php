<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('site_contacts', function (Blueprint $table) {
            // change location column to text to accommodate long embed URLs
            $table->text('location')->nullable()->change();
        });
    }

    public function down(): void
    {
        Schema::table('site_contacts', function (Blueprint $table) {
            $table->string('location', 255)->nullable()->change();
        });
    }
};
