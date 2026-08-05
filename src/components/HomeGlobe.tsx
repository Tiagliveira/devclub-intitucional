import { useEffect, useRef } from 'react';

interface TechNode {
    x: number; y: number; z: number;
    px: number; py: number; scale: number;
    label: string; color: string; isHovered: boolean;
}

interface BackgroundParticle {
    x: number; y: number; z: number;
    px: number; py: number; scale: number;
}

export default function HomeGlobe() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    const targetRadius = useRef(0);
    const currentRadius = useRef(0);

    const mouse = useRef({
        x: -1000, y: -1000,
        vx: 0, vy: 0,
        lastX: 0, lastY: 0,
        isDown: false
    });

    const rotation = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;


        const parent = canvas.parentElement;
        const updateCanvasSize = () => {
            if (!parent) return;
            canvas.width = parent.clientWidth;
            canvas.height = parent.clientHeight;
        };
        updateCanvasSize();

        let width = canvas.width;
        let height = canvas.height;

        // 1. Inicializa Partículas
        const particles: BackgroundParticle[] = [];
        const particleCount = 600;
        for (let i = 0; i < particleCount; i++) {
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(Math.random() * 2 - 1);
            particles.push({
                x: Math.sin(phi) * Math.cos(theta),
                y: Math.sin(phi) * Math.sin(theta),
                z: Math.cos(phi),
                px: 0, py: 0, scale: 0
            });
        }


        const techs = [
            { label: 'React.js', color: '#00FF88' },
            { label: 'TypeScript', color: '#10B981' },
            { label: 'JavaScript', color: '#00FF88' },
            { label: 'Node.js', color: '#10B981' },
            { label: 'Nest.js', color: '#00FF88' },
            { label: 'Fastify', color: '#10B981' },
            { label: 'Firebase', color: '#00FF88' },
            { label: 'Material UI', color: '#10B981' },
            { label: 'Next.js', color: '#00FF88' },
            { label: 'N8N Automação', color: '#10B981' },
            { label: 'Faculdade Sirius', color: '#00FF88' },
            { label: 'Docker', color: '#10B981' },
            { label: 'AI Agents', color: '#00FF88' },
            { label: 'PostgreSQL', color: '#10B981' },
            { label: 'Prisma ORM', color: '#00FF88' },
            { label: 'Tailwind CSS', color: '#10B981' },
            { label: 'React Native', color: '#00FF88' },
            { label: 'HTML', color: '#10B981' },
            { label: 'CSS', color: '#00FF88' },
            { label: 'MBA', color: '#10B981' },
            { label: 'Analise de Dados', color: '#00FF88' },
            { label: 'Machine Learning', color: '#10B981' },
            { label: 'Data Science', color: '#00FF88' },
            { label: 'python', color: '#10B981' },


        ];

        const techNodes: TechNode[] = [];
        techs.forEach((t, i) => {
            const phi = Math.acos(-1 + (2 * i) / techs.length);
            const theta = Math.sqrt(techs.length * Math.PI) * phi;
            techNodes.push({
                x: Math.sin(phi) * Math.cos(theta),
                y: Math.sin(phi) * Math.sin(theta),
                z: Math.cos(phi),
                px: 0, py: 0, scale: 0,
                label: t.label, color: t.color, isHovered: false
            });
        });

        const baseAngleX = 0.001;
        const baseAngleY = 0.0015;

        const render = () => {
            ctx.clearRect(0, 0, width, height);

            const heroSection = document.getElementById('hero-section');
            let shouldShow = false;

            if (heroSection) {
                const rect = heroSection.getBoundingClientRect();
                shouldShow = rect.bottom > 0 && rect.top < window.innerHeight - 50;
            } else {
                shouldShow = true;
            }

            if (shouldShow) {
                targetRadius.current = Math.min(width, height) * 0.42;
            } else {
                targetRadius.current = 0;
            }

            currentRadius.current += (targetRadius.current - currentRadius.current) * 0.05;

            if (currentRadius.current > 1) {
                ctx.save();

                ctx.translate(width * 0.5, height * 0.5);

                let currentAngleX = baseAngleX;
                let currentAngleY = baseAngleY;

                if (mouse.current.isDown) {
                    mouse.current.vx = mouse.current.x - mouse.current.lastX;
                    mouse.current.vy = mouse.current.y - mouse.current.lastY;
                    currentAngleY = mouse.current.vx * 0.005;
                    currentAngleX = -mouse.current.vy * 0.005;
                } else {
                    mouse.current.vx *= 0.95;
                    mouse.current.vy *= 0.95;
                    currentAngleY += mouse.current.vx * 0.002;
                    currentAngleX -= mouse.current.vy * 0.002;
                }

                mouse.current.lastX = mouse.current.x;
                mouse.current.lastY = mouse.current.y;

                rotation.current.x += currentAngleX;
                rotation.current.y += currentAngleY;

                const cosX = Math.cos(rotation.current.x); const sinX = Math.sin(rotation.current.x);
                const cosY = Math.cos(rotation.current.y); const sinY = Math.sin(rotation.current.y);

                ctx.globalCompositeOperation = 'screen';

                particles.forEach((p) => {
                    const y1 = p.y * cosX - p.z * sinX; const z1 = p.z * cosX + p.y * sinX;
                    const x2 = p.x * cosY + z1 * sinY; const z2 = z1 * cosY - p.x * sinY;

                    const scale = 450 / (450 + z2 * currentRadius.current);
                    const px = x2 * currentRadius.current * scale;
                    const py = y1 * currentRadius.current * scale;

                    const mouseX = mouse.current.x - (width * 0.5);
                    const mouseY = mouse.current.y - (height * 0.5);
                    const dx = mouseX - px;
                    const dy = mouseY - py;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    let color = z2 > 0 ? 'rgba(6, 182, 212, 0.4)' : 'rgba(6, 182, 212, 0.08)';
                    let pSize = Math.max(0.6, scale * 2.2);

                    if (mouse.current.isDown && distance < 180) {
                        color = `rgba(139, 92, 246, ${z2 > 0 ? 0.7 : 0.2})`;
                    } else if (distance < 60) {
                        color = 'rgba(147, 51, 234, 0.95)';
                        pSize = scale * 4.0;
                    }

                    ctx.fillStyle = color;
                    ctx.beginPath();
                    ctx.arc(px, py, pSize, 0, 2 * Math.PI);
                    ctx.fill();
                });

                const rotatedTechNodes = techNodes.map(node => {
                    const y1 = node.y * cosX - node.z * sinX; const z1 = node.z * cosX + node.y * sinX;
                    const x2 = node.x * cosY + z1 * sinY; const z2 = z1 * cosY - node.x * sinY;

                    const scale = 450 / (450 + z2 * currentRadius.current);
                    const px = x2 * currentRadius.current * scale;
                    const py = y1 * currentRadius.current * scale;

                    const mouseX = mouse.current.x - (width * 0.5);
                    const mouseY = mouse.current.y - (height * 0.5);
                    const dx = mouseX - px;
                    const dy = mouseY - py;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    return {
                        ...node, px, py, scale, zDepth: z2,
                        isHovered: mouse.current.x !== -1000 && distance < 40
                    };
                });

                rotatedTechNodes.sort((a, b) => b.zDepth - a.zDepth);

                rotatedTechNodes.forEach((node) => {
                    if (currentRadius.current < 50) return;

                    const alpha = Math.min(Math.max((node.scale - 0.4) * 1.5, 0.1), 0.98);
                    let nodeColor = node.color;
                    let textColor = `rgba(243, 244, 246, ${alpha})`;
                    let dotSize = Math.max(2.2, 4.5 * node.scale);

                    if (node.isHovered || (mouse.current.isDown && Math.abs(node.zDepth) < 0.4)) {
                        nodeColor = '#A78BFA';
                        textColor = '#C084FC';
                        dotSize = 7.5 * node.scale;

                        ctx.beginPath();
                        ctx.moveTo(0, 0); // Linha parte do centro (0,0) agora
                        ctx.lineTo(node.px, node.py);
                        ctx.strokeStyle = 'rgba(147, 51, 234, 0.4)';
                        ctx.lineWidth = 1.2;
                        ctx.stroke();
                    } else if (node.zDepth > 0) {
                        nodeColor = `rgba(16, 185, 129, ${alpha * 0.5})`;
                        textColor = `rgba(156, 163, 175, ${alpha * 0.6})`;
                    }

                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(node.px, node.py);
                    ctx.strokeStyle = node.isHovered ? 'rgba(147, 51, 234, 0.1)' : `rgba(6, 182, 212, ${alpha * 0.04})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();

                    ctx.beginPath();
                    ctx.arc(node.px, node.py, dotSize, 0, Math.PI * 2);
                    ctx.fillStyle = nodeColor;
                    if (node.isHovered) {
                        ctx.shadowColor = 'rgba(167, 139, 250, 0.9)';
                        ctx.shadowBlur = 14;
                    }
                    ctx.fill();
                    ctx.shadowBlur = 0;

                    const fontSize = Math.floor((node.isHovered ? 14 : 12) * node.scale);
                    ctx.font = `bold ${fontSize}px monospace`;
                    ctx.fillStyle = textColor;
                    ctx.textAlign = 'left';
                    ctx.fillText(`  ${node.label}`, node.px + 4, node.py + 4);
                });

                ctx.globalCompositeOperation = 'source-over';

                ctx.restore();
            }

            animationFrameId = requestAnimationFrame(render);
        };

        render();

        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.current.x = e.clientX - rect.left;
            mouse.current.y = e.clientY - rect.top;
        };
        const handleMouseDown = () => { mouse.current.isDown = true; };
        const handleMouseUp = () => { mouse.current.isDown = false; };
        const handleMouseLeave = () => {
            mouse.current.x = -1000; mouse.current.y = -1000;
            mouse.current.isDown = false;
        };
        const handleResize = () => {
            updateCanvasSize();
            if (canvas) {
                width = canvas.width;
                height = canvas.height;
            }
        };

        canvas.addEventListener('mousemove', handleMouseMove);
        canvas.addEventListener('mousedown', handleMouseDown);
        canvas.addEventListener('mouseup', handleMouseUp);
        canvas.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('resize', handleResize);

        return () => {
            cancelAnimationFrame(animationFrameId);
            canvas.removeEventListener('mousemove', handleMouseMove);
            canvas.removeEventListener('mousedown', handleMouseDown);
            canvas.removeEventListener('mouseup', handleMouseUp);
            canvas.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return <canvas ref={canvasRef} className="w-full h-full block bg-transparent cursor-grab active:cursor-grabbing" />;
}