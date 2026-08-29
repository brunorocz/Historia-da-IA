# Diretório Público (`public`)

Esta pasta contém ativos estáticos globais servidos diretamente pelo servidor web e copiados para a raiz da compilação de produção sem modificações de nome ou hash.

## Conteúdo Ativo

- [favicon.svg](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/public/favicon.svg): Ícone vetorial da aba do navegador (Favicon).
- [assets/videos/](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/public/assets/videos/): Subpasta contendo os vídeos cinemáticos otimizados para web (`.mp4` e `.webm`).

## Observações

- O sprite legado `icons.svg` foi movido para a pasta `excluir/` pois a aplicação renderiza ícones via `lucide-react`.
- Recursos nesta pasta são acessados a partir da raiz `/` (exemplo: `/favicon.svg` e `/assets/videos/...`).
