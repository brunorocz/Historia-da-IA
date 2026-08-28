# 🚀 História da Inteligência Artificial - Linha do Tempo Interativa

Uma aplicação web premium, responsiva e dinâmica construída para mapear visualmente a evolução histórica da Inteligência Artificial. Desde as origens nos anos 1940 com os neurônios artificiais de McCulloch-Pitts até os modelos mundiais avançados e agentes autônomos de hoje.

---

## 🛠️ Tecnologias Principais

- **Core**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/) + [Vite](https://vite.dev/)
- **Estilização**: [Tailwind CSS v4](https://tailwindcss.com/) (Layout responsivo e variáveis CSS de tema escuro)
- **Animações**: [GSAP](https://greensock.com/gsap/) + [ScrollTrigger](https://greensock.com/scrolltrigger/) (Animações de entrada no scroll e efeito hover interativo 3D nos cartões)
- **Ícones**: [Lucide React](https://lucide.dev/)
- **Linter**: [Oxlint](https://oxc.rs/docs/guide/usage/linter/introduction.html)

---

## 📂 Arquitetura do Repositório

O projeto é organizado na seguinte estrutura de pastas. Cada pasta contém seu próprio arquivo `README.md` com explicações específicas:

```
├── public/                 # Ativos estáticos globais (favicon, etc.)
│   └── README.md
├── src/                    # Código-fonte da aplicação
│   ├── assets/             # Recursos de mídia otimizados pela build
│   │   └── README.md
│   ├── components/         # Componentes React modulares
│   │   └── README.md
│   ├── data/               # Arquivos de dados estáticos da linha do tempo
│   │   └── README.md
│   ├── styles/             # Estilos globais e folha do Tailwind v4
│   │   └── README.md
│   ├── App.tsx             # Layout estrutural e luzes do container raiz
│   ├── main.tsx            # Bootstrap React e tratamento de erros
│   └── README.md
├── package.json            # Dependências e scripts npm
├── tsconfig.json           # Configuração raiz do TypeScript
└── vite.config.ts          # Arquivo de configuração do bundler Vite
```

---

## ⚙️ Como Executar Localmente

### Pré-requisitos
Certifique-se de possuir o [Node.js](https://nodejs.org/) instalado em sua máquina.

### Passos de Instalação e Execução

1. **Instalar Dependências**
   ```bash
   npm install
   ```

2. **Iniciar Servidor de Desenvolvimento**
   ```bash
   npm run dev
   ```

3. **Verificar erros de linting**
   ```bash
   npm run lint
   ```

4. **Gerar Build de Produção**
   ```bash
   npm run build
   ```

---

<div align="center">
  <p>
    <strong>
      <span style="background: linear-gradient(to right, #38bdf8, #67e8f9, #fbbf24, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">
        Created by Bruno Vieira
      </span>
    </strong>
  </p>
</div>
