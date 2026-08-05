import { useEffect, useState } from 'react';
import { BiLogoAdobe } from 'react-icons/bi';
import { CgMicrosoft } from "react-icons/cg";
import { FaAmazon, FaAws } from 'react-icons/fa';
import { FaWindows } from "react-icons/fa6";
import {
    SiApple,
    SiAutodesk,
    SiCalibreweb,
    SiDigitalocean,
    SiEvernote,
    SiFigma,
    SiGithubcopilot,
    SiGitkraken,
    SiGooglecloud,
    SiJetbrains,
    SiLastpass,
    SiMongodb,
    SiNamecheap,
    SiNotion,
    SiSpotify,
    SiTermius,
    SiYoutube
} from 'react-icons/si';
import { TiVendorMicrosoft } from 'react-icons/ti';
import DiplomaArizona from './../assets/certificdao-arizona.webp'
import Comunidade from './../assets/comunidade.webp'
import CertificadoMEC from './../assets/diplomaMEC.webp'
import IasGratuitas from './../assets/ias27.webp'
import LogoDevClub from './../assets/logo-devClub.png'
import LogoSirius from './../assets/logo-sirius.png'
import Modulos from './../assets/modulos.webp'
import MokupDeclub from './../assets/morkup.webp';
import MorkupHomeMBA from './../assets/morkuphomeMBA.webp'
import { Button } from '../components/Button';

interface IaTool {
    name: string;
    icon: React.ReactNode;
    bgGradient: string;
    angle: number;
}

const iaTools: IaTool[] = [
    { name: 'GitHub Copilot', icon: <SiGithubcopilot size={20} />, bgGradient: 'from-purple-600 to-indigo-600', angle: 0 },
    { name: 'JetBrains', icon: <SiJetbrains size={20} />, bgGradient: 'from-orange-500 to-pink-600', angle: 15 },
    { name: 'Termius', icon: <SiTermius size={20} />, bgGradient: 'from-cyan-500 to-blue-700', angle: 30 },
    { name: 'GitKraken', icon: <SiGitkraken size={20} />, bgGradient: 'from-emerald-500 to-teal-700', angle: 45 },
    { name: 'DigitalOcean', icon: <SiDigitalocean size={20} />, bgGradient: 'from-blue-600 to-cyan-500', angle: 60 },
    { name: 'Google Cloud', icon: <SiGooglecloud size={20} />, bgGradient: 'from-blue-500 to-indigo-600', angle: 75 },
    { name: 'AWS Educate', icon: <FaAmazon size={20} />, bgGradient: 'from-amber-500 to-orange-600', angle: 90 },
    { name: 'Microsoft Azure', icon: <CgMicrosoft size={20} />, bgGradient: 'from-blue-700 to-cyan-600', angle: 105 },
    { name: 'MongoDB', icon: <SiMongodb size={20} />, bgGradient: 'from-emerald-600 to-green-700', angle: 120 },
    { name: 'Namecheap', icon: <SiNamecheap size={20} />, bgGradient: 'from-orange-500 to-red-600', angle: 135 },
    { name: 'Adobe', icon: <BiLogoAdobe size={20} />, bgGradient: 'from-red-600 to-rose-700', angle: 150 },
    { name: 'Figma', icon: <SiFigma size={20} />, bgGradient: 'from-purple-500 to-pink-600', angle: 165 },
    { name: 'Canva', icon: <SiCalibreweb size={20} />, bgGradient: 'from-cyan-500 to-blue-600', angle: 180 },
    { name: 'Autodesk', icon: <SiAutodesk size={20} />, bgGradient: 'from-blue-600 to-indigo-700', angle: 195 },
    { name: 'Windows 11', icon: <FaWindows size={20} />, bgGradient: 'from-blue-500 to-cyan-600', angle: 210 },
    { name: 'Microsoft 365', icon: <TiVendorMicrosoft size={20} />, bgGradient: 'from-orange-600 to-red-600', angle: 225 },
    { name: 'Notion', icon: <SiNotion size={20} />, bgGradient: 'from-gray-600 to-gray-800', angle: 240 },
    { name: 'LastPass', icon: <SiLastpass size={20} />, bgGradient: 'from-red-700 to-red-900', angle: 255 },
    { name: 'Evernote', icon: <SiEvernote size={20} />, bgGradient: 'from-emerald-500 to-green-700', angle: 270 },
    { name: 'YouTube Premium', icon: <SiYoutube size={20} />, bgGradient: 'from-red-600 to-red-800', angle: 285 },
    { name: 'Spotify Premium', icon: <SiSpotify size={20} />, bgGradient: 'from-emerald-500 to-green-600', angle: 300 },
    { name: 'Apple Music', icon: <SiApple size={20} />, bgGradient: 'from-gray-500 to-gray-700', angle: 315 },
    { name: 'Amazon Prime', icon: <FaAws size={20} />, bgGradient: 'from-blue-500 to-cyan-500', angle: 330 },
    { name: 'Apple Education', icon: <SiApple size={20} />, bgGradient: 'from-gray-400 to-slate-600', angle: 345 }
];

