import { User } from 'lucide-react';

interface AvatarProps {
    nama: string;
    fotoUrl?: string | null;
    size?: number;
    fallbackIcon?: React.ReactNode;
    bgColor?: string;
    onClick?: () => void;
}

export default function Avatar({
    nama,
    fotoUrl = null,
    size = 80,
    fallbackIcon,
    bgColor = 'bg-primary',
    onClick,
}: AvatarProps) {
    const resolvedFallback = fallbackIcon ?? (
        <User
            className="text-white"
            style={{ width: size * 0.4, height: size * 0.4 }}
        />
    );

    const handleClick = () => {
        if (onClick && fotoUrl) {
            onClick();
        }
    };

    return (
        <div
            className={[
                'flex items-center justify-center overflow-hidden rounded-full',
                !fotoUrl ? bgColor : '',
                onClick && fotoUrl
                    ? 'cursor-pointer transition-transform hover:scale-105 active:scale-105'
                    : '',
            ]
                .filter(Boolean)
                .join(' ')}
            style={{ width: size, height: size }}
            onClick={handleClick}
        >
            {fotoUrl ? (
                <img
                    src={fotoUrl}
                    alt={nama}
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.display = 'none';
                        const fallback =
                            img.nextElementSibling as HTMLElement | null;
                        if (fallback) {
                            fallback.style.display = 'flex';
                        }
                    }}
                />
            ) : null}

            {/* Fallback — visible when no fotoUrl, or when img fails to load */}
            <div
                className={[
                    'flex h-full w-full items-center justify-center',
                    bgColor,
                    fotoUrl ? 'hidden' : '',
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {resolvedFallback}
            </div>
        </div>
    );
}
