import { type MouseEvent, useRef, useState } from "react"
import {
    FaGraduationCap,
    FaLaptopCode,
    FaMobileAlt,
    FaSchool
} from "react-icons/fa"
import {
    SiNodedotjs,
    SiReact
} from "react-icons/si"
import imageFundo from '../assets/bannerDevClub.webp'
import { FormationsMarquee } from "../components/FormationsMarquee"
import { TechMarquee } from "../components/TechMarquee"

interface FormacaoItem {
    id: string;
    titulo: string;
    descricao: string;
    tag?: string;
    icone: React.ReactNode;
}

const formacoesDados: FormacaoItem[] = [
    {
        id: "fullstack",
        titulo: "Formação Fullstack JavaScript",
        descricao: "Domine o desenvolvimento web completo com JavaScript. Aprenda desde o front-end com React até o back-end com Node.js.",
        tag: "MEC",
        icone: <SiNodedotjs className="text-yellow-400 text-2xl" />,
    },
    {
        id: "frontend",
        titulo: "Formação Front-end",
        descricao: "Especialize-se em desenvolvimento front-end moderno com React. Crie interfaces incríveis e performáticas.",
        icone: <SiReact className="text-cyan-400 text-2xl" />,
    },
    {
        id: "backend",
        titulo: "Formação Back-end",
        descricao: "Torne-se um especialista em desenvolvimento back-end com Node.js. Construa APIs robustas e escaláveis.",
        icone: <FaLaptopCode className="text-emerald-400 text-2xl" />,
    },
    {
        id: "mobile",
        titulo: "Formação Mobile",
        descricao: "Desenvolva aplicativos móveis nativos para iOS e Android usando React Native.",
        icone: <FaMobileAlt className="text-blue-500 text-2xl" />,
    },
    {
        id: "ads",
        titulo: "MBA e Pós Graduação em Tecnologia",
        descricao: "Aprofunde seus conhecimentos com a pós-graduação em desenvolvimento FullStack.",
        tag: "Superior",
        icone: <FaGraduationCap className="text-cyan-300 text-2xl" />,
    },
    {
        id: "extras",
        titulo: "A Escola das Profissões do Futuro",
        descricao: "Conheça mais sobre a nossa escola de programação DevClub.",
        icone: <FaSchool className="text-purple-400 text-2xl" />,
    },
];

export const Formacoes = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;

        const rect = containerRef.current.getBoundingClientRect();
        setMousePos({
            x: e.clientX - rect.left,
            y: e.clientY - rect.top,
        });
    };

    return (
        <div
            id="Formacoes"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            aria-hidden="true"
            className="relative w-full min-h-screen py-20 px-4 overflow-hidden select-none bg-gray-950/80"
        >
            <div
                className="absolute inset-0 bg-cover bg-center pointer-events-none transition-opacity duration-500 ease-in-out"
                style={{
                    backgroundImage: `url(${imageFundo})`,
                    opacity: isHovered ? 0.7 : 0.2,
                    WebkitMaskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, #101828 0%, rgba(5, 11, 20, 0.4) 60%, transparent 100%)`,
                    maskImage: `radial-gradient(circle 250px at ${mousePos.x}px ${mousePos.y}px, #050B14 0%, rgba(5, 11, 20, 0.4) 60%, transparent 100%)`,
                }}
            />

            <div className="max-w-6xl mx-auto relative z-10">
                <h2 className="text-3xl font-bold text-white mb-10 tracking-wider uppercase text-center md:text-left">
                    <span className="text-[#00df89] drop-shadow-[0_0_15px_rgba(0,223,137,0.5)]">Conheca nossas formacoes em programação</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                    {formacoesDados.map((curso) => (
                        <div
                            key={curso.id}
                            className="group relative flex flex-col justify-between p-5 bg-transparent border border-white/10 backdrop-blur-md rounded-xl overflow-hidden transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#00df89] hover:shadow-[0_0_25px_rgba(0,223,137,0.2)] hover:bg-white/[0.02]"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="w-12 h-12 bg-white/[0.03] border border-white/10 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                                    {curso.icone}
                                </div>

                                {curso.tag && (
                                    <span className="text-[10px] font-bold uppercase bg-[#00df89]/20 text-[#00df89] px-2.5 py-0.5 rounded-full border border-[#00df89]/40">
                                        {curso.tag}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col text-left">
                                <h3 className="text-base font-bold text-white group-hover:text-[#00df89] transition-colors duration-300">
                                    {curso.titulo}
                                </h3>
                                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed line-clamp-2">
                                    {curso.descricao}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>


                <div className="space-y-3 mt-8">
                    <div >
                        <p className=" text-center text-gray-400 font-bold  text-xl hover hover:text-emerald-500"> Tecnologias & Frameworks</p>
                        <TechMarquee />
                    </div>
                    <div>
                        <p className="text-gray-400 font-bold text-center text-xl hover hover:text-emerald-500"> Formações</p>
                        <FormationsMarquee />
                    </div>

                </div>
            </div>
        </div>
    );
};