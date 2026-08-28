import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const GridBackground = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;

    // Conecta a rolagem da página ao deslocamento do background-position
    gsap.to(el, {
      backgroundPosition: '0px 1000px', // Desloca a malha 1000px para dar o efeito de movimento
      ease: 'none',
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1, // 'scrub' suave vincula exatamente o scroll ao progresso da animação
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden" style={{ perspective: '1000px' }}>
      <div 
        ref={gridRef}
        className="absolute inset-0 w-full h-[200vh] -top-[50vh] opacity-15"
        style={{
          transform: 'rotateX(60deg) scale(2)',
          transformOrigin: 'center center',
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }}
      />
      {/* Máscara de fade no topo para sumir no escuro suavemente */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#0a0a0f]/50 to-[#0a0a0f] z-10" />
    </div>
  );
};
