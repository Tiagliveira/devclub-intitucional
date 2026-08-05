import { AnimatePresence, motion } from 'framer-motion';
import { ScrollProvider, useScrollSteps } from '../context/ScrollContext';
import StudentMap from './StudentMap';

const pilares = [
    { icon: "🚀", titulo: "Excelência no ensino", desc: "Foco em oferecer uma formação prática e atualizada." },
    { icon: "💡", titulo: "Inovação constante", desc: "Evolução contínua do método e tecnologias." },
    { icon: "🤝", titulo: "Comunidade ativa", desc: "Alunos e mentores crescendo juntos." },
    { icon: "🔎", titulo: "Transparência", desc: "Comunicação clara sobre nossa metodologia." },
    { icon: "🎯", titulo: "Foco no Sucesso", desc: "Preparação real para o mercado de trabalho." },
    { icon: "⚡", titulo: "Suporte Ágil", desc: "Acompanhamento diário para tirar dúvidas." }
];

function SectionContent({ onOpenModal }: { onOpenModal: () => void }) {
    const { visibleCount, sectionRef } = useScrollSteps();

    const currentScale = 0.4 + (visibleCount * 0.1);

    return (
        <section
            id="Depoimentos"
            ref={sectionRef}
            className="relative w-full min-h-screen bg-slate-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(34,197,94,0.15),rgba(255,255,255,0))] text-white flex flex-col items-center justify-between overflow-hidden py-8 md:py-16 select-none"
        >
            <div className="w-full max-w-7xl mx-auto px-4 md:px-6 flex flex-col justify-between items-center h-full min-h-[85vh]">

                <div className="text-center w-full z-30 mb-2">
                    <h2 className="text-2xl md:text-4xl font-black bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                        Aqui temos alguns Depoimentos de <span className="text-green-500 drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]">Alunos</span>
                    </h2>
                </div>

                <div className="relative w-full flex-1 flex flex-col md:flex-row items-center justify-center z-20 mt-4 gap-6 md:gap-0">

                    <div
                        className="relative md:absolute inset-0 flex items-center justify-center z-10 pointer-events-auto transition-transform duration-500 ease-out"
                        style={{ transform: window.innerWidth >= 768 ? `scale(${currentScale})` : 'none' }}
                    >
                        <StudentMap visibleCount={visibleCount} />
                    </div>

                    <div className="w-full h-full flex flex-col md:grid md:grid-cols-2 gap-4 items-center justify-between pointer-events-none z-20">

                        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center md:items-start w-full md:pl-8">
                            <AnimatePresence mode="popLayout">
                                {pilares.map((pilar, index) => {
                                    if (index % 2 !== 0) return null;
                                    return index < visibleCount && (
                                        <CardRevealItem key={index} pilar={pilar} side="left" />
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        <div className="flex flex-col gap-3 md:gap-4 justify-center items-center md:items-end w-full md:pr-8">
                            <AnimatePresence mode="popLayout">
                                {pilares.map((pilar, index) => {
                                    if (index % 2 === 0) return null;
                                    return index < visibleCount && (
                                        <CardRevealItem key={index} pilar={pilar} side="right" />
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                    </div>
                </div>

                <div className="w-full max-w-sm mx-auto text-center mt-6 h-12 z-30">
                    <AnimatePresence>
                        {visibleCount === pilares.length && (
                            <motion.button
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 15 }}
                                onClick={onOpenModal}
                                className="w-full px-6 py-3 bg-green-500 hover:bg-green-400 text-slate-950 font-black text-xs rounded-xl shadow-[0_0_20px_rgba(34,197,94,0.4)] tracking-widest uppercase pointer-events-auto transition-transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Quero ser Aluno ➔
                            </motion.button>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </section>
    );
}

export default function Depoiments() {
    return (
        <ScrollProvider maxSteps={pilares.length}>
            <SectionContent onOpenModal={() => { }} />
        </ScrollProvider>
    );
}

function CardRevealItem({ pilar, side }: { pilar: any, side: 'left' | 'right' }) {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    return (
        <motion.div
            initial={{
                opacity: 0,
                x: isMobile ? 0 : (side === 'left' ? -30 : 30),
                y: isMobile ? 20 : 0
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{
                opacity: 0,
                x: isMobile ? 0 : (side === 'left' ? -30 : 30),
                y: isMobile ? 20 : 0
            }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full max-w-[320px] md:max-w-[340px] p-3.5 md:p-4 rounded-xl bg-slate-900/90 border border-slate-800/90 backdrop-blur-md flex gap-3.5 items-start pointer-events-auto shadow-2xl"
        >
            <div className="text-base md:text-lg p-2 bg-slate-800/80 rounded-lg flex-shrink-0 border border-slate-700/50">
                {pilar.icon}
            </div>
            <div className="text-left">
                <h3 className="font-bold text-xs text-green-400 tracking-wide">{pilar.titulo}</h3>
                <p className="text-[10px] md:text-[11px] text-slate-300 mt-0.5 leading-relaxed">{pilar.desc}</p>
            </div>
        </motion.div>
    );
}