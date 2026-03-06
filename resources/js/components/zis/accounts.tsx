import {
    Check,
    Copy,
    Cpu,
    CreditCard,
    Landmark,
    Send,
    ShieldCheck,
} from 'lucide-react';
import { useState } from 'react';

export function Accounts() {
    const accounts = [
        {
            bank: 'Bank Kalteng',
            norek: 'xxx',
            atas: 'BPMA Al-Mukarram Amanah',
            delay: '0s',
            color: 'emerald',
        },
        {
            bank: 'Bank Syariah Indonesia',
            norek: 'xxx',
            atas: 'BPMA Al-Mukarram Amanah',
            delay: '0.1s',
            color: 'teal',
        },
        {
            bank: 'Bank BRI',
            norek: 'xxx',
            atas: 'BPMA Al-Mukarram Amanah',
            delay: '0.2s',
            color: 'blue',
        },
    ];

    return (
        <section className="relative overflow-hidden bg-slate-50 py-24">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.15]"></div>

            <div className="absolute right-0 bottom-0 -z-10 h-150 w-150 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-100/50 blur-[120px]" />

            <div className="relative z-10 mx-auto max-w-380 px-4 sm:px-6 lg:px-8">
                <div className="reveal fade-up mb-16 text-center">
                    <div className="mb-4 inline-flex items-center justify-center rounded-2xl bg-emerald-100 p-3 text-emerald-600">
                        <Landmark className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Rekening Donasi Masjid
                    </h2>
                    <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
                        Salurkan donasi terbaik Anda melalui rekening resmi
                        Masjid Agung Al-Mukarram Amanah di bawah ini:
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {accounts.map((account, index) => (
                        <AccountCard key={index} account={account} />
                    ))}
                </div>

                <div className="reveal fade-up mt-20">
                    <div className="group relative overflow-hidden rounded-[2.5rem] bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600 p-10 text-center shadow-2xl shadow-emerald-900/20 md:p-16">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 -mt-16 -mr-16 h-96 w-96 rounded-full bg-white/10 blur-3xl transition-all duration-700 group-hover:bg-white/20"></div>
                        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 h-80 w-80 rounded-full bg-teal-900/20 blur-3xl transition-all duration-700 group-hover:bg-teal-900/30"></div>
                        <div className="absolute inset-0 bg-[url('/images/pattern-islamic.png')] opacity-10 mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 text-white ring-1 ring-white/20 backdrop-blur-md">
                                <Send className="h-8 w-8" />
                            </div>
                            <h3 className="mb-6 text-3xl font-extrabold text-white">
                                Konfirmasi Donasi
                            </h3>
                            <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed font-light text-emerald-50 opacity-90 md:text-xl">
                                Setelah transfer, mohon konfirmasi melalui
                                WhatsApp atau hubungi kami agar donasi Anda
                                tercatat dengan baik dan transparan.
                            </p>
                            <a
                                href="/kontak"
                                className="inline-flex items-center justify-center rounded-full bg-white px-10 py-4 text-lg font-bold text-emerald-700 shadow-xl ring-4 shadow-black/10 ring-white/20 transition-all duration-300 hover:scale-105 hover:bg-slate-50 hover:ring-white/40"
                            >
                                Hubungi Kami Sekarang
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function AccountCard({ account }: { account: any }) {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(account.norek);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div
            className="reveal fade-up group relative overflow-hidden rounded-4xl border border-slate-100 bg-white p-8 shadow-sm transition-all duration-500 hover:border-emerald-200 hover:shadow-xl"
            style={{ transitionDelay: account.delay }}
        >
            {/* Background Decorations */}
            <div className="pointer-events-none absolute top-0 right-0 p-6 opacity-[0.03] transition-transform duration-700 group-hover:scale-110 group-hover:-rotate-12">
                <CreditCard className="h-40 w-40 text-slate-900" />
            </div>

            {/* Bank Header */}
            <div className="relative z-10 mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div
                        className={`h-3 w-3 rounded-full bg-${account.color}-500 shadow-lg shadow-${account.color}-500/50 animate-pulse`}
                    ></div>
                    <div className="text-lg font-extrabold text-slate-800">
                        {account.bank}
                    </div>
                </div>
                <Cpu className="h-8 w-8 text-yellow-500/80 drop-shadow-sm" />
            </div>

            {/* Account Number Area */}
            <div className="relative z-10 mb-8 rounded-2xl border border-slate-100/80 bg-slate-50 p-6 shadow-inner transition-all duration-500 group-hover:bg-white group-hover:shadow-emerald-500/5">
                <div className="mb-3 flex items-center justify-between text-xs font-bold tracking-widest text-slate-400 uppercase">
                    Nomor Rekening
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="font-mono text-3xl font-black tracking-[0.2em] text-slate-700 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent">
                    {account.norek}
                </div>
            </div>

            {/* Avatar & Name */}
            <div className="relative z-10 mb-8 flex items-center px-2">
                <div className="relative">
                    <img
                        src={`https://ui-avatars.com/api/?name=${account.atas}&background=10b981&color=fff&rounded=true&bold=true`}
                        alt="Avatar"
                        className="mr-4 h-12 w-12 rounded-full ring-4 ring-emerald-50"
                    />
                    <div className="absolute -right-1 -bottom-1 flex h-4 w-4 items-center justify-center rounded-full bg-white">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div>
                    <div className="mb-1 text-xs font-bold tracking-wider text-slate-400 uppercase">
                        Atas Nama
                    </div>
                    <div className="text-sm font-extrabold text-slate-700">
                        {account.atas}
                    </div>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={handleCopy}
                className={`relative z-10 inline-flex w-full items-center justify-center overflow-hidden rounded-2xl px-6 py-4 text-sm font-bold transition-all duration-300 active:scale-95 ${
                    copied
                        ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                        : 'bg-slate-50 text-slate-700 shadow-sm ring-1 ring-slate-200 ring-inset hover:bg-emerald-50 hover:text-emerald-700 hover:ring-emerald-200'
                }`}
            >
                {copied ? (
                    <span className="flex animate-[bounce_0.5s_ease-in-out] items-center">
                        <Check className="mr-2 h-5 w-5" /> BERHASIL DISALIN
                    </span>
                ) : (
                    <span className="flex items-center">
                        <Copy className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" />{' '}
                        SALIN NOMOR REKENING
                    </span>
                )}
            </button>
        </div>
    );
}
