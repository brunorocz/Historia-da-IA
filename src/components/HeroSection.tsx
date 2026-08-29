import React from 'react';
import { Sparkles, ChevronDown, Cpu, ArrowDown } from 'lucide-react';

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
      {/* 1. VÍDEO DE PLANO DE FUNDO OTIMIZADO PARA ALTO DESEMPENHO (WEBM / MP4 FASTSTART) */}
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

      {/* 2. OVERLAYS DE GRADIENTE (SEM LAGGING DE BACKDROP BLUR HEAVY) */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/75 via-slate-950/30 to-slate-950 z-1 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-slate-950/30 to-slate-950/85 z-1 pointer-events-none" />

      {/* 3. HEADER NAVEGAÇÃO DA PRIMEIRA DOBRA */}
      <header className="relative z-10 w-full max-w-7xl px-6 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-3 group cursor-pointer">
          <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-400/30 backdrop-blur-md group-hover:border-cyan-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]">
            <Cpu className="w-5 h-5 text-cyan-400 animate-pulse" />
          </div>
          <span className="font-bold text-lg tracking-wider text-slate-100 uppercase">
            Fluxograma <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-amber-400">IA</span>
          </span>
        </div>

        <div className="hidden sm:flex items-center space-x-2 px-4 py-1.5 rounded-full border border-white/10 bg-slate-900/60 backdrop-blur-sm text-xs font-medium text-slate-300">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
          <span>Experiência Imersiva Antigravity</span>
        </div>
      </header>

      {/* 4. CONTEÚDO PRINCIPAL (HERO CONTENT) */}
      <div className="relative z-10 max-w-4xl px-6 text-center flex flex-col items-center my-auto pt-8">
        {/* Badge Futurista */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/70 border border-cyan-500/30 backdrop-blur-md mb-6 shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:border-cyan-400/60 transition-all duration-500">
          <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold tracking-wide text-cyan-200">
            A Jornada da Inteligência Artificial • Da Origem ao Futuro
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1] drop-shadow-2xl">
          Evolução &amp; Fluxograma <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 via-amber-400 to-orange-500">
            da Inteligência Artificial
          </span>
        </h1>

        {/* Subtítulo */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl font-normal leading-relaxed mb-8 bg-slate-950/40 p-4 rounded-2xl border border-white/10 backdrop-blur-xs">
          Explore a linha do tempo interativa da Inteligência Artificial — desde os primórdios teóricos de Alan Turing até a era das IAs Generativas e Agentes Autônomos.
        </p>

        {/* Botão CTA */}
        <button
          onClick={scrollToTimeline}
          className="group relative inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-300 bg-gradient-to-r from-cyan-500 to-sky-600 rounded-full shadow-[0_0_30px_rgba(56,189,248,0.4)] hover:shadow-[0_0_50px_rgba(56,189,248,0.7)] hover:scale-105 active:scale-95 overflow-hidden cursor-pointer"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative z-10 flex items-center gap-3">
            Explorar Linha do Tempo
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
          </span>
        </button>
      </div>

      {/* 5. INDICADOR ANAMADO DE SCROLL NO RODAPÉ DA PRIMEIRA DOBRA */}
      <div className="relative z-10 pb-8 flex flex-col items-center gap-2 cursor-pointer opacity-80 hover:opacity-100 transition-opacity duration-300" onClick={scrollToTimeline}>
        <span className="text-xs font-mono tracking-widest text-slate-400 uppercase">Role para navegar</span>
        <div className="w-6 h-10 rounded-full border-2 border-cyan-400/40 flex justify-center p-1 backdrop-blur-xs">
          <div className="w-1.5 h-3 bg-cyan-400 rounded-full animate-bounce mt-1 shadow-[0_0_10px_rgba(56,189,248,0.8)]" />
        </div>
        <ChevronDown className="w-4 h-4 text-cyan-400 animate-pulse -mt-1" />
      </div>
    </section>
  );
};
