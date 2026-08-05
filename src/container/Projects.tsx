import { useEffect, useState } from 'react';
import DevBillsHomeMobile from './../assets/devbill-dashboard-mobile.webp';
import DevBillsDashboard from './../assets/devbills-dashboard.webp';
import DevBillsTransactions from './../assets/devbills-tranactions.webp';
import DevBurgLongin from './../assets/devburg-login.webp';
import DevBurgMenu from './../assets/devburg-menu.webp';
import DevBurgProducts from './../assets/devburg-products.webp';
import Gdash from './../assets/gdash.webp';
import GdashMobile from './../assets/gdash-mobile.webp';
import Implementacao from './../assets/implementacao-ao-vivo.webp';
import NexusClima from './../assets/nexusclima.webp';
import NexusClimaMobilePesquisa from './../assets/nexusclima-mobile.webp';
import NexusClimaMobile from './../assets/nexusclima-pesquisa-mobile.webp';
import NexusClimaPesquisa from './../assets/nexusclimapesquisa.webp';
import ArrayBurg from './../assets/one-menu.webp';
import StackBurgDashboard from './../assets/stackburg-dashboard.webp';
import StackBurgHome from './../assets/stackburg-home.webp';
import StackBurgHomeMobile from './../assets/stackburg-home-mobile.webp';
import StackBurgMenu from './../assets/stackburg-menu.webp';
import StackBurgMenuMobile from './../assets/stackburg-menu-mobile.webp';
import StackBurgCart from './../assets/stcakburg-cart-mobile.webp';
import SuperMario from './../assets/supermario.webp';
import SuperMarioMobile from './../assets/supermario-mobile.webp';

const desktopPool = [
    { type: 'desktop', title: 'Dev Bills Dashboard', image: DevBillsDashboard },
    { type: 'desktop', title: 'Dev Bills Transações', image: DevBillsTransactions },
    { type: 'desktop', title: 'Dev Burg Tela de Login', image: DevBurgLongin },
    { type: 'desktop', title: 'Menu Digital Dev Burg', image: DevBurgMenu },
    { type: 'desktop', title: 'Dev Burg Produtos', image: DevBurgProducts },
    { type: 'desktop', title: 'Tela Interativa com Dados', image: Gdash },
    { type: 'desktop', title: 'Projeto Real StackBurg', image: StackBurgHome },
    { type: 'desktop', title: 'Dashboard de uma Hambugueria real', image: StackBurgDashboard },
    { type: 'desktop', title: 'Implementação ao Vivo de Agentes de IA', image: Implementacao },
    { type: 'desktop', title: 'Site que sente o clima', image: NexusClima },
    { type: 'desktop', title: 'Pesquisa de Clima da sua próxima viagem', image: NexusClimaPesquisa },
    { type: 'desktop', title: 'Menu de uma Hambugueria real', image: StackBurgMenu },
    { type: 'desktop', title: 'Landing Page de Mario', image: SuperMario },
];

const mobilePool = [
    { type: 'mobile', title: 'Dev Bills App de finanças', image: DevBillsHomeMobile },
    { type: 'mobile', title: 'App de Clima com Dados', image: GdashMobile },
    { type: 'mobile', title: 'App de Clima com pesquisa dinâmica', image: NexusClimaMobilePesquisa },
    { type: 'mobile', title: 'App de Clima Interativo', image: NexusClimaMobile },
    { type: 'mobile', title: 'Soma de cardápio', image: ArrayBurg },
    { type: 'mobile', title: 'Tela de início do StackBurg', image: StackBurgHomeMobile },
    { type: 'mobile', title: 'Menu para pedir de casa', image: StackBurgMenuMobile },
    { type: 'mobile', title: 'Checkout dos pedidos', image: StackBurgCart },
    { type: 'mobile', title: 'Conserta Tudo', image: SuperMarioMobile },
];

