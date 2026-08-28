import { useEffect, useRef } from 'react';
import { historyData } from '../data/history';
import { EraCard } from './EraCard';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Timeline: React.FC = () => {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.era-card') as HTMLElement[];

      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { 
            y: 100, 
            opacity: 0, 
            rotateX: 10, 
            scale: 0.95 
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            scale: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, timelineRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={timelineRef} className="py-24 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="text-center mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-br from-white via-gray-200 to-gray-500 tracking-tight">
          A História da IA
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Uma jornada visual desde os primeiros neurônios artificiais até a era dos agentes autônomos e modelos mundiais.
        </p>
      </div>
      
      <div className="relative">
        {/* Linha vertical decorativa */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-sky-500/20 to-transparent -translate-x-1/2 hidden lg:block" />
        
        {historyData.map((era, index) => (
          <EraCard key={era.id} era={era} index={index} />
        ))}
      </div>
    </div>
  );
};
