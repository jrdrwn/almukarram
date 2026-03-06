import { Link } from '@inertiajs/react';
import { Mail } from 'lucide-react';

export function KontakHeader() {
    return (
        <section className="bg-primary/5 dark:bg-zinc-950/50 py-12 md:py-20 relative overflow-hidden mt-16 border-b border-border/50">
            <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
                <div className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-primary to-teal-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-288.75"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center justify-center p-3.5 bg-background rounded-2xl shadow-sm ring-1 ring-border mb-6 relative group hover:-translate-y-1 transition-all duration-300">
                        <div className="absolute inset-0 rounded-2xl bg-primary/20 blur-md group-hover:bg-primary/40 transition-all duration-500" />
                        <Mail className="w-8 h-8 text-primary relative z-10 group-hover:scale-110 group-hover:rotate-12 transition-transform duration-500" />
                    </div>

                    <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4">
                        Kontak Kami
                    </h1>

                    <nav aria-label="breadcrumb">
                        <ol className="flex items-center space-x-2 text-sm text-muted-foreground">
                            <li>
                                <Link href="/" className="hover:text-primary transition-colors">
                                    Beranda
                                </Link>
                            </li>
                            <li className="flex items-center space-x-2">
                                <span>/</span>
                                <span className="text-foreground font-medium">Kontak</span>
                            </li>
                        </ol>
                    </nav>
                </div>
            </div>
        </section>
    );
}
