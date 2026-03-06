import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { AlertCircle, CheckCircle2, Send } from 'lucide-react';
import { useState } from 'react';

export function KontakForm() {
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const [formData, setFormData] = useState({
        nama: '',
        email: '',
        telepon: '',
        subjek: '',
        pesan: '',
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSelectChange = (value: string) => {
        setFormData((prev) => ({ ...prev, subjek: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Simulating the PHP validation logic
        if (formData.nama && formData.email && formData.pesan) {
            setStatus('success');
            setFormData({
                nama: '',
                email: '',
                telepon: '',
                subjek: '',
                pesan: '',
            });
        } else {
            setStatus('error');
            setErrorMessage('Mohon lengkapi semua field yang wajib diisi.');
        }
    };

    return (
        <div className="relative animate-in py-2 delay-150 duration-700 fade-in slide-in-from-bottom-12 sm:py-4">
            <div className="relative flex flex-col">
                <h3 className="mb-8 text-2xl font-extrabold text-foreground">
                    Kirim Pesan
                </h3>

                {/* Notifications */}
                {status === 'success' && (
                    <div className="mb-6 flex items-start space-x-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />
                        <p className="text-sm font-medium text-emerald-800 dark:text-emerald-400">
                            Terima kasih! Pesan Anda telah berhasil dikirim.
                            Kami akan segera menghubungi Anda.
                        </p>
                    </div>
                )}

                {status === 'error' && (
                    <div className="mb-6 flex items-start space-x-3 rounded-xl border border-red-200 bg-red-50 p-4">
                        <AlertCircle className="mt-0.5 h-5 w-5 text-red-600" />
                        <p className="text-sm font-medium text-red-800 dark:text-red-400">
                            {errorMessage}
                        </p>
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col space-y-6"
                >
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                        {/* Nama Lengkap */}
                        <div className="space-y-3">
                            <Label htmlFor="nama" className="text-sm font-bold">
                                Nama Lengkap{' '}
                                <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="nama"
                                type="text"
                                name="nama"
                                required
                                value={formData.nama}
                                onChange={handleChange}
                                placeholder="Nama Anda"
                                className="h-12 rounded-xl border-input/60 px-4 focus-visible:ring-emerald-500"
                            />
                        </div>

                        {/* Email */}
                        <div className="space-y-3">
                            <Label
                                htmlFor="email"
                                className="text-sm font-bold"
                            >
                                Email <span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id="email"
                                type="email"
                                name="email"
                                required
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="email@contoh.com"
                                className="h-12 rounded-xl border-input/60 px-4 focus-visible:ring-emerald-500"
                            />
                        </div>

                        {/* No. Telepon */}
                        <div className="space-y-3">
                            <Label
                                htmlFor="telepon"
                                className="text-sm font-bold"
                            >
                                No. Telepon
                            </Label>
                            <Input
                                id="telepon"
                                type="tel"
                                name="telepon"
                                value={formData.telepon}
                                onChange={handleChange}
                                placeholder="08xx-xxxx-xxxx"
                                className="h-12 rounded-xl border-input/60 px-4 focus-visible:ring-emerald-500"
                            />
                        </div>

                        {/* Subjek */}
                        <div className="space-y-3">
                            <Label
                                htmlFor="subjek"
                                className="text-sm font-bold"
                            >
                                Subjek
                            </Label>
                            <Select
                                value={formData.subjek}
                                onValueChange={handleSelectChange}
                            >
                                <SelectTrigger className="h-12! w-full rounded-xl border-input/60 bg-background px-4 focus:ring-emerald-500">
                                    <SelectValue placeholder="-- Pilih Subjek --" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Informasi Umum">
                                        Informasi Umum
                                    </SelectItem>
                                    <SelectItem value="Kegiatan Masjid">
                                        Kegiatan Masjid
                                    </SelectItem>
                                    <SelectItem value="Donasi & Zakat">
                                        Donasi & Zakat
                                    </SelectItem>
                                    <SelectItem value="Pendidikan">
                                        Pendidikan / TPQ
                                    </SelectItem>
                                    <SelectItem value="Sewa Tempat">
                                        Sewa Fasilitas
                                    </SelectItem>
                                    <SelectItem value="Lainnya">
                                        Lainnya
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    {/* Pesan */}
                    <div className="space-y-3">
                        <Label htmlFor="pesan" className="text-sm font-bold">
                            Pesan <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="pesan"
                            name="pesan"
                            required
                            value={formData.pesan}
                            onChange={handleChange}
                            placeholder="Tulis pesan Anda di sini..."
                            className="min-h-35 resize-none rounded-xl border-input/60 p-4 focus-visible:ring-emerald-500"
                        />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                        <Button
                            type="submit"
                            size="lg"
                            className="group h-14 w-full rounded-xl bg-[#009B65] text-base font-bold text-white shadow-md transition-all hover:-translate-y-0.5 hover:bg-[#008959] hover:shadow-lg"
                        >
                            <span>Kirim Pesan</span>
                            <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
}
