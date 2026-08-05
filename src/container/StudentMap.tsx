import { useEffect, useRef, useState } from 'react';
import Globe from 'react-globe.gl';
import { GiCancel } from 'react-icons/gi';
import { generate3kMapTags, generate500Stories, type StudentStory } from '../components/studentStories';

const allStories = generate500Stories();
const mapPointsData = generate3kMapTags();

interface StudentMapProps {
    visibleCount: number;
}

export default function StudentMap({ visibleCount }: StudentMapProps) {
    const globeRef = useRef<any>(null);
    const [countriesGeoJson, setCountriesGeoJson] = useState<any>({ features: [] });
    const [activeStudents, setActiveStudents] = useState<StudentStory[]>([]);
    const [selectedStudent, setSelectedStudent] = useState<StudentStory | null>(null);

    useEffect(() => {
        fetch('https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_110m_admin_0_countries.geojson')
            .then(res => res.json())
            .then(setCountriesGeoJson)
            .catch(err => console.error(err));

        // Inicializa com 3 histórias aleatórias
        setActiveStudents([allStories[0], allStories[1], allStories[2]]);

        const storyInterval = setInterval(() => {
            setActiveStudents(() => {
                const randomIdx1 = Math.floor(Math.random() * allStories.length);
                let randomIdx2 = Math.floor(Math.random() * allStories.length);
                let randomIdx3 = Math.floor(Math.random() * allStories.length);

                while (randomIdx2 === randomIdx1) randomIdx2 = Math.floor(Math.random() * allStories.length);
                while (randomIdx3 === randomIdx1 || randomIdx3 === randomIdx2) randomIdx3 = Math.floor(Math.random() * allStories.length);

                return [allStories[randomIdx1], allStories[randomIdx2], allStories[randomIdx3]];
            });
        }, 6000);

        (window as any)._openModal = (id: number) => {
            const student = allStories.find(s => s.id === id);
            if (student) setSelectedStudent(student);
        };

        return () => clearInterval(storyInterval);
    }, []);

    useEffect(() => {
        if (globeRef.current) {
            const controls = globeRef.current.controls();
            controls.autoRotate = !selectedStudent;
            controls.autoRotateSpeed = 0.2;

            const baseAltitude = 3.0;
            const targetAltitude = baseAltitude - (visibleCount * 0.2);
            const safeAltitude = Math.max(targetAltitude, 1.8);

            globeRef.current.pointOfView({ altitude: safeAltitude }, 400);
        }
    }, [selectedStudent, visibleCount]);

    return (
        <div className="w-[600px] h-[600px] flex items-center justify-center mix-blend-screen cursor-grab">
            <Globe
                ref={globeRef}
                width={600}
                height={600}
                backgroundColor="rgba(0,0,0,0)"
                showAtmosphere={true}
                atmosphereColor="#22c55e"
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-dark.jpg"
                polygonsData={countriesGeoJson.features}
                polygonCapColor={() => 'rgba(0, 0, 0, 0)'}
                polygonSideColor={() => 'rgba(0, 0, 0, 0)'}
                polygonStrokeColor={() => 'rgba(34, 197, 94, 0.12)'}
                polygonAltitude={0.002}
                pointsData={mapPointsData}
                pointLat="lat"
                pointLng="lon"
                pointColor="color"
                pointRadius="size"
                pointAltitude={0.01}
                pointsMerge={true}
                htmlElementsData={activeStudents}
                htmlLat={(d: any) => d.lat}
                htmlLng={(d: any) => d.lon}
                htmlAltitude={0.08}
                htmlElement={(d: any) => {
                    const container = document.createElement('div');
                    container.style.pointerEvents = 'auto';
                    container.innerHTML = `
                        <div onclick="window._openModal(${d.id})"
                             class="group relative bg-slate-950/80 border border-green-500/20 text-left p-3 rounded-xl cursor-pointer select-none backdrop-blur-md
                                    transition-colors duration-300 ease-in-out origin-bottom w-48 hover:border-green-400"
                              style="transform: translate(-50%, -100%);">
                          <div class="flex gap-2 items-center">
                            <div class="w-8 h-8 rounded-lg bg-slate-900 p-0.5 border border-green-500/20 flex shrink-0">
                              <img src="${d.avatar}" alt="" class="w-full h-full object-contain rounded-md" />
                            </div>
                            <div class="overflow-hidden">
                              <h4 class="text-white text-xs font-bold truncate">${d.name}</h4>
                              <p class="text-slate-400 text-[8px]">${d.role}</p>
                              <p class="text-green-400 font-mono text-[8px] font-bold uppercase">${d.status}</p>
                            </div>
                          </div>
                        </div>
                      `;
                    return container;
                }}
            />

            {selectedStudent && (
                <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/40 backdrop-blur-md">
                    <div className="relative w-full max-w-sm bg-slate-950 border border-green-500/30 p-6 rounded-2xl text-center">
                        <button type='button' onClick={() => setSelectedStudent(null)} className="absolute  flex  items-center justify-center top-4 right-4 text-red-300 hover:text-red-600 font-mono text-[10px]"><GiCancel className='mr-2' />cancelar</button>
                        <div className="w-16 h-16 mx-auto rounded-xl bg-slate-950/80 p-1.5 border border-green-500/20 mb-3"><img src={selectedStudent.avatar} alt="" className="w-full h-full object-contain rounded-lg" /></div>
                        <h3 className="text-lg font-black text-white/90">{selectedStudent.name}</h3>
                        <p className="text-slate-400 text-[10px] font-mono mt-1">{selectedStudent.role}</p>
                        <div className="mt-4 text-left bg-slate-950 border border-white/5 p-3.5 rounded-xl"><p className="text-slate-200 text-xs italic">"{selectedStudent.story}"</p></div>
                    </div>
                </div>
            )}
        </div>
    );
}