const screenSlotsConfig = [
    { type: 'desktop', span: 'col-span-12 md:col-span-4 row-span-2' },
    { type: 'mobile', span: 'col-span-12 md:col-span-2 row-span-2' },
    { type: 'desktop', span: 'col-span-12 md:col-span-3 row-span-1' },
    { type: 'mobile', span: 'col-span-12 md:col-span-3 row-span-1' },
    { type: 'desktop', span: 'col-span-12 md:col-span-4 row-span-1' },
    { type: 'mobile', span: 'col-span-12 md:col-span-2 row-span-1' },

];

export function Projects() {
    const [screenItems, setScreenItems] = useState(() => {
        const dPool = [...desktopPool].sort(() => 0.5 - Math.random());
        const mPool = [...mobilePool].sort(() => 0.5 - Math.random());

        let dIdx = 0;
        let mIdx = 0;

        return screenSlotsConfig.map(slot => {
            if (slot.type === 'desktop') {
                const item = dPool[dIdx % dPool.length];
                dIdx++;
                return item;
            } else {
                const item = mPool[mIdx % mPool.length];
                mIdx++;
                return item;
            }
        });
    });


    const [dynamicSlots, setDynamicSlots] = useState([0, 3]);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);

        const interval = setInterval(() => {

            const slots = [0, 1, 2, 3, 4, 5, 6].sort(() => 0.5 - Math.random()).slice(0, 2);
            setDynamicSlots(slots);

            setScreenItems(prevItems => {
                const newDesktopPool = [...desktopPool].sort(() => 0.5 - Math.random());
                const newMobilePool = [...mobilePool].sort(() => 0.5 - Math.random());

                let dIdx = 0;
                let mIdx = 0;

                return prevItems.map((current, idx) => {
                    if (slots.includes(idx)) {
                        if (screenSlotsConfig[idx].type === 'desktop') {
                            const newItem = newDesktopPool[dIdx % newDesktopPool.length];
                            dIdx++;
                            return newItem;
                        } else {
                            const newItem = newMobilePool[mIdx % newMobilePool.length];
                            mIdx++;
                            return newItem;
                        }
                    }
                    return current;
                });
            });
        }, 30000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="Projetos" className="relative w-full min-h-[95vh] bg-zinc-950 text-white overflow-hidden flex flex-col justify-between py-8 px-4 md:px-12">


            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[900px] md:h-[900px] bg-emerald-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

            <div className="relative z-30 text-center max-w-3xl mx-auto mb-6 pointer-events-none">
                <span className="inline-block text-emerald-400 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20 mb-2 shadow-md backdrop-blur-md">
                    Arte DevClub
                </span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white drop-shadow-lg">
                    Estes são os projetos reais do DevClub
                </h2>
                <p className="text-zinc-400 text-sm mt-2 max-w-xl mx-auto font-medium drop-shadow-md">
                    Sistemas robustos desenvolvidos do absoluto zero por nossos alunos.
                </p>
            </div>

            <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 auto-rows-[200px] md:auto-rows-[220px] gap-3 w-full max-w-6xl mx-auto my-auto">
                {screenItems.map((project, index) => {
                    const isDynamic = dynamicSlots.includes(index);

                    return (
                        <div
                            key={index}
                            className={`${screenSlotsConfig[index].span} ${isMounted && isDynamic ? 'animate-float-slow' : ''} rounded-3xl overflow-hidden relative group border border-zinc-800 bg-zinc-900 shadow-2xl transition-all duration-700`}
                            style={{ animationDelay: `${index * 0.3}s` }}
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-85 group-hover:opacity-100"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-4">
                                {isDynamic ? (
                                    <span className="text-[9px] font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                        ✨ DINÂMICO (30S)
                                    </span>
                                ) : (
                                    <span className="text-[9px] font-bold text-zinc-400 uppercase tracking-wider">
                                        {project.type === 'desktop' ? '💻 DESKTOP' : '📱 MOBILE'}
                                    </span>
                                )}
                                <h4 className="text-sm md:text-base font-bold text-white mt-1 truncate">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="relative z-30 text-center mt-4 pointer-events-none">
                <span className="text-[10px] text-zinc-500 font-semibold tracking-wider uppercase flex items-center justify-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    Seja Você o proximo a contruir projetos como esse!
                </span>
            </div>

        </section>
    );
}