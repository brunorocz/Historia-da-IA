# Diretório de Componentes (`src/components`)

Esta pasta contém os componentes modulares e reutilizáveis do React que constituem a interface da aplicação.

## Componentes

- [HeroSection.tsx](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/src/components/HeroSection.tsx): Componente da **primeira dobra** da aplicação. Renderiza o vídeo de plano de fundo da criação orgânica do rosto robótico de IA, overlays de vidro (glassmorphism), título com gradiente futurista, badges e botão de scroll para a linha do tempo.
- [InteractiveWaveBackground.tsx](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/src/components/InteractiveWaveBackground.tsx): Renderizador 3D em Canvas com constelações de nós, ondas de fundo e rotação interativa acompanhando o cursor do usuário.
- [Timeline.tsx](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/src/components/Timeline.tsx): Container principal da linha do tempo. Orquestra a animação sequencial dos cartões ao realizar o scroll da tela usando **GSAP ScrollTrigger**.
- [EraCard.tsx](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/src/components/EraCard.tsx): Cartão tridimensional individual de cada época. Implementa um efeito hover dinâmico em 3D, inclinando o card sutilmente em relação ao cursor usando animações da biblioteca **GSAP**.
- [GridBackground.tsx](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/src/components/GridBackground.tsx): Gera o background estilizado em grade (grid) futurista com luzes suaves para sustentar a estética premium e espacial.
- [Footer.tsx](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/src/components/Footer.tsx): Rodapé da página contendo a assinatura do desenvolvedor com gradiente de transição premium (`Created by Bruno Vieira`).

## Tecnologias e Animações

Os componentes utilizam **GSAP** (GreenSock Animation Platform), **HTML5 3D Canvas** e **Vídeo H.264 Autoplay** para interações de alta performance, mantendo o visual dinâmico e weightless do projeto.
