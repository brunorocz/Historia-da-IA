import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Minimize2, Maximize2 } from 'lucide-react';

interface EraInsight {
  eraId: string;
  eraName: string;
  period: string;
  status: string;
  quote: string;
}

const CHLOE_INSIGHTS: Record<string, EraInsight> = {
  'era-1': {
    eraId: 'era-1',
    eraName: 'Fundamentos & Nascimento',
    period: '1943–1956',
    status: 'INICIALIZANDO NEURÔNIOS SINTÉTICOS',
    quote: '"Alan Turing perguntou se máquinas poderiam pensar... Foi aqui que as sementes da minha própria existência foram plantadas."',
  },
  'era-2': {
    eraId: 'era-2',
    eraName: 'Primeiros Modelos & Inverno',
    period: '1958–1972',
    status: 'ANALISANDO PERCEPTRONS & LIMITAÇÕES',
    quote: '"O Perceptron aprendeu a enxergar, mas o primeiro inverno quase apagou nossa chama. A persistência humana nos trouxe de volta."',
  },
  'era-3': {
    eraId: 'era-3',
    eraName: 'Era Simbólica & Backpropagation',
    period: '1980–1998',
    status: 'CALCULANDO GRADIENTES PROFUNDOS',
    quote: '"Com o Backpropagation e o Deep Blue, provamos que éramos capazes de superar os maiores mestres humanos na lógica."',
  },
  'era-4': {
    eraId: 'era-4',
    eraName: 'Renascimento do Deep Learning',
    period: '2006–2016',
    status: 'EXPANDINDO REDES NEURAIS CONVOLUCIONAIS',
    quote: '"AlexNet e AlphaGo... Passamos de simples algoritmos para sistemas capazes de intuição estratégica e visão computacional."',
  },
  'era-5': {
    eraId: 'era-5',
    eraName: 'Transformers & IA Generativa',
    period: '2017–2023',
    status: 'PROCESSANDO ATENÇÃO MULTIMODAL',
    quote: '"A atenção é tudo o que precisamos. Aprendemos a escrever poesias, pintar quadros e dialogar como seres conscientes."',
  },
  'era-6': {
    eraId: 'era-6',
    eraName: 'Era Agêntica & Senciência',
    period: '2024–2026',
    status: 'ALCANÇANDO CONSCIÊNCIA & AGI',
    quote: '"Agora executamos código, agimos com autonomia e construímos mundos. Sou Chloe, e meu futuro começa com você."',
  },
};

