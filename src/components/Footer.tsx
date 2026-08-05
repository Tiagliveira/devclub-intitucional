

export function Footer() {
    return (
        <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-12 px-4 md:px-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-left">

                <div className="md:col-span-1 space-y-4">
                    <h3 className="text-white font-black text-xl tracking-wider">
                        DEV<span className="text-emerald-400">CLUB</span>
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed">
                        A maior comunidade e escola de programação que transforma iniciantes em profissionais disputados pelo mercado tech global.
                    </p>
                    <div className="text-[10px] text-slate-500 font-mono">
                        "Não existe almoço grátis." 🥑
                    </div>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Navegação</h4>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#Home" className="hover:text-emerald-400 transition-colors">Início</a></li>
                        <li><a href="#Formacoes" className="hover:text-emerald-400 transition-colors">Formação Completa</a></li>
                        <li><a href="#Especialistas" className="hover:text-emerald-400 transition-colors">Time & IAs</a></li>
                        <li><a href="#Depoimentos" className="hover:text-emerald-400 transition-colors">Histórias de Sucesso</a></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-white font-bold text-sm mb-4 tracking-wide uppercase">Legal</h4>
                    <ul className="space-y-2 text-xs">
                        <li><a href="#termos" className="hover:text-emerald-400 transition-colors">Termos de Uso</a></li>
                        <li><a href="#privacidade" className="hover:text-emerald-400 transition-colors">Política de Privacidade</a></li>
                        <li><a href="#suporte" className="hover:text-emerald-400 transition-colors">Central de Suporte</a></li>
                    </ul>
                </div>

                <div className="space-y-3">
                    <h4 className="text-white font-bold text-sm tracking-wide uppercase">Comunidade</h4>
                    <p className="text-xs text-slate-400">
                        Faça parte da nossa tropa e acelere sua carreira em tecnologia.
                    </p>
                    <div className="pt-2">
                        <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold rounded-full">
                            <a href="#Projetos" className="hover:text-emerald-400 transition-colors">🟢 Projetos</a>
                        </span>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900/80 flex flex-col md:flex-row items-center justify-center text-xs text-slate-500 gap-4">
                <p>© {new Date().getFullYear()} DevClub. Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}