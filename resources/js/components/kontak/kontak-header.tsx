import { Link } from '@inertiajs/react';
import { Mail } from 'lucide-react';

export function KontakHeader() {
    return (
        <section className="relative mt-16 overflow-hidden border-b border-border/50 bg-primary/5 py-12 md:py-20 dark:bg-zinc-950/50">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center">
                    <div className="group relative mb-6 inline-flex items-center justify-center rounded-2xl bg-background p-3.5 shadow-sm ring-1 ring-border transition-all duration-300 hover:-translate-y-1 active:-translate-y-1">
                        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md transition-all duration-500 group-hover:bg-primary/40 group-active:bg-primary/40" />
                        <Mail className="relative z-10 h-8 w-8 text-primary transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 group-active:scale-110 group-active:rotate-12" />
                    </div>

                    <h1 className="mb-4 text-3xl font-extrabold tracking-tight text-foreground md:text-5xl">
                        Kontak Kami
                    </h1>

                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <li>
                                <Link
                                    href="/"
                                    className="transition-colors hover:text-primary active:text-primary"
                                >
                                    Beranda
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span>/</span>
                                <span className="font-medium text-foreground">
                                    Kontak
                                </span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
}
