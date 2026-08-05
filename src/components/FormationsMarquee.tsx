const textItems: string[] = [
    "Programação Front End",
    "Programação Back End",
    "Programação Full Stack",
    "Programação Mobile",
    "React",
    "Node",
    "JavaScript Completo",
    "HTML5",
    "CSS3",
    "Gestor de IA",
    "IA e Automações",
    "Claude & ClaudeCode",
    "Trilha N8N",
    "Análise de Dados",
    "PowerBI"
];

export const FormationsMarquee = () => {
    return (
        <div className="w-full overflow-hidden relative py-4">
            <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-[#050B14] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-[#050B14] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee-reverse gap-12 items-center">
                {[...textItems, ...textItems].map((name, index) => (
                    <span
                        key={index}
                        className="text-gray-400/30 font-extrabold tracking-wider text-lg md:text-xl transition-all duration-400 hover:text-[#00df89] hover:scale-105 cursor-pointer font-sans"
                        style={{ fontFamily: "'Syne', 'Orbitron', 'Rajdhani', sans-serif" }}
                    >
                        {name}
                    </span>
                ))}
            </div>
        </div>
    );
};