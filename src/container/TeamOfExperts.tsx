import { useEffect, useRef, useState } from 'react';
import Agustinho from './../assets/Agustinho.jpeg';
import Fernada from './../assets/Fernanda.png';
import Giovanna from './../assets/Giovanna.jpg';
import Henrique from './../assets/Henrique.jpeg';
import Juliana from './../assets/Juliana.jpeg';
import Marcio from './../assets/Marcio.png';
import Mateus from './../assets/Mateus.jpeg';
import RodolfoMori from './../assets/Rodolfo-mori.jpeg';

interface TeamMember {
    id: number;
    nome: string;
    cargo: string;
    bio: string;
    dilema?: string;
    avatar: string;
    tipo: string;
}

const abacate: TeamMember[] = [
    { id: 1, nome: "Rodolfo Mori", cargo: "Fundador, Instrutor & Palestrante", bio: "Te ensina tudo sobre programação do zero com uma didática fora da curva.", dilema: "Dedinho no teclado, não existe almoço grátis!.", avatar: RodolfoMori, tipo: "Instrutor" },
    { id: 2, nome: "Fernanda Costa", cargo: "Mentora de Carreira", bio: "Ex-comissaria de bordo que transformou sua paixão por viagens em expertise em carreira.", dilema: "Não sair copiando tudo da IA, precisa ser original.", avatar: Fernada, tipo: "Mentora" },
    { id: 3, nome: "Agustinho Neto", cargo: "Professor & Dev", bio: "Uns dos pioneiros do DevClub, sabe tudo sobre programação.", avatar: Agustinho, tipo: "Desenvolvedor" },
    { id: 4, nome: "Henrique Francisco", cargo: "Professor & Dev", bio: "Ex-aluno do DevClub que virou profressor, mestre em explicar lógica.", avatar: Henrique, tipo: "Desenvolvedor" },
    { id: 5, nome: "Marcio Conceição", cargo: "Mentor de Empresários & Líderes", bio: "Especialista em liderança e empreendedorismo, Te guiar na jornada de sonhos e metas para sair do Papel.", avatar: Marcio, tipo: "Mentor" },
    { id: 6, nome: "Juliana Nunes", cargo: "Mentora de Carreira", bio: "Especialista em orientação de carreira e desenvolvimento profissional.", avatar: Juliana, tipo: "Mentora" },
    { id: 7, nome: "Mateus Nogueira", cargo: "Especialista em IA", bio: "Especialista na criação de agentes inteligentes e automoções, baseados em LLMs.", avatar: Mateus, tipo: "Especialista" },
    { id: 8, nome: "Giovanna", cargo: "Agente de Ia ", bio: "Criada por Rodolfo Mori, a inteligência artificial do DevClub.", avatar: Giovanna, tipo: "Ia" }
];

export function TeamOfExperts() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const touchStartX = useRef<number>(0);
    const touchEndX = useRef<number>(0);

    // Avança automaticamente a cada 10 segundos
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % abacate.length);
        }, 10000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % abacate.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + abacate.length) % abacate.length);
    };

    // Lógica para detectar o gesto de arrastar (Swipe / Touch)
    const handleTouchStart = (e: React.TouchEvent | React.MouseEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        touchStartX.current = clientX;
    };

    const handleTouchMove = (e: React.TouchEvent | React.MouseEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        touchEndX.current = clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (distance > minSwipeDistance) {
            nextSlide();
        } else if (distance < -minSwipeDistance) {
            prevSlide();
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    const getVisibleMembers = () => {
        const items = [];
        for (let i = -2; i <= 2; i++) {
            const index = (currentIndex + i + abacate.length) % abacate.length;
            items.push({ ...abacate[index], position: i });
        }
        return items;
    };

    return (
        <section id='Especialistas' className="bg-gray-900/30 py-20 px-4 text-white overflow-hidden">
            <div className="max-w-7xl mx-auto text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
                    <span className="text-emerald-400"> Quem vai guiar a sua jornada?</span>
                </h2>
                <p className="text-slate-400 mt-3 text-sm md:text-base max-w-2xl mx-auto">
                    Um time de especialistas pronto para te ajudar a alcançar suas metas, assim como já fez com mais de 25 mil alunos no mercado.
                </p>
            </div>

            <div
                className="relative max-w-6xl mx-auto flex justify-center items-center min-h-[480px] select-none cursor-grab active:cursor-grabbing"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                onMouseDown={handleTouchStart}
                onMouseMove={handleTouchMove}
                onMouseUp={handleTouchEnd}
            >
                {/* Botão Anterior */}
                <button
                    type='button'
                    onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                    className="absolute left-2 md:left-4 z-30 bg-slate-900/80 hover:bg-emerald-500 hover:text-slate-950 text-white p-3 rounded-full border border-slate-700 transition-all shadow-lg"
                    aria-label="Anterior"
                >
                    ❮
                </button>

                <div className="flex items-center justify-center gap-4 w-full overflow-hidden py-4 pointer-events-none">
                    {getVisibleMembers().map((membro) => {
                        const isCenter = membro.position === 0;

                        return (
                            <div
                                key={`${membro.id}-${membro.position}`}
                                onClick={() => setCurrentIndex((currentIndex + membro.position + abacate.length) % abacate.length)}
                                className={`relative rounded-3xl overflow-hidden transition-all duration-700 ease-in-out border flex flex-col justify-end shadow-2xl cursor-pointer pointer-events-auto flex-shrink-0 ${isCenter
                                    ? "w-[280px] md:w-80 h-[460px] border-emerald-500/80 shadow-emerald-500/20 scale-100 md:scale-105 z-20 ring-2 ring-emerald-500/40 opacity-100"
                                    : "hidden md:flex w-52 h-[380px] border-slate-800/80 opacity-50 scale-95 filter brightness-75 hover:opacity-90 z-10"
                                    }`}
                            >
                                <div className="absolute inset-0 w-full h-full">
                                    <img src={membro.avatar} alt={membro.nome} className="w-full h-full object-cover object-top pointer-events-none" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
                                </div>

                                {isCenter && (
                                    <span className="absolute top-4 right-4 text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-emerald-400 border border-emerald-500/30 z-10 shadow-lg">
                                        {membro.tipo}
                                    </span>
                                )}

                                <div className="relative z-10 p-6 flex flex-col text-left">
                                    <h3 className={`font-bold text-white leading-tight ${isCenter ? "text-2xl mb-1" : "text-lg mb-0.5 truncate"}`}>
                                        {membro.nome}
                                    </h3>
                                    <p className={`font-medium text-emerald-400 ${isCenter ? "text-xs mb-3" : "text-[11px] truncate"}`}>
                                        {membro.cargo}
                                    </p>

                                    {isCenter && (
                                        <div className="animate-fadeIn pt-2 border-t border-slate-800/80 mt-1">
                                            <p className="text-xs text-slate-300 mb-3 leading-relaxed">
                                                {membro.bio}
                                            </p>
                                            {membro.dilema && (
                                                <div>
                                                    <span className="text-[9px] text-slate-400 block uppercase tracking-wider font-semibold">Dilema do Abacate:</span>
                                                    <p className="text-[10px] text-emerald-300/90 italic mt-0.5">"{membro.dilema}"</p>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                    type='button'
                    onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                    className="absolute right-2 md:right-4 z-30 bg-slate-900/80 hover:bg-emerald-500 hover:text-slate-950 text-white p-3 rounded-full border border-slate-700 transition-all shadow-lg"
                    aria-label="Próximo"
                >
                    ❯
                </button>
            </div>
        </section>
    );
}