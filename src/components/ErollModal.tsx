import { useState } from 'react';
import { ImCancelCircle } from 'react-icons/im';

interface EnrollModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function EnrollModal({ isOpen, onClose }: EnrollModalProps) {
    const [name, setName] = useState('');
    const [phone, telefone] = useState('');

    if (!isOpen) return null;

    const handleWhatsAppSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const phoneNumber = "5511987981107";

        const message = encodeURIComponent(
            `Olá! Meu nome é ${name}, acabei de ver o site do DevClub e quero garantir minha vaga ou saber mais sobre a formação!`
        );


        window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
            <div className="relative w-full max-w-md bg-slate-900 border border-emerald-500/30 p-8 rounded-3xl shadow-2xl text-white">

                <button
                    type='button'
                    onClick={onClose}
                    className="absolute top-5 right-5 text-slate-400 hover:text-emerald-400 font-mono text-xs transition-colors"
                >
                    <ImCancelCircle size={20} className='text-red-700 hover:text-red-400' />
                </button>

                <div className="text-center mb-6">
                    <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 uppercase tracking-widest">
                        Vagas Abertas 🚀
                    </span>
                    <h3 className="text-2xl font-black mt-3">Garante sua <span className="text-emerald-400">Vaga</span></h3>
                    <p className="text-xs text-slate-400 mt-1">
                        Preencha rapidinho para falar direto com nossa equipe no WhatsApp.
                    </p>
                </div>

                <form onSubmit={handleWhatsAppSubmit} className="space-y-4">
                    <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1 uppercase tracking-wider">Seu Nome</label>
                        <input
                            type="text"
                            required
                            placeholder="Ex: Tiago Oliveira"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors"
                        />
                    </div>

                    <div>
                        <label className="block text-[11px] font-semibold text-slate-300 mb-1 uppercase tracking-wider">Seu WhatsApp</label>
                        <input
                            type="tel"
                            required
                            placeholder="(11) 99999-9999"
                            value={phone}
                            onChange={(e) => telefone(e.target.value)}
                            className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-4 py-3 text-xs text-white placeholder-slate-600 outline-none transition-colors"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full mt-2 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black text-xs rounded-xl shadow-[0_0_20px_rgba(16,185,129,0.3)] tracking-widest uppercase transition-transform hover:scale-[1.02] active:scale-[0.98]"
                    >
                        Chamar no WhatsApp ➔
                    </button>
                </form>

                <p className="text-[10px] text-slate-500 text-center mt-4">
                    Não existe almoço grátis: dê o primeiro passo rumo à sua carreira tech. 🥑
                </p>
            </div>
        </div>
    );
}