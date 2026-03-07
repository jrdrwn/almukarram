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
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->default('penulis')->after('password');
            $table->text('bio')->nullable()->after('role');
            $table->string('photo_profile')->nullable()->after('bio');
            $table->json('social_media')->nullable()->after('photo_profile');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn(['role', 'bio', 'photo_profile', 'social_media']);
        });
    }
};
