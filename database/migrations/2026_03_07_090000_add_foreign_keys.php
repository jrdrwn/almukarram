<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     * Tambahkan FK yang bergantung antar tabel domain di sini,
     * setelah semua tabel sudah dibuat.
     */
    public function up(): void
    {
        Schema::table('berita', function (Blueprint $table) {
            $table->foreign('kategori_id')
                ->references('id')->on('kategori_berita')
                ->nullOnDelete();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('berita', function (Blueprint $table) {
            $table->dropForeign(['kategori_id']);
        });
    }
};