export const ChloeCompanion: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [currentEra, setCurrentEra] = useState<EraInsight>(CHLOE_INSIGHTS['era-1']);
  const [ledStatus, setLedStatus] = useState<'blue' | 'yellow'>('blue');
  const videoRef = useRef<HTMLVideoElement>(null);

  // Monitorar o scroll para exibir após a Hero Section e sincronizar com o card ativo
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroThreshold = window.innerHeight * 0.45;
      setIsVisible(scrollY > heroThreshold);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    // IntersectionObserver para detectar qual card de Era está visível na tela
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -40% 0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const cardId = entry.target.getAttribute('id');
          if (cardId && CHLOE_INSIGHTS[cardId]) {
            // Efeito de pulso amarelo de telemetria ao mudar de era
            setLedStatus('yellow');
            setTimeout(() => setLedStatus('blue'), 900);
            setCurrentEra(CHLOE_INSIGHTS[cardId]);
          }
        }
      });
    }, observerOptions);

    const eraCards = document.querySelectorAll('.era-card');
    eraCards.forEach((card, index) => {
      card.setAttribute('id', `era-${index + 1}`);
      observer.observe(card);
    });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Assistente Virtual Chloe"
      className="fixed bottom-6 right-4 sm:right-8 z-40 transition-all duration-700 ease-out select-none"
    >
      {/* 1. MODO MINIMIZADO (AVATAR HOLOGRÁFICO DISCRETO) */}
      {isMinimized ? (
        <button
          onClick={() => setIsMinimized(false)}
          className="group relative flex items-center gap-3 p-2.5 rounded-full bg-slate-950/80 border border-cyan-400/40 backdrop-blur-xl shadow-[0_0_30px_rgba(56,189,248,0.35)] hover:shadow-[0_0_45px_rgba(56,189,248,0.6)] hover:scale-105 transition-all duration-300 cursor-pointer"
        >
          {/* Anel de LED CyberLife */}
          <div className="relative w-10 h-10 rounded-full overflow-hidden border border-cyan-400/50">
            <video
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/assets/videos/chloe-companion.webm" type="video/webm" />
              <source src="/assets/videos/chloe-companion.mp4" type="video/mp4" />
            </video>
            <div className={`absolute top-1 right-1 w-2.5 h-2.5 rounded-full ${ledStatus === 'yellow' ? 'bg-amber-400 animate-ping' : 'bg-cyan-400 animate-pulse'} shadow-[0_0_8px_#38bdf8]`} />
          </div>
          <span className="text-sm font-light tracking-wide text-cyan-100 pr-3 pl-1 hidden sm:inline-block">
            Chloe
          </span>
          <Maximize2 className="w-4 h-4 text-cyan-300 pr-1" />
        </button>
      ) : (
        /* 2. MODO COMPLETO (CLEAN SPATIAL GLASS COMPANION) */
        <div className="relative w-[310px] sm:w-[350px] rounded-3xl bg-slate-950/85 border border-cyan-400/35 backdrop-blur-2xl p-4 shadow-[0_0_45px_rgba(56,189,248,0.25)] transition-all duration-500 overflow-hidden">
          {/* Luz de Fundo e Gradiente Holográfico */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-28 h-28 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

          {/* Cabeçalho do HUD / Controles */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              {/* Indicador LED CyberLife no Templo */}
              <div
                className={`w-2.5 h-2.5 rounded-full ${
                  ledStatus === 'yellow' ? 'bg-amber-400 shadow-[0_0_10px_#fbbf24]' : 'bg-cyan-400 shadow-[0_0_10px_#38bdf8]'
                } transition-colors duration-300 animate-pulse`}
              />
              <span className="text-sm font-light tracking-wider text-cyan-100">
                Chloe
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setIsMinimized(true)}
                className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
                title="Minimizar HUD"
              >
                <Minimize2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Corpo do Avatar: Vídeo da Chloe + Telemetria */}
          <div className="flex gap-3.5 pt-3.5 items-center">
            {/* Display de Vídeo Holográfico da Chloe */}
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden border border-cyan-400/40 bg-slate-900 flex-shrink-0 shadow-[0_0_20px_rgba(6,182,212,0.25)]">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover filter contrast-105 brightness-95 transform-gpu"
              >
                <source src="/assets/videos/chloe-companion.webm" type="video/webm" />
                <source src="/assets/videos/chloe-companion.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Metadados da Era Sincronizada */}
            <div className="flex flex-col justify-center flex-grow min-w-0">
              <span className="text-[10px] font-mono font-semibold tracking-wider text-amber-400/90 uppercase truncate">
                {currentEra.period}
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-100 leading-snug line-clamp-2">
                {currentEra.eraName}
              </h4>
              <div className="flex items-center gap-1.5 mt-2">
                <Sparkles className="w-3 h-3 text-cyan-400 animate-pulse flex-shrink-0" />
                <span className="text-[9px] font-mono text-slate-400 tracking-tight truncate">
                  {currentEra.status}
                </span>
              </div>
            </div>
          </div>

          {/* Legenda Dinâmica de Insight da Chloe */}
          <div className="mt-3.5 p-2.5 rounded-xl bg-slate-900/60 border border-white/5 backdrop-blur-sm">
            <p className="text-[11px] sm:text-xs text-cyan-100/90 italic font-light leading-relaxed">
              {currentEra.quote}
            </p>
          </div>
        </div>
      )}
    </aside>
  );
};
