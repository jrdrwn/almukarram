import { Check, Copy, Cpu, CreditCard, Landmark, Send, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export function Accounts() {
    const accounts = [
        { bank: 'Bank Kalteng', norek: 'xxx', atas: 'BPMA Al-Mukarram Amanah', delay: '0s', color: 'emerald' },
        { bank: 'Bank Syariah Indonesia', norek: 'xxx', atas: 'BPMA Al-Mukarram Amanah', delay: '0.1s', color: 'teal' },
        { bank: 'Bank BRI', norek: 'xxx', atas: 'BPMA Al-Mukarram Amanah', delay: '0.2s', color: 'blue' },
    ];

    return (
        <section className="py-24 relative overflow-hidden bg-slate-50">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] bg-size-[24px_24px] opacity-[0.15]"></div>

            <div className="absolute right-0 bottom-0 -z-10 h-150 w-150 translate-x-1/3 translate-y-1/3 rounded-full bg-emerald-100/50 blur-[120px]" />

            <div className="mx-auto max-w-380 px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="mb-16 text-center reveal fade-up">
                    <div className="inline-flex items-center justify-center p-3 mb-4 rounded-2xl bg-emerald-100 text-emerald-600">
                        <Landmark className="h-8 w-8" />
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
                        Rekening Donasi Masjid
                    </h2>
                    <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
                        Salurkan donasi terbaik Anda melalui rekening resmi Masjid Agung Al-Mukarram Amanah di bawah ini:
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {accounts.map((account, index) => (
                        <AccountCard key={index} account={account} />
                    ))}
                </div>

                <div className="mt-20 reveal fade-up">
                    <div className="overflow-hidden rounded-[2.5rem] bg-linear-to-br from-emerald-600 via-emerald-500 to-teal-600 shadow-2xl shadow-emerald-900/20 p-10 md:p-16 text-center relative group">
                        {/* Decorative Background Elements */}
                        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-96 h-96 rounded-full bg-white/10 blur-3xl group-hover:bg-white/20 transition-all duration-700"></div>
                        <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-80 h-80 rounded-full bg-teal-900/20 blur-3xl group-hover:bg-teal-900/30 transition-all duration-700"></div>
                        <div className="absolute inset-0 bg-[url('/images/pattern-islamic.png')] opacity-10 mix-blend-overlay"></div>

                        <div className="relative z-10">
                            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md mb-6 ring-1 ring-white/20 text-white">
                                <Send className="h-8 w-8" />
                            </div>
                            <h3 className="text-3xl font-extrabold text-white mb-6">Konfirmasi Donasi</h3>
                            <p className="text-emerald-50 text-lg md:text-xl mb-10 max-w-2xl mx-auto opacity-90 leading-relaxed font-light">
                                Setelah transfer, mohon konfirmasi melalui WhatsApp atau hubungi kami agar donasi Anda tercatat dengan baik dan transparan.
                            </p>
                            <a
                                href="/kontak"
                                className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-emerald-700 bg-white rounded-full hover:bg-slate-50 hover:scale-105 transition-all duration-300 shadow-xl shadow-black/10 ring-4 ring-white/20 hover:ring-white/40"
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
        <div className="reveal fade-up p-8 bg-white rounded-4xl shadow-sm border border-slate-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-500 relative group overflow-hidden" style={{ transitionDelay: account.delay }}>
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700 pointer-events-none">
                <CreditCard className="h-40 w-40 text-slate-900" />
            </div>

            {/* Bank Header */}
            <div className="flex items-center justify-between mb-8 relative z-10">
                <div className="flex items-center gap-3">
                    <div className={`h-3 w-3 rounded-full bg-${account.color}-500 shadow-lg shadow-${account.color}-500/50 animate-pulse`}></div>
                    <div className="text-lg font-extrabold text-slate-800">{account.bank}</div>
                </div>
                <Cpu className="h-8 w-8 text-yellow-500/80 drop-shadow-sm" />
            </div>

            {/* Account Number Area */}
            <div className="mb-8 relative z-10 bg-slate-50 p-6 rounded-2xl border border-slate-100/80 shadow-inner group-hover:bg-white group-hover:shadow-emerald-500/5 transition-all duration-500">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center justify-between">
                    Nomor Rekening
                    <ShieldCheck className="h-4 w-4 text-emerald-500" />
                </div>
                <div className="text-3xl font-mono font-black text-slate-700 tracking-[0.2em] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-linear-to-r group-hover:from-emerald-600 group-hover:to-teal-600 transition-all duration-300">
                    {account.norek}
                </div>
            </div>

            {/* Avatar & Name */}
            <div className="flex items-center mb-8 relative z-10 px-2">
                <div className="relative">
                    <img src={`https://ui-avatars.com/api/?name=${account.atas}&background=10b981&color=fff&rounded=true&bold=true`} alt="Avatar" className="w-12 h-12 rounded-full mr-4 ring-4 ring-emerald-50" />
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-white flex items-center justify-center">
                        <div className="h-2.5 w-2.5 rounded-full bg-green-500"></div>
                    </div>
                </div>
                <div>
                    <div className="text-xs text-slate-400 font-bold uppercase tracking-wider mb-1">Atas Nama</div>
                    <div className="text-sm font-extrabold text-slate-700">{account.atas}</div>
                </div>
            </div>

            {/* Button */}
            <button
                onClick={handleCopy}
                className={`relative z-10 inline-flex items-center justify-center px-6 py-4 text-sm font-bold rounded-2xl w-full transition-all duration-300 overflow-hidden active:scale-95 ${
                    copied
                    ? 'bg-linear-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/30'
                    : 'bg-slate-50 text-slate-700 hover:bg-emerald-50 hover:text-emerald-700 ring-1 ring-inset ring-slate-200 hover:ring-emerald-200 shadow-sm'
                }`}
            >
                {copied ? (
                    <span className="flex items-center animate-[bounce_0.5s_ease-in-out]">
                        <Check className="mr-2 h-5 w-5" /> BERHASIL DISALIN
                    </span>
                ) : (
                    <span className="flex items-center">
                        <Copy className="mr-2 h-5 w-5 transition-transform group-hover:scale-110" /> SALIN NOMOR REKENING
                    </span>
                )}
            </button>
        </div>
    );
}
