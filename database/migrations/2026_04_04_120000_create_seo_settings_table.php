<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('seo_settings', function (Blueprint $table) {
            $table->id();
            $table->string('site_name')->nullable();
            $table->string('title_suffix')->nullable();
            $table->text('default_description')->nullable();
            $table->string('default_image')->nullable();
            $table->string('default_robots')->default('index,follow');
            $table->string('twitter_site')->nullable();
            $table->string('twitter_creator')->nullable();
            $table->string('facebook_app_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('seo_settings');
    }
};
