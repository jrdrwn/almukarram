export type QuickAccessItem = {
    title: string;
    subtitle?: string;
    href: string;
    icon: 'book' | 'calculator' | 'users' | 'calendar' | 'mosque' | 'pray' | 'quran' | 'heart' | 'share' | 'phone' | 'mail' | 'location' | 'info' | 'newspaper' | 'video' | 'image' | 'microphone' | 'wallet';
    color?: string;
    badge_type?: 'none' | 'new' | 'check' | 'external' | 'hot' | 'beta';
    description?: string;
};

export type HeroSetting = {
    hero_media_type?: 'video' | 'image';
    hero_image?: string;
    hero_video?: string;
    quick_access_items?: QuickAccessItem[];
};
