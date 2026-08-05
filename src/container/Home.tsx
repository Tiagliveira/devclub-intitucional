import logoDevClub from './../assets/logo-devClub.png'
import { Button } from '../components/Button';
import HomeGlobe from '../components/HomeGlobe';
import { TypewriterText } from '../components/TypewriterText';

export default function Home({ onOpenModal }: { onOpenModal: () => void }) {
    return (
        <div className="flex flex-col w-full h-dvh relative" id="Home">
            <header className="border-b border-gray-600/60 bg-gray-900 backdrop-blur-md sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6  h-20 flex items-center justify-between ">
                    <div className="text-2xl font-bold tracking-tighter lg:flex">
                        <span className="hover hover:bg-cyber-magenta/30 w-9 h-9 mr-2" ><img src={logoDevClub} alt="DevClub" className="w-8 h-8  inline-block " /></span><span className="text-gray-200 lg:text-lg flex-inline md:text-sm md:flex md:items-center ">Dev Club</span>
                    </div>

                    <nav className="hidden md:flex items-center space-x-10 text-sm font-semibold font-mono">
                        <a href="#Formacoes" className="text-gray-400 outline-none hover:text-emerald-400 hover:border hover:rounded-lg p-2 hover:border-emerald-400 pb-1 transition-all">Formações</a>
                        <a href="#Faculdade" className="text-gray-400 outline-none hover:text-emerald-400 hover:border hover:rounded-lg p-2 hover:border-emerald-400 pb-1 transition-all">Faculdade</a>
                    </nav>

                    <div className="flex items-center space-x-4">
                        <Button onClick={onOpenModal} className=" py-2.5 rounded-xl cursor-pointer text-gray-400 font-black text-xs sm:text-sm tracking-wider transition-all hover:text-emerald-400">
                            Área do aluno
                        </Button>
                        <Button onClick={onOpenModal} className="lg:px-5 py-2.5 rounded-xl cursor-pointer bg-emerald-400 text-[#050B14] font-black text-xs sm:text-sm md:px-1.5 tracking-wider uppercase  hover:bg-emerald-950 hover:text-emerald-500 transition-colors ">
                            Quero ser Aluno
                        </Button>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 lg:py-12 grid grid-cols-1 lg:grid-cols-12 lg:gap-8 items-center w-full flex-1 md:gap-1.5 md:py-3">
                <div className="lg:col-span-5 flex flex-col space-y-6 z-10 md:space-y-2 md; mt-3">

                    <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight leading-none text-white">
                        Entre para o mercado de tecnologia aprendendo<br />
                        <span className="bg-gradient-to-r from-emerald-400 via-gray-100 to-emerald-900 bg-clip-text text-transparent">
                            <TypewriterText />
                        </span>
                    </h1>

                    <p className="text-base text-gray-400 leading-relaxed">
                        Do zero ao avançado através de projetos reais e uma didática prática, preparando você tanto para trabalhar nas melhores empresas quanto para empreender.
                    </p>

                    <div className="pt-2">
                        <Button onClick={onOpenModal} className="px-8 py-4 bg-gradient-to-r from-emerald-400 to-emerald-500 text-[#050B14] font-black text-sm rounded-xl tracking-wider uppercase shadow-[0_4px_20px_rgba(16,185,129,0.25)] hover:opacity-50 transition-all cursor-pointer">
                            GARANTIR MINHA VAGA COM DESCONTO
                        </Button>
                    </div>
                </div>

                <div className="lg:col-span-7 h-[450px] lg:h-[550px] w-full bg-transparent flex items-center justify-center relative md:h-[300px] md:flex md:items-start
                ">
                    <HomeGlobe />
                </div>

            </main>

        </div>
    );
}