import { Link, usePage } from '@inertiajs/react';
import {
    Activity,
    Book,
    BookOpenText,
    Briefcase,
    Building2,
    Calculator,
    CalendarDays,
    ChevronDown,
    ChevronRight,
    Clock,
    X as CloseIcon,
    Compass,
    FileText,
    HandCoins,
    HeartHandshake,
    History,
    Home,
    Image as ImageIcon,
    Info,
    LayoutDashboard,
    MapPin,
    Menu as MenuIcon,
    MessageSquare,
    Network,
    Newspaper,
    Phone,
    SearchIcon,
    Wrench,
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { Drawer, DrawerClose, DrawerContent, DrawerHeader } from '../ui/drawer';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from '../ui/dropdown-menu';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from '../ui/navigation-menu';

type NavItem = {
    label: string;
    href?: string;
    icon?: React.ReactNode;
    sub?: NavItem[];
};

const navigationItems: NavItem[] = [
    { label: 'Beranda', href: '/', icon: <Home className="mr-1.5 h-4 w-4" /> },
    {
        label: 'Profil',
        href: '#',
        icon: <Info className="mr-1.5 h-4 w-4" />,
        sub: [
            {
                label: 'Sejarah Singkat',
                href: '/sejarah-singkat',
                icon: <History className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Struktur Organisasi',
                href: '/struktur-organisasi',
                icon: <Network className="mr-2 h-4 w-4 text-emerald-600" />,
            },
        ],
    },
    {
        label: 'Program',
        href: '#',
        icon: <Activity className="mr-1.5 h-4 w-4" />,
        sub: [
            {
                label: 'Program Masjid',
                href: '/program-masjid',
                icon: <Building2 className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Program Kerja Pengurus',
                icon: <Briefcase className="mr-2 h-4 w-4 text-emerald-600" />,
                sub: [
                    {
                        label: 'Idarah',
                        href: '/program-idarah',
                        icon: (
                            <LayoutDashboard className="mr-2 h-4 w-4 text-emerald-600" />
                        ),
                    },
                    {
                        label: 'Imarah',
                        href: '/program-imarah',
                        icon: (
                            <HeartHandshake className="mr-2 h-4 w-4 text-emerald-600" />
                        ),
                    },
                    {
                        label: 'Riayah',
                        href: '/program-riayah',
                        icon: (
                            <Wrench className="mr-2 h-4 w-4 text-emerald-600" />
                        ),
                    },
                ],
            },
        ],
    },
    {
        label: 'Pojok Baca',
        href: '#',
        icon: <BookOpenText className="mr-1.5 h-4 w-4" />,
        sub: [
            {
                label: "Al-Qur'an Kemenag",
                href: 'https://quran.kemenag.go.id/',
                icon: <Book className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Berita',
                href: '/berita',
                icon: <Newspaper className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Opini',
                href: '/opini',
                icon: (
                    <MessageSquare className="mr-2 h-4 w-4 text-emerald-600" />
                ),
            },
            {
                label: 'Buletin',
                href: '/buletin',
                icon: <FileText className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Spot Baca',
                href: '/spot-baca',
                icon: <MapPin className="mr-2 h-4 w-4 text-emerald-600" />,
            },
        ],
    },
    {
        label: 'Dokumen',
        href: '/dokumen',
        icon: <FileText className="mr-1.5 h-4 w-4" />,
    },
    {
        label: 'Galeri',
        href: '/galeri',
        icon: <ImageIcon className="mr-1.5 h-4 w-4" />,
    },
    {
        label: 'Layanan',
        href: '#',
        icon: <CalendarDays className="mr-1.5 h-4 w-4" />,
        sub: [
            {
                label: 'Jadwal Sholat',
                href: '/jadwal-sholat',
                icon: <Clock className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Jadwal & Petugas Jumat',
                href: '/jadwal-jumat',
                icon: (
                    <CalendarDays className="mr-2 h-4 w-4 text-emerald-600" />
                ),
            },
            {
                label: 'Jadwal Pengajian',
                href: '/jadwal-pengajian',
                icon: <Book className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Hitung Zakat',
                href: '/hitung-zakat',
                icon: <Calculator className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Informasi Haji',
                href: 'https://haji.go.id/estimasi-keberangkatan',
                icon: <Compass className="mr-2 h-4 w-4 text-emerald-600" />,
            },
            {
                label: 'Waqaf, Infaq, Shadaqah',
                href: '/zis',
                icon: <HandCoins className="mr-2 h-4 w-4 text-emerald-600" />,
            },
        ],
    },
    {
        label: 'Kontak',
        href: '/kontak',
        icon: <Phone className="mr-1.5 h-4 w-4" />,
    },
];

export default function Header() {
    const [mobileOpen, setMobileOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { pengumuman } = usePage<{ pengumuman?: string[] }>().props;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`z-50 transition-all duration-500 ease-in-out ${isScrolled ? 'sticky top-0 w-full pt-4 pb-2' : 'relative px-4 pt-0 pb-2'}`}
        >
            <div
                className={`mx-auto transition-all duration-500 ease-in-out ${isScrolled ? 'max-w-7xl px-4' : 'max-w-380'}`}
            >
                <div
                    className={`flex items-center justify-between overflow-hidden transition-all duration-500 ease-in-out ${isScrolled ? 'mt-0 mb-0 max-h-0 opacity-0' : 'mt-2 mb-2 max-h-20 opacity-100'}`}
                >
                    <div className="flex w-full items-center">
                        <div className="z-10 hidden rounded-r-full bg-primary px-3 py-1 text-xs font-semibold whitespace-nowrap text-primary-foreground md:block">
                            INFORMASI:
                        </div>
                        <div className="relative flex flex-1 overflow-hidden">
                            <div className="animate-marquee flex h-full items-center text-xs whitespace-nowrap">
                                <span className="mx-4 font-medium text-primary">
                                    {new Date().toLocaleDateString('id-ID', {
                                        dateStyle: 'full',
                                    })}{' '}
                                    -{' '}
                                    {new Date().toLocaleTimeString('id-ID', {
                                        timeStyle: 'short',
                                    })}
                                </span>
                                {pengumuman && pengumuman.length > 0 ? (
                                    pengumuman.map((item, idx) => (
                                        <React.Fragment key={idx}>
                                            •
                                            <span className="mx-4">
                                                {item}
                                            </span>
                                        </React.Fragment>
                                    ))
                                ) : (
                                    <>
                                        •
                                        <span className="mx-4">
                                            Masjid Agung Al-Mukarram Amanah - Selamat
                                            Datang di Website Resmi
                                        </span>
                                        •
                                        <span className="mx-4 font-medium text-emerald-600">
                                            Mari tunaikan Shalat tepat pada waktunya.
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="z-10 ml-2 hidden gap-4 border-l pl-4 text-xs font-medium whitespace-nowrap text-muted-foreground sm:flex">
                        <div className="flex items-center gap-1.5">
                            <MapPin className="size-3.5 text-emerald-600" />
                            <span>Kuala Kapuas, Kalteng</span>
                        </div>
                    </div>
                </div>
                <div
                    className={`z-10 flex flex-row items-center justify-between gap-8 rounded-full border px-2 py-2 transition-all duration-500 ease-in-out ${isScrolled ? 'border-emerald-500/20 bg-white/80 shadow-lg shadow-emerald-900/5 backdrop-blur-lg dark:bg-zinc-950/80' : 'bg-background'}`}
                >
                    <Link href="/">
                        <img
                            src="/images/logomasjid.png"
                            alt="Logo"
                            onError={(e) => {
                                e.currentTarget.src = '/favicon.ico';
                            }}
                            className="ml-2 h-8"
                        />
                    </Link>
                    {/* Desktop Navigation */}
                    <nav className="hidden lg:block">
                        <NavigationMenu>
                            <NavigationMenuList className="flex-wrap">
                                {navigationItems.map((item, idx) =>
                                    !item.sub ? (
                                        <NavigationMenuButton
                                            key={idx}
                                            label={item.label}
                                            href={item.href}
                                            icon={item.icon}
                                        />
                                    ) : (
                                        <NavigationMenuDropdownButton
                                            key={idx}
                                            label={item.label}
                                            items={item.sub}
                                            icon={item.icon}
                                        />
                                    ),
                                )}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </nav>
                    <div className="hidden items-center lg:flex">
                        <Button
                            asChild
                            className="rounded-full bg-emerald-600 text-white shadow-md transition-all hover:scale-105 hover:bg-emerald-700 hover:shadow-lg"
                        >
                            <Link href="/kontak">
                                <Phone className="mr-2 h-4 w-4" />
                                Hubungi Kami
                            </Link>
                        </Button>
                    </div>
                    <div className="flex items-center justify-end gap-2 lg:hidden">
                        <Link href="/search" className="block lg:hidden">
                            <Button variant={'ghost'}>
                                <SearchIcon />
                            </Button>
                        </Link>
                        {/* <ModeToggle /> */}

                        {/* Mobile Hamburger */}
                        <Button
                            size={'icon'}
                            onClick={() => setMobileOpen(true)}
                            aria-label="Open menu"
                            variant={'outline'}
                        >
                            <MenuIcon />
                        </Button>
                    </div>
                </div>
            </div>
            {/* Mobile Navigation Drawer using Drawer component */}
            <Drawer
                open={mobileOpen}
                onOpenChange={setMobileOpen}
                direction="left"
            >
                <DrawerContent className="w-4/5 max-w-xs p-0">
                    <DrawerHeader className="flex flex-row items-center justify-between border-b px-4 py-3">
                        {/* <img src="/logo.png" alt="Logo" className="h-8" /> */}
                        <DrawerClose asChild>
                            <Button
                                variant={'destructive'}
                                aria-label="Close menu"
                            >
                                <CloseIcon />
                            </Button>
                        </DrawerClose>
                    </DrawerHeader>
                    <nav className="flex-1 overflow-y-auto py-2">
                        <MobileMenu
                            navigationItems={navigationItems}
                            onClose={() => setMobileOpen(false)}
                        />
                        <div className="mt-2 border-t px-4 py-4">
                            <Button
                                asChild
                                className="w-full rounded-full bg-emerald-600 text-white shadow-md transition-all hover:scale-[1.02] hover:bg-emerald-700"
                            >
                                <Link
                                    href="/kontak"
                                    onClick={() => setMobileOpen(false)}
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Hubungi Kami
                                </Link>
                            </Button>
                        </div>
                    </nav>
                </DrawerContent>
            </Drawer>
        </header>
    );
}

function NavigationMenuButton({
    label,
    href,
}: {
    label: string;
    href?: string;
    icon?: React.ReactNode;
}) {
    // Cek apakah menu ini aktif
    const isActive =
        typeof window !== 'undefined' && window.location.pathname === href;
    return (
        <NavigationMenuItem>
            <NavigationMenuLink
                asChild
                className={
                    navigationMenuTriggerStyle() +
                    (isActive
                        ? ' relative rounded-full border border-primary text-primary'
                        : ' rounded-full text-muted-foreground')
                }
            >
                <Link href={href || '#'} className="flex items-center gap-1">
                    {label}
                </Link>
            </NavigationMenuLink>
        </NavigationMenuItem>
    );
}

function NavigationMenuDropdownButton({
    label,
    items,
}: {
    label: string;
    items: NavItem[];
    icon?: React.ReactNode;
}) {
    const [open, setOpen] = useState(false);

    // Cek apakah salah satu submenu aktif
    const isAnyChildActive = (menuItems: NavItem[]): boolean =>
        menuItems.some((item) =>
            item.sub
                ? isAnyChildActive(item.sub)
                : typeof window !== 'undefined' &&
                  window.location.pathname === item.href,
        );

    const isActive = isAnyChildActive(items);

    // Helper to render submenus recursively
    const renderMenuItems = (menuItems: NavItem[]) =>
        menuItems.map((item, idx) => {
            if (item.sub) {
                return (
                    <DropdownMenuSub key={idx}>
                        <DropdownMenuSubTrigger className="flex items-center gap-1">
                            {item.icon}
                            {item.label}
                        </DropdownMenuSubTrigger>
                        <DropdownMenuSubContent className="w-max">
                            {renderMenuItems(item.sub)}
                        </DropdownMenuSubContent>
                    </DropdownMenuSub>
                );
            }
            return (
                <DropdownMenuItem key={idx} asChild>
                    <Link
                        href={item.href || '#'}
                        className="flex w-full items-center gap-2"
                    >
                        {item.icon}
                        {item.label}
                    </Link>
                </DropdownMenuItem>
            );
        });

    return (
        <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
            <DropdownMenuTrigger
                asChild
                onMouseEnter={() => setOpen(true)}
                className={
                    navigationMenuTriggerStyle() +
                    (isActive
                        ? ' relative rounded-full border border-primary text-primary'
                        : ' rounded-full text-muted-foreground')
                }
            >
                <Button
                    variant="ghost"
                    className={
                        'flex items-center justify-center gap-1 hover:bg-transparent ' +
                        (isActive ? 'text-primary' : 'text-muted-foreground')
                    }
                >
                    {label}
                    <ChevronDown className="h-4 w-4 opacity-50" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                onMouseLeave={() => setOpen(false)}
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="w-max"
            >
                {renderMenuItems(items)}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}

function MobileMenu({
    navigationItems,
    onClose,
}: {
    navigationItems: NavItem[];
    onClose: () => void;
}) {
    // Simpan semua key dropdown yang terbuka (support nested)
    const [openIndexes, setOpenIndexes] = useState<string[]>([]);

    // Toggle: buka hanya key ini dan parent-nya, tutup semua dropdown lain di level yang sama
    const toggleIndex = (key: string) => {
        setOpenIndexes((prev) => {
            // Jika sudah terbuka, tutup key ini dan semua child-nya
            if (prev.includes(key)) {
                return prev.filter((k) => k !== key && !k.startsWith(key));
            } else {
                // Tutup semua key yang satu level dengan key ini (kecuali parent chain)
                const keep = prev.filter(
                    (k) => key.startsWith(k) || k.startsWith(key),
                );
                return [...keep, key];
            }
        });
    };

    const renderMobileMenu = (items: NavItem[], parentIdx = '') =>
        items.map((item, idx) => {
            const key = `${parentIdx}${idx}`;
            const isOpen = openIndexes.includes(key);
            const isActive = !item.sub
                ? typeof window !== 'undefined' &&
                  window.location.pathname === item.href
                : item.sub &&
                  item.sub.some(
                      (sub: NavItem) =>
                          typeof window !== 'undefined' &&
                          window.location.pathname === sub.href,
                  );
            return (
                <div key={key}>
                    <div
                        className={
                            'flex items-center justify-between px-4 py-2' +
                            (isActive
                                ? ' font-semibold text-primary'
                                : ' text-muted-foreground')
                        }
                    >
                        {item.sub ? (
                            <>
                                <button
                                    className="flex flex-1 items-center gap-2 text-left"
                                    onClick={() => toggleIndex(key)}
                                >
                                    {item.icon}
                                    {item.label}
                                </button>
                                <button
                                    onClick={() => toggleIndex(key)}
                                    aria-label="Toggle submenu"
                                >
                                    <ChevronRight
                                        className={
                                            'transition-transform ' +
                                            (isOpen ? 'rotate-90' : '')
                                        }
                                    />
                                </button>
                            </>
                        ) : (
                            <Link
                                href={item.href || '#'}
                                className="flex flex-1 items-center gap-2"
                                onClick={onClose}
                            >
                                {item.icon}
                                {item.label}
                            </Link>
                        )}
                    </div>
                    {item.sub && isOpen && (
                        <div className="ml-2 border-l pl-4">
                            {renderMobileMenu(item.sub, key)}
                        </div>
                    )}
                </div>
            );
        });

    return <>{renderMobileMenu(navigationItems)}</>;
}
