import {
    FaAws,
    FaCss3,
    FaDocker,
    FaGitAlt,
    FaNodeJs,
    FaPython,
    FaReact
} from "react-icons/fa";
import {
    SiExpo,
    SiExpress,
    SiFirebase,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiN8N,
    SiPostgresql,
    SiTailwindcss,
    SiTypescript
} from "react-icons/si";

interface TechItem {
    name: string;
    icon: React.ReactNode;
    color: string;
}

const technologies: TechItem[] = [
    { name: "React", icon: <FaReact />, color: "#61DAFB" },
    { name: "TypeScript", icon: <SiTypescript />, color: "#3178C6" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#5FA04E" },
    { name: "Tailwind", icon: <SiTailwindcss />, color: "#06B6D4" },
    { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169E1" },
    { name: "MongoDB", icon: <SiMongodb />, color: "#47A248" },
    { name: "Docker", icon: <FaDocker />, color: "#2496ED" },
    { name: "Python", icon: <FaPython />, color: "#3776AB" },
    { name: "JavaScript", icon: <SiJavascript />, color: "#F7DF1E" },
    { name: "Express", icon: <SiExpress />, color: "#575656" },
    { name: "Git", icon: <FaGitAlt />, color: "#F05032" },
    { name: "AWS", icon: <FaAws />, color: "#FF9900" },
    { name: "Firebase", icon: <SiFirebase />, color: "#FFCA28" },
    { name: "HTML", icon: <SiHtml5 />, color: "#ff0000" },
    { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
    { name: "N8N", icon: <SiN8N />, color: "#FF6B6B" },
    { name: "expo", icon: <SiExpo />, color: "#444444" },
];

export const TechMarquee = () => {
    return (
        <div className="w-full overflow-hidden relative py-2 mt-4 mask-fade">
            {/* Efeito de gradiente nas bordas para suavizar o sumiço dos ícones */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

            <div className="flex w-max animate-marquee gap-6 items-center">
                {/* Duplicamos a lista para criar o efeito infinito contínuo */}
                {[...technologies, ...technologies].map((tech) => (
                    <div
                        key={tech.name}
                        className="flex items-center gap-2 bg-white/05 border border-white/10 px-3 py-1.5 rounded-full text-xs text-gray-200 backdrop-blur-sm transition-transform hover:scale-110"
                    >
                        <span className="text-base" style={{ color: tech.color }}>
                            {tech.icon}
                        </span>
                        <span className="font-mono">{tech.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};