import { createContext, type ReactNode, useContext, useState } from 'react';

interface GlobeContextType {
    viewMode: 'hero' | 'other';
    setViewMode: (mode: 'hero' | 'other') => void;
}

const GlobeContext = createContext<GlobeContextType | undefined>(undefined);

export function GlobeProvider({ children }: { children: ReactNode }) {
    const [viewMode, setViewMode] = useState<'hero' | 'other'>('hero');

    return (
        <GlobeContext.Provider value={{ viewMode, setViewMode }}>
            {children}
        </GlobeContext.Provider>
    );
}

export function useGlobe() {
    const context = useContext(GlobeContext);
    if (!context) {
        throw new Error('useGlobe must be used within a GlobeProvider');
    }
    return context;
}