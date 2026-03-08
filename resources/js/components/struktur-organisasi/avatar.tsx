import { User } from 'lucide-react';
import { fotoMap } from './struktur-organisasi-data';

interface AvatarProps {
    nama: string;
    size?: number;
    fallbackIcon?: React.ReactNode;
    bgColor?: string;
    onClick?: () => void;
}

export default function Avatar({
    nama,
    size = 80,
    fallbackIcon = <User className="text-white" size={size * 0.4} />,
    bgColor = 'bg-primary',
    onClick,
}: AvatarProps) {
    const foto = fotoMap[nama];
    const src = foto ? `/images/${encodeURIComponent(foto)}` : null;

    const handleClick = () => {
        if (onClick && src) {
            onClick();
        }
    };

    return (
        <div
            className={`flex items-center justify-center overflow-hidden rounded-full ${!src ? bgColor : ''} ${onClick && src ? 'cursor-pointer transition-transform hover:scale-105 active:scale-105' : ''}`}
            style={{ width: size, height: size }}
            onClick={handleClick}
        >
            {src ? (
                <img
                    src={src}
                    alt={nama}
                    className="h-full w-full object-cover object-top"
                    onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                        if ((e.target as HTMLImageElement).nextElementSibling) {
                            (
                                (e.target as HTMLImageElement)
                                    .nextElementSibling as HTMLElement
                            ).style.display = 'flex';
                        }
                    }}
                />
            ) : null}
            <div
                className={`flex h-full w-full items-center justify-center ${bgColor} ${src ? 'hidden' : ''}`}
            >
                {fallbackIcon}
            </div>
        </div>
    );
}
