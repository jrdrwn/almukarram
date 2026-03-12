<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('site_contacts', function (Blueprint $table) {
            $table->string('hero_media_type')->default('video')->after('location');
            $table->string('hero_image')->nullable()->after('hero_media_type');
            $table->string('hero_video')->nullable()->after('hero_image');
        });
    }

    public function down(): void
    {
        Schema::table('site_contacts', function (Blueprint $table) {
            $table->dropColumn(['hero_media_type', 'hero_image', 'hero_video']);
        });
    }
};
