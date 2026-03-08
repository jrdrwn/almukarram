import { Link } from '@inertiajs/react';

interface BreadcrumbItem {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    badgeText?: string;
    badgeIcon?: React.ReactNode;
    breadcrumbs: BreadcrumbItem[];
    backgroundImage?: string;
}

export default function PageHeader({
    title,
    subtitle,
    badgeText,
    badgeIcon,
    breadcrumbs,
    backgroundImage = '/images/masjidnewww-scaled.png',
}: PageHeaderProps) {
    return (
        <section className="relative overflow-hidden py-24 md:py-32">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 -z-20">
                <img
                    src={backgroundImage}
                    alt="Background Masjid"
                    onError={(e) => {
                        e.currentTarget.src = '/images/masjidnewww-scaled.png';
                    }}
                    className="h-full w-full object-cover object-center"
                />
            </div>
            <div className="absolute inset-0 -z-10 bg-emerald-900/85 mix-blend-multiply dark:bg-emerald-950/90"></div>
            <div className="absolute inset-0 -z-10 bg-linear-to-t from-background via-background/40 to-transparent"></div>

            <div className="relative z-10 container mx-auto max-w-380 px-4 text-center sm:px-6 lg:px-8">
                {badgeText && (
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-white shadow-sm backdrop-blur-md dark:bg-black/20">
                        {badgeIcon}
                        <span>{badgeText}</span>
                    </div>
                )}

                <h1 className="mb-6 text-3xl font-extrabold tracking-tight text-white drop-shadow-lg sm:text-4xl md:text-6xl">
                    {title}
                </h1>

                {subtitle && (
                    <p className="mx-auto mb-8 max-w-2xl text-lg font-medium text-white/90 drop-shadow-md md:text-xl">
                        {subtitle}
                    </p>
                )}

                <nav
                    aria-label="breadcrumb"
                    className="mx-auto mt-4 flex justify-center"
                >
                    <ol className="inline-flex flex-wrap items-center justify-center space-x-2 gap-y-2 rounded-full border border-white/10 bg-black/20 px-5 py-2.5 text-sm text-white/80 shadow-lg backdrop-blur-md dark:bg-black/40">
                        {breadcrumbs.map((item, index) => {
                            const isLast = index === breadcrumbs.length - 1;
                            return (
                                <li key={index} className="flex items-center">
                                    {index > 0 && (
                                        <span className="mx-2 opacity-50">
                                            /
                                        </span>
                                    )}
                                    {isLast ? (
                                        <div
                                            className="flex items-center gap-1.5 font-bold tracking-wide text-white"
                                            aria-current="page"
                                        >
                                            {item.icon}
                                            {item.label}
                                        </div>
                                    ) : item.href ? (
                                        <Link
                                            href={item.href}
                                            className="flex items-center gap-1.5 font-medium transition-colors hover:text-white active:text-white"
                                        >
                                            {item.icon}
                                            {item.label}
                                        </Link>
                                    ) : (
                                        <div className="flex items-center gap-1.5 font-medium">
                                            {item.icon}
                                            {item.label}
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </nav>
            </div>
        </section>
    );
}
