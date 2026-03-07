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
        Schema::create('jadwal_jumat', function (Blueprint $table) {
            $table->id();
            $table->date('tanggal');
            $table->string('waktu');
            $table->string('khatib');
            $table->string('imam');
            $table->string('muadzin');
            $table->string('bilal');
            $table->foreignId('user_id')->nullable()->constrained()->nullOnDelete();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('jadwal_jumat');
    }
};
