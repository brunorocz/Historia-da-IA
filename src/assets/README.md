# Diretório de Ativos (`src/assets`)

Esta pasta destina-se a recursos visuais, ícones e mídias estáticas importadas diretamente pelo código TypeScript/React e otimizadas pelo pipeline de build do Vite.

## Conteúdo Atual

Os arquivos legados e não utilizados (como logos de templates) foram movidos com segurança para a pasta `excluir/`.
Atualmente, os ativos de mídia direta (vídeos de alta performance) são servidos diretamente pela pasta [`public/assets/videos/`](file:///c:/Users/Bruno%20Vieira/OneDrive/%C3%81rea%20de%20Trabalho/Antigravity%20Projects/project_2%20-%20fluxograma%20IA/public/assets/videos/).

## Observações

- Recursos que necessitam de processamento pelo bundler (inlining, hashing de cache) devem ser posicionados nesta pasta.
- Recursos estáticos que devem ser servidos diretamente por URL estática sem hash ficam em `public/`.
