import { useState } from 'react';
import { EnrollModal } from "./components/ErollModal"
import { Footer } from "./components/Footer";
import { About } from "./container/About";
import Depoiments from "./container/Depoiments";
import { Faculdade } from "./container/Faculdade";
import { Formacoes } from "./container/Fomacoes";
import Home from './container/Home';
import { Projects } from "./container/Projects";
import { TeamOfExperts } from "./container/TeamOfExperts";
import { GlobeProvider } from "./context/GlobeContext";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="relative bg-slate-950 w-full min-h-screen overflow-x-hidden">
      <GlobeProvider>
        <Home onOpenModal={openModal} />
        <Formacoes />
        <Faculdade onOpenModal={openModal} />
        <TeamOfExperts />
        <Projects />
        <About onOpenModal={openModal} />
        <Depoiments />
        <Footer />

        <EnrollModal isOpen={isModalOpen} onClose={closeModal} />
      </GlobeProvider>
    </div>
  );
}