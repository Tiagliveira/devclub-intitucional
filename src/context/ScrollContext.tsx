import { createContext, type ReactNode, useContext, useEffect, useRef, useState } from 'react';

interface ScrollContextType {
    visibleCount: number;
    maxSteps: number;
    sectionRef: React.RefObject<HTMLDivElement | null>;
}

const ScrollContext = createContext<ScrollContextType | undefined>(undefined);

export function ScrollProvider({ children, maxSteps }: { children: ReactNode; maxSteps: number }) {
    const [visibleCount, setVisibleCount] = useState(0);
    const sectionRef = useRef<HTMLDivElement>(null);
    const isTransitioning = useRef(false);

    // Usamos uma Ref para manter o valor atualizado dentro do evento de wheel sem re-adicionar o listener
    const visibleCountRef = useRef(visibleCount);
    visibleCountRef.current = visibleCount;

    useEffect(() => {
        const handleScroll = (e: WheelEvent) => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();

            // Tolerância maior para garantir que o container seja reconhecido na tela
            const isCentered = rect.top <= 50 && rect.bottom >= window.innerHeight - 50;

            if (!isCentered) return;

            const scrollingDown = e.deltaY > 0;
            const currentCount = visibleCountRef.current;

            if (scrollingDown && currentCount < maxSteps) {
                if (e.cancelable) e.preventDefault();
                if (!isTransitioning.current) {
                    isTransitioning.current = true;
                    setVisibleCount((prev) => Math.min(prev + 1, maxSteps));
                    setTimeout(() => { isTransitioning.current = false; }, 350);
                }
                return;
            }

            if (!scrollingDown && currentCount > 0) {
                if (e.cancelable) e.preventDefault();
                if (!isTransitioning.current) {
                    isTransitioning.current = true;
                    setVisibleCount((prev) => Math.max(prev - 1, 0));
                    setTimeout(() => { isTransitioning.current = false; }, 350);
                }
            }
        };

        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => window.removeEventListener('wheel', handleScroll);
    }, [maxSteps]); // Removido o visibleCount daqui para o listener não se recriar atoa!

    return (
        <ScrollContext.Provider value={{ visibleCount, maxSteps, sectionRef }}>
            {children}
        </ScrollContext.Provider>
    );
}

export function useScrollSteps() {
    const context = useContext(ScrollContext);
    if (!context) throw new Error('useScrollSteps deve ser usado dentro de um ScrollProvider');
    return context;
}