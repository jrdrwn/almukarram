<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (Schema::hasTable('site_contacts') && Schema::hasTable('hero_settings')) {
            $siteContact = DB::table('site_contacts')->orderBy('id')->first();

            if ($siteContact) {
                DB::table('hero_settings')->updateOrInsert(
                    ['id' => 1],
                    [
                        'hero_media_type' => $siteContact->hero_media_type ?? 'video',
                        'hero_image' => $siteContact->hero_image ?? null,
                        'hero_video' => $siteContact->hero_video ?? 'hero/vidio.mp4',
                        'created_at' => now(),
                        'updated_at' => now(),
                    ]
                );
            }
        }

        if (Schema::hasTable('site_contacts')) {
            Schema::table('site_contacts', function (Blueprint $table) {
                $columns = array_filter([
                    Schema::hasColumn('site_contacts', 'hero_media_type') ? 'hero_media_type' : null,
                    Schema::hasColumn('site_contacts', 'hero_image') ? 'hero_image' : null,
                    Schema::hasColumn('site_contacts', 'hero_video') ? 'hero_video' : null,
                ]);

                if ($columns !== []) {
                    $table->dropColumn($columns);
                }
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('site_contacts')) {
            Schema::table('site_contacts', function (Blueprint $table) {
                if (! Schema::hasColumn('site_contacts', 'hero_media_type')) {
                    $table->string('hero_media_type')->default('video')->nullable();
                }

                if (! Schema::hasColumn('site_contacts', 'hero_image')) {
                    $table->string('hero_image')->nullable();
                }

                if (! Schema::hasColumn('site_contacts', 'hero_video')) {
                    $table->string('hero_video')->nullable();
                }
            });
        }

        if (Schema::hasTable('site_contacts') && Schema::hasTable('hero_settings')) {
            $heroSetting = DB::table('hero_settings')->orderBy('id')->first();

            if ($heroSetting) {
                DB::table('site_contacts')->limit(1)->update([
                    'hero_media_type' => $heroSetting->hero_media_type,
                    'hero_image' => $heroSetting->hero_image,
                    'hero_video' => $heroSetting->hero_video,
                ]);
            }
        }
    }
};
