import { HeroSection } from './components/HeroSection';
import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { InteractiveWaveBackground } from './components/InteractiveWaveBackground';
import { ChloeCompanion } from './components/ChloeCompanion';

function App() {
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden bg-slate-950 text-slate-100">
      {/* Background 3D Interativo (Ondas + Rosto Robótico em Canvas) */}
      <InteractiveWaveBackground />

      <main className="relative z-10 flex flex-col min-h-screen">
        {/* PRIMEIRA DOBRA: VÍDEO DE PLANO DE FUNDO (CRIAÇÃO ORGÂNICA DA IA) */}
        <HeroSection />

        {/* CONTEÚDO PRINCIPAL: LINHA DO TEMPO DA IA */}
        <div id="timeline" className="flex-grow pt-12">
          <Timeline />
        </div>

        {/* ASSISTENTE VIRTUAL HOLOGRÁFICO FIXO (CHLOE DETROIT: BECOME HUMAN) */}
        <ChloeCompanion />

        {/* RODAPÉ COM ASSINATURA E GRADIENTE */}
        <Footer />
      </main>
    </div>
  );
}

export default App;
