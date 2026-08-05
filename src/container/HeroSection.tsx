import HeroParticles from "../components/HeroParticles";

export function Hero() {
    return (
        <section className="relative w-full h-screen bg-slate-950 overflow-hidden flex items-center px-8 md:px-24">
            {/* O Efeito de Partículas Magnéticas do QR Code do DevClub */}
            <HeroParticles />

            {/* Seu conteúdo escrito alinhado à esquerda */}
            <div className="relative z-20 max-w-xl pointer-events-none select-none">
                <span className="text-green-500 font-mono text-xs tracking-widest uppercase block mb-2">
                    Systems & Deployment
                </span>
                <h1 className="text-5xl md:text-7xl font-black text-white leading-tight">
                    Evolução <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
                        Tecnológica
                    </span>
                </h1>
                <p className="text-slate-400 mt-4 text-sm md:text-base leading-relaxed max-w-sm">
                    Role para baixo para ver a jornada de capacitação técnica, formações acadêmicas e especializações em tempo real.
                </p>
            </div>
        </section>
    );
}