export const Faculdade = ({ onOpenModal }: { onOpenModal: () => void }) => {
    const carouselItems = [
        { type: 'image', src: MokupDeclub, title: 'Plataforma DevClub' },
        { type: 'text', title: '+25.000 Alunos', subtitle: 'Transformando carreiras na tecnologia e Inteligência Artificial.', gradient: 'from-emerald-900 via-teal-950 to-gray-950', border: 'border-emerald-500/40' },
        { type: 'image', src: DiplomaArizona, title: 'Extensão Internacional' },
        { type: 'text', title: 'R$ 23.000+ /ano', subtitle: 'Em economia de benefícios, softwares e ferramentas inclusas.', gradient: 'from-purple-900 via-indigo-950 to-gray-950', border: 'border-purple-500/40' },
        { type: 'image', src: CertificadoMEC, title: 'Nota 5, Máxima Do MEC' },
        { type: 'text', title: 'Professores Renomados', subtitle: 'Os profissionais mais conceituados do mercado atuando com você.', gradient: 'from-blue-900 via-cyan-950 to-gray-950', border: 'border-blue-500/40' },
        { type: 'image', src: IasGratuitas, title: 'Ferramentas de IA' },
        { type: 'text', title: 'Suporte Humano 7/7', subtitle: 'Atendimento humanizado todos os dias da semana para tirar suas dúvidas.', gradient: 'from-amber-900 via-orange-950 to-gray-950', border: 'border-amber-500/40' },
        { type: 'image', src: Comunidade, title: 'Comunidade Exclusiva' },
        { type: 'text', title: 'Mentoria de Carreira', subtitle: 'Direcionamento profissional focado em alta empregabilidade.', gradient: 'from-rose-900 via-pink-950 to-gray-950', border: 'border-rose-500/40' },
        { type: 'image', src: Modulos, title: 'Módulos Práticos' },
        { type: 'text', title: 'MBA em IA', subtitle: 'Formação completa em Inteligência Artificial com especialistas do setor.', gradient: 'from-emerald-900 via-teal-950 to-gray-950', border: 'border-emerald-500/40' },
        { type: 'image', src: MorkupHomeMBA, title: 'MBA em IA' },
        { type: 'text', title: 'Salário', subtitle: 'Salários a cima da média do mercado, com possibilidade de Home Office.', gradient: 'from-blue-900 via-cyan-950 to-gray-950', border: 'border-blue-500/40' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
        }, 4500);
        return () => clearInterval(timer);
    }, [carouselItems.length]);

    return (
        <section id="Faculdade" className="relative w-full bg-gray-950/80 py-24 px-4 overflow-hidden">
            <style>{`
                @keyframes spinOrbit {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                @keyframes counterSpin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(-360deg); }
                }
                .orbit-ring {
                    animation: spinOrbit 40s linear infinite;
                    transform-origin: center center;
                }
                .orbit-ring:hover {
                    animation-play-state: paused;
                }
                .counter-rotate {
                    animation: counterSpin 40s linear infinite;
                    transform-origin: center center;
                }
                .orbit-ring:hover .counter-rotate {
                    animation-play-state: paused;
                }
            `}</style>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00df89]/10 blur-[150px] rounded-full pointer-events-none z-0" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    <div className="text-center lg:text-left">
                        <div className="inline-flex items-center gap-2 bg-[#00df89]/10 border border-[#00df89]/30 text-[#00df89] px-3 py-1 rounded-full text-xs font-mono mb-6">
                            <img src={LogoDevClub} alt="Logo do DevClub" className="w-5 h-5" />
                            <img src={LogoSirius} alt="Logo da Sirius" className="w-15 h-5" />
                            Parceria Acadêmica Exclusiva
                        </div>

                        <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                            MBA em IA & <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00df89] to-emerald-400">
                                Faculdade Sirius
                            </span>
                        </h2>

                        <p className="mt-6 text-gray-400 text-lg max-w-xl mx-auto lg:mx-0">
                            Tudo o que você precisa para dominar a Inteligência Artificial e ferramentas profissionais em um só lugar.
                        </p>

                        <ul className="mt-8 space-y-4 text-left max-w-md mx-auto lg:mx-0">
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-[#00df89] mt-1">✓</span>
                                <span>Diploma de nível superior reconhecido pelo MEC em parceria com a Sirius.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-[#00df89] mt-1">✓</span>
                                <span>Acesso grátis inclusos aos modelos de IA mais avançados e softwares profissionais do mercado.</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-300">
                                <span className="text-[#00df89] mt-1">✓</span>
                                <span>Metodologia prática, desenhada para colocar você no comando da tecnologia que está transformando o mundo.</span>
                            </li>
                        </ul>

                        <div className="mt-10 flex flex-wrap gap-4 justify-center lg:justify-start">
                            <Button onClick={onOpenModal} className="bg-[#00df89] text-[#05050a] font-bold px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(0,223,137,0.3)] hover:bg-[#00c576] transition-all hover:-translate-y-0.5">
                                Quero Fazer Parte →
                            </Button>
                            <p className="text-gray-500 text-sm">
                                Preencha nosso formulário. Nosso time de especialistas avalia seu perfil e entra em contato.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-center items-center relative min-h-[580px] lg:min-h-[660px] md:max-h-[350px]">

                        <div className="relative w-[440px] h-[440px] md:w-[350px] md:h-[350px] flex items-center justify-center">


                            <div className="absolute inset-0 rounded-full border border-[#00df89]/25 bg-gradient-to-b from-[#00df89]/10 to-transparent blur-[1px] pointer-events-none" />
                            <div className="absolute inset-6 rounded-full border border-dashed border-white/20 pointer-events-none" />


                            <div className="relative z-10 w-[240px] h-[240px] md:w-[280px] md:h-[280px] rounded-full overflow-hidden border-2 border-[#00df89]/50 shadow-[0_0_50px_rgba(0,223,137,0.3)] bg-gray-950 flex items-center justify-center">
                                {carouselItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center p-6 text-center rounded-full ${index === currentIndex ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-95 pointer-events-none'
                                            }`}
                                    >
                                        {item.type === 'image' ? (
                                            <div className="w-full h-full relative flex items-center justify-center ">
                                                <img src={item.src} alt={item.title} className="w-full h-full object-cover rounded-full" />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end justify-center ">
                                                    <span className="text-white font-mono text-xs bg-black/70 px-3 py-1 rounded-full border border-white/15 backdrop-blur-md shadow-lg">
                                                        {item.title}
                                                    </span>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className={`w-full h-full bg-gradient-to-br ${item.gradient} border ${item.border} rounded-full flex flex-col items-center justify-center p-6 text-white text-center shadow-2xl`}>
                                                <h3 className="text-lg md:text-2xl font-black tracking-tight mb-1.5 drop-shadow-md text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
                                                    {item.title}
                                                </h3>
                                                <p className="text-[11px] md:text-xs text-gray-300 max-w-[180px] font-medium leading-relaxed drop-shadow">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <div className="absolute inset-0 orbit-ring pointer-events-none">
                                {iaTools.map((tool, index) => {
                                    const radius = 195; // Raio em relação ao centro exato
                                    const radian = (tool.angle * Math.PI) / 180;
                                    const x = Math.cos(radian) * radius;
                                    const y = Math.sin(radian) * radius;

                                    return (
                                        <div
                                            key={index}
                                            style={{
                                                position: 'absolute',
                                                left: `calc(50% + ${x}px)`,
                                                top: `calc(50% + ${y}px)`,
                                                transform: 'translate(-50%, -50%)',
                                            }}
                                            className="pointer-events-auto"
                                        >
                                            <div className="counter-rotate">
                                                <div className={`group relative flex items-center justify-center w-11 h-11 md:w-10 md:h-10 bg-gradient-to-br ${tool.bgGradient} rounded-xl shadow-xl cursor-pointer z-20 transition-transform duration-300 hover:scale-125 hover:z-50`}>
                                                    <div className="text-white flex items-center justify-center">
                                                        {tool.icon}
                                                    </div>

                                                    {/* Tooltip com o nome */}
                                                    <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity duration-150 bg-black/90 border border-white/15 text-white text-[10px] font-mono px-2 py-0.5 rounded-md whitespace-nowrap pointer-events-none z-30 shadow-xl">
                                                        {tool.name}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};