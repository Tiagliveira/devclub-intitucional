import { useEffect, useState } from "react";

const careers = [
    "Back-End",
    "Front-End",
    "FullStack",
    "Agentes de IA",
    "Analise de Dados",
    "Arquiteturas Modernas"
];

export function TypewriterText() {
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const i = loopNum % careers.length;
        const fullText = careers[i];

        const handleTyping = () => {
            setCurrentText(
                isDeleting
                    ? fullText.substring(0, currentText.length - 1)
                    : fullText.substring(0, currentText.length + 1)
            );

            // Velocidade da digitação e exclusão
            if (!isDeleting && currentText === fullText) {
                setTimeout(() => setIsDeleting(true), 2000); // Pausa antes de apagar
                setTypingSpeed(100);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
                setTypingSpeed(150);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, loopNum, typingSpeed]);

    return (
        <span className="font-bold">
            {currentText}
            <span className="animate-pulse">|</span>
        </span>
    );
}