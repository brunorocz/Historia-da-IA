import { Timeline } from './components/Timeline';
import { Footer } from './components/Footer';
import { InteractiveWaveBackground } from './components/InteractiveWaveBackground';

function App() {
  return (
    <div className="min-h-screen relative w-full overflow-x-hidden bg-slate-950 text-slate-100">
      {/* Fundo fluido interativo estilo McKinsey (Ondas Generativas + Partículas) */}
      <InteractiveWaveBackground />

      <main className="relative z-10 flex flex-col min-h-screen">
        <div className="flex-grow">
          <Timeline />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
