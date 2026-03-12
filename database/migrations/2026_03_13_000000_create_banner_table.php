<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('banner', function (Blueprint $table) {
            $table->id();
            $table->string('judul');
            $table->text('subjudul')->nullable();
            $table->string('gambar');
            $table->string('tautan')->nullable();
            $table->string('ratio')->default('4:1');
            $table->unsignedInteger('urutan')->default(0);
            $table->boolean('is_active')->default(true);
            $table->boolean('buka_tab_baru')->default(false);
            $table->date('mulai_tayang')->nullable();
            $table->date('selesai_tayang')->nullable();
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('banner');
    }
};
