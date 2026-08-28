import { useRef, useEffect } from 'react';
import type { AIEra } from '../data/history';
import { Calendar, Cpu, Brain, Rocket, Atom, Network } from 'lucide-react';
import gsap from 'gsap';

interface EraCardProps {
  era: AIEra;
  index: number;
}

const icons = [Cpu, Brain, Network, Atom, Rocket, Calendar];

export const EraCard: React.FC<EraCardProps> = ({ era, index }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const Icon = icons[index % icons.length];

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    // 3D Hover Effect
    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;

      gsap.to(el, {
        rotateX,
        rotateY,
        duration: 0.5,
        ease: 'power2.out',
        transformPerspective: 1000,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(el, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.7,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      el.removeEventListener('mousemove', handleMouseMove);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="era-card glass shadow-antigravity rounded-2xl p-8 mb-16 relative w-full max-w-4xl mx-auto transform-gpu"
      style={{ willChange: 'transform' }}
    >
      <div className="absolute -top-6 -left-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/30 transform rotate-12">
        <Icon className="text-white w-8 h-8 -rotate-12" />
      </div>
      
      <div className="ml-8 mb-8 border-b border-white/10 pb-4">
        <h2 className="text-sm font-semibold tracking-widest text-sky-400 uppercase mb-2">{era.period}</h2>
        <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">{era.title}</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
        {era.events.map((event, i) => (
          <div key={i} className="group p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
            <div className="flex items-start gap-4">
              <span className="text-amber-400 font-mono text-sm mt-1">{event.year}</span>
              <div>
                <h4 className="text-lg font-medium text-gray-200 mb-2 group-hover:text-white transition-colors">{event.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
