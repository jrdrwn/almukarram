<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('site_contacts', function (Blueprint $table) {
            $table->string('location')->nullable()->after('youtube')->comment('iframe URL or coordinates for map');
        });
    }

    public function down(): void
    {
        Schema::table('site_contacts', function (Blueprint $table) {
            $table->dropColumn('location');
        });
    }
};
