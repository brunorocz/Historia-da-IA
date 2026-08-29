import React from 'react';
import { Sparkles, ChevronDown, ArrowDown } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const scrollToTimeline = () => {
    const timelineElem = document.getElementById('timeline');
    if (timelineElem) {
      timelineElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[680px] flex flex-col justify-between items-center overflow-hidden z-10 select-none">
      {/* Estilos diretos de animação de gradiente contínuo e brilho neon */}
      <style>{`
        @keyframes livingGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .hero-living-text {
          background: linear-gradient(90deg, #38bdf8, #a5f3fc, #f59e0b, #67e8f9, #38bdf8);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: livingGradient 5s ease infinite;
        }
        .hero-title-gradient {
          background: linear-gradient(135deg, #ffffff 0%, #e0f2fe 30%, #38bdf8 70%, #0284c7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-glow-box {
          box-shadow: 0 0 35px rgba(56, 189, 248, 0.25), inset 0 0 15px rgba(56, 189, 248, 0.1);
        }
      `}</style>

      {/* 1. VÍDEO DE PLANO DE FUNDO OTIMIZADO (CRIAÇÃO ORGÂNICA DA IA) */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none filter brightness-90 contrast-105 scale-105 transform-gpu will-change-transform transition-opacity duration-1000"
      >
        <source src="/assets/videos/ai-organic-face.webm" type="video/webm" />
        <source src="/assets/videos/ai-organic-face.mp4" type="video/mp4" />
      </video>

      {/* 2. OVERLAYS DE GRADIENTE CINEMÁTICO */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/85 via-slate-950/25 to-slate-950 z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/40 to-slate-950/90 z-1 pointer-events-none" />

      {/* 3. ESPAÇAMENTO SUPERIOR MINIMALISTA */}
      <div className="relative z-10 w-full pt-12 px-6" />

      {/* 4. CONTEÚDO PRINCIPAL LUXUOSO E MINIMALISTA */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center my-auto">
        {/* Badge Futurista Vivo com Gradiente Animado Interativo */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-slate-950/70 border border-cyan-400/40 backdrop-blur-md mb-8 hero-glow-box transition-all duration-500 hover:scale-105 group cursor-default">
          <Sparkles className="w-4 h-4 text-cyan-300 animate-pulse group-hover:rotate-12 transition-transform duration-300" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] uppercase hero-living-text drop-shadow-[0_0_12px_rgba(56,189,248,0.5)]">
            A Jornada da Inteligência Artificial
          </span>
        </div>

        {/* Título Principal: 'A evolução da Inteligência Artificial' */}
        <h1 className="flex flex-col items-center justify-center mb-8 drop-shadow-2xl">
          <span className="text-sm sm:text-base md:text-lg font-light tracking-[0.45em] text-cyan-200/90 uppercase mb-3 drop-shadow-[0_0_20px_rgba(56,189,248,0.5)]">
            A Evolução da
          </span>
          <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tight hero-title-gradient drop-shadow-[0_0_50px_rgba(56,189,248,0.4)]">
            Inteligência Artificial
          </span>
        </h1>

        {/* Subtítulo Sofisticado */}
        <p className="text-sm sm:text-base text-slate-300/80 max-w-xl font-light leading-relaxed mb-10 bg-slate-950/50 px-6 py-3.5 rounded-2xl border border-white/10 backdrop-blur-xs">
          Explore a linha do tempo interativa da Inteligência Artificial — dos primórdios teóricos às IAs Generativas e Agentes Autônomos.
        </p>

        {/* Botão CTA Minimalista com Efeito Antigravity */}
        <button
          onClick={scrollToTimeline}
          className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium tracking-wide text-cyan-100 transition-all duration-500 bg-cyan-950/50 border border-cyan-400/40 rounded-full backdrop-blur-md shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:border-cyan-300 hover:scale-105 active:scale-95 overflow-hidden cursor-pointer"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-cyan-500/20 via-sky-500/30 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-3">
            Explorar Linha do Tempo
            <ArrowDown className="w-4 h-4 text-cyan-300 group-hover:translate-y-1 transition-transform duration-300" />
          </span>
        </button>
      </div>

      {/* 5. INDICADOR ANIMADO DE SCROLL NO RODAPÉ DA PRIMEIRA DOBRA */}
      <div
        className="relative z-10 pb-8 flex flex-col items-center gap-2 cursor-pointer opacity-70 hover:opacity-100 transition-opacity duration-300"
        onClick={scrollToTimeline}
      >
        <span className="text-[10px] font-mono tracking-[0.3em] text-slate-400/80 uppercase">Role para navegar</span>
        <div className="w-5 h-9 rounded-full border border-cyan-400/40 flex justify-center p-1 backdrop-blur-xs">
          <div className="w-1 h-2.5 bg-cyan-400/90 rounded-full animate-bounce mt-1 shadow-[0_0_8px_rgba(56,189,248,0.8)]" />
        </div>
        <ChevronDown className="w-3.5 h-3.5 text-cyan-400/80 animate-pulse -mt-1" />
      </div>
    </section>
  );
};
