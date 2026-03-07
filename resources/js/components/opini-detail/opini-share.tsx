import {
    Facebook,
    Link as LinkIcon,
    MessageCircle,
    Send,
    Share2,
    Twitter,
} from 'lucide-react';
import { useState } from 'react';

interface OpiniShareProps {
    title: string;
    slug: string;
}

export default function OpiniShare({ title, slug }: OpiniShareProps) {
    const [copied, setCopied] = useState(false);

    const shareUrl =
        typeof window !== 'undefined'
            ? window.location.href
            : `https://masjidagung.id/opini-detail/${slug}`;
    const encoded = encodeURIComponent(shareUrl);
    const encodedTitle = encodeURIComponent(title);

    const platforms = [
        {
            label: 'Facebook',
            icon: <Facebook className="h-4 w-4" />,
            color: 'bg-[#1877F2] hover:bg-[#0f65d6] text-white',
            href: `https://www.facebook.com/sharer/sharer.php?u=${encoded}`,
        },
        {
            label: 'WhatsApp',
            icon: <MessageCircle className="h-4 w-4" />,
            color: 'bg-[#25D366] hover:bg-[#20bc5a] text-white',
            href: `https://wa.me/?text=${encodedTitle}%20${encoded}`,
        },
        {
            label: 'Twitter',
            icon: <Twitter className="h-4 w-4" />,
            color: 'bg-[#1DA1F2] hover:bg-[#1a91da] text-white',
            href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encoded}`,
        },
        {
            label: 'Telegram',
            icon: <Send className="h-4 w-4" />,
            color: 'bg-[#229ED9] hover:bg-[#1c8ec2] text-white',
            href: `https://t.me/share/url?url=${encoded}&text=${encodedTitle}`,
        },
    ];

    function handleCopy() {
        navigator.clipboard.writeText(shareUrl).then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        });
    }

    return (
        <div className="relative overflow-hidden rounded-4xl border border-border bg-white/60 p-6 shadow-sm backdrop-blur-xl dark:bg-zinc-900/50">
            {/* Ambient */}
            <div className="pointer-events-none absolute -top-10 right-0 h-40 w-40 rounded-full bg-violet-500/8 blur-[60px]" />

            <div className="relative z-10 mb-5 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-violet-50 to-violet-100/50 text-violet-600 ring-1 ring-violet-500/20 dark:from-violet-900/20 dark:to-violet-800/10 dark:text-violet-400">
                    <Share2 className="h-4 w-4" />
                </div>
                <h3 className="text-base font-bold text-foreground">
                    Bagikan Artikel
                </h3>
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
                {platforms.map((p) => (
                    <a
                        key={p.label}
                        href={p.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-sm transition-all duration-200 hover:scale-105 hover:shadow-md ${p.color}`}
                    >
                        {p.icon}
                        {p.label}
                    </a>
                ))}
                <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-2 rounded-full bg-zinc-100 px-4 py-2 text-sm font-semibold text-zinc-700 shadow-sm transition-all duration-200 hover:scale-105 hover:bg-zinc-200 hover:shadow-md dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700"
                >
                    <LinkIcon className="h-4 w-4" />
                    {copied ? 'Tersalin!' : 'Salin Link'}
                </button>
            </div>
        </div>
    );
}
