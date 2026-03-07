import { X } from 'lucide-react';
import { useEffect } from 'react';

interface LightboxModalProps {
    isOpen: boolean;
    src: string;
    nama: string;
    onClose: () => void;
}

export default function LightboxModal({
    isOpen,
    src,
    nama,
    onClose,
}: LightboxModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-9999 flex cursor-zoom-out items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
            onClick={onClose}
        >
            <div
                className="relative max-h-[90vh] max-w-[90vw] cursor-default"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute -top-4 -right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white text-black shadow-lg transition-transform hover:scale-110"
                    aria-label="Close"
                >
                    <X className="h-5 w-5" />
                </button>
                <div className="overflow-hidden rounded-2xl bg-white/10 p-2 shadow-2xl ring-1 ring-white/20 backdrop-blur-md">
                    <img
                        src={src}
                        alt={nama}
                        onError={(e) => {
                            e.currentTarget.src = '/images/logomasjid.png';
                        }}
                        className="block max-h-[80vh] max-w-full rounded-xl bg-black/50 object-contain"
                    />
                </div>
                <div className="mt-4 text-center text-lg font-bold tracking-wide text-white drop-shadow-md">
                    {nama}
                </div>
            </div>
        </div>
    );
}
