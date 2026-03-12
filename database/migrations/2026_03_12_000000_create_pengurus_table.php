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
        Schema::create('pengurus', function (Blueprint $table) {
            $table->id();
            $table->string('nama');
            $table->string('jabatan')->nullable();
            $table->string('foto')->nullable();

            // kelompok: pimpinan_inti | bidang_riayah | bidang_idarah | bidang_imarah | sekretariat
            $table->string('kelompok');

            // peran: ketua_umum | ketua | sekretaris_umum | sekretaris | bendahara |
            //        ketua_bidang | sekretaris_bidang | kepala_sekretariat | anggota
            $table->string('peran');

            $table->unsignedInteger('urutan')->default(0);
            $table->boolean('is_active')->default(true);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pengurus');
    }
};
