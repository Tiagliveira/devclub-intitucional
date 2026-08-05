import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../components/Button';

interface Company {
    name: string;
    logoText: string;
}

const COMPANIES: Company[] = [
    { name: 'iFood', logoText: 'iFood' },
    { name: 'Meta (Facebook)', logoText: 'META' },
    { name: 'Google', logoText: 'GOOGLE' },
    { name: 'Nubank', logoText: 'NUBANK' },
    { name: 'Mercado Livre', logoText: 'MERCADO LIVRE' },
    { name: 'Microsoft', logoText: 'MICROSOFT' },
    { name: 'Amazon', logoText: 'AMAZON' },
    { name: 'XP Inc.', logoText: 'XP INC.' },
    { name: 'Stone', logoText: 'STONE' },
];

const logoMatrix = [
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    [0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1],
];

export const About = ({ onOpenModal }: { onOpenModal: () => void }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 800);
    };

    return (
        <section
            ref={sectionRef}
            className="relative bg-[#090A0F] text-white py-8 px-6 md:px-12 overflow-hidden border-t border-b border-emerald-500/20 min-h-screen flex flex-col justify-center"
        >
            {/* Background Glows */}
            <div className="absolute top-1/4 left-10 w-72 h-72 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full">
                {/* Main Grid: Left Logo, Right Text + Stats */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

                    {/* Lado Esquerdo: Logo em Matriz */}
                    <div className="lg:col-span-5 flex flex-col items-center justify-center">
                        <div
                            onClick={handleDotClick}
                            className={`relative p-5 rounded-2xl bg-[#0e111a]/80 border border-emerald-500/35 backdrop-blur-xl shadow-[0_0_30px_rgba(16,185,129,0.12)] transition-all duration-1000 transform overflow-hidden cursor-pointer ${isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-12'
                                }`}
                        >
                            {ripples.map((ripple) => (
                                <span
                                    key={ripple.id}
                                    className="absolute rounded-full bg-emerald-400/40 pointer-events-none animate-ping"
                                    style={{
                                        left: ripple.x - 20,
                                        top: ripple.y - 20,
                                        width: '40px',
                                        height: '40px',
                                        animationDuration: '700ms',
                                    }}
                                />
                            ))}

                            <div className="group grid grid-cols-26 gap-1 p-1">
                                {logoMatrix.map((row, rowIndex) =>
                                    row.map((cell, colIndex) => {
                                        const isPointActive = cell === 1;
                                        return (
                                            <div
                                                key={`${rowIndex}-${colIndex}`}
                                                className={`w-1.5 h-1.5 rounded-full transition-all duration-500 transform ${isPointActive
                                                    ? 'bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)] group-hover:bg-emerald-300 group-hover:scale-125'
                                                    : 'bg-slate-800/60 group-hover:bg-purple-950/50 group-hover:shadow-[0_0_6px_rgba(168,85,247,0.6)]'
                                                    }`}
                                                style={{
                                                    transitionDelay: `${(rowIndex * 26 + colIndex) * 1.5}ms`
                                                }}
                                            />
                                        );
                                    })
                                )}
                            </div>

                            <div className="mt-2 text-center">
                                <span className="text-[9px] uppercase tracking-[0.25em] text-emerald-500 font-mono">
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-4">
                        <div className="space-y-2">

                            <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight leading-tight">
                                Tudo o que construímos existe por conta <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-900">de você.</span>
                            </h2>

                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                                O DevClub não é apenas código ou ferramentas. O nosso ecossistema só faz sentido porque você decide evoluir. Cada bug superado e cada projeto constroem nossa história.
                            </p>
                            <p className="text-slate-300 text-xs md:text-sm leading-relaxed">
                                Independente do seu nivel atual, o DevClub foi criado para quem quer entrar, crescer ou se consolidar no mercado de tecnologia.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 border-t border-slate-800/80">
                            <div className="bg-slate-900/40 border border-slate-800/80 p-3 rounded-xl">
                                <h4 className="text-xl md:text-2xl font-black font-mono text-emerald-400 tracking-tight">10k+</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">Alunos formados</p>
                            </div>
                            <div className="bg-slate-900/40 border border-slate-800/80 p-3 rounded-xl">
                                <h4 className="text-xl md:text-2xl font-black font-mono text-emerald-400 tracking-tight">95%</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">Empregabilidade</p>
                            </div>
                            <div className="bg-slate-900/40 border border-slate-800/80 p-3 rounded-xl">
                                <h4 className="text-xl md:text-2xl font-black font-mono text-emerald-400 tracking-tight">4.9/5</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">Avaliação pelo MEC</p>
                            </div>
                            <div className="bg-slate-900/40 border border-slate-800/80 p-3 rounded-xl">
                                <h4 className="text-xl md:text-2xl font-black font-mono text-emerald-400 tracking-tight">+15k</h4>
                                <p className="text-[11px] text-slate-400 mt-0.5">Vidas transformadas</p>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="mt-8 border-t border-slate-800/80 pt-4">
                    <p className="text-center text-[10px] uppercase tracking-[0.25em] text-slate-500 mb-2 font-mono">
                        Alunos do DevClub em grandes Empresas
                    </p>

                    <div className="relative w-full overflow-hidden mask-gradient">
                        <div className="flex space-x-6 animate-company-marquee whitespace-nowrap py-1">
                            {[...COMPANIES, ...COMPANIES].map((company, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-center px-5 py-2 rounded-lg bg-slate-900/60 border border-slate-800 hover:border-emerald-500/50 transition-all duration-300 group cursor-pointer"
                                >
                                    <span className="text-sm font-bold font-mono tracking-wider text-slate-400 group-hover:text-emerald-400 transition-colors">
                                        {company.logoText}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-10 flex flex-col gap-4 justify-center align-center">
                    <p className="text-gray-500 text-sm">
                        Preencha nosso formulário. Nosso time de especialistas avalia seu perfil e entra em contato.
                    </p>
                    <Button onClick={onOpenModal} className="bg-[#00df89] text-[#05050a] max-w-max font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(0,223,137,0.3)] hover:bg-[#00c576] transition-all hover:-translate-y-0.5 flex justify-center">
                        Quero Fazer Parte →
                    </Button>

                </div>

            </div>
        </section>
    );
};