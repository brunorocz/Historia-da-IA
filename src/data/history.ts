export interface AIEvent {
  year: string;
  title: string;
  description: string;
}

export interface AIEra {
  id: string;
  title: string;
  period: string;
  events: AIEvent[];
}

export const historyData: AIEra[] = [
  {
    id: "era-1",
    title: "Fundamentos & Nascimento da IA",
    period: "1943–1956",
    events: [
      {
        year: "1943",
        title: "Neurônio McCulloch-Pitts",
        description: "Primeiro modelo matemático de um neurônio biológico, estabelecendo as bases teóricas para as redes neurais artificiais."
      },
      {
        year: "1950",
        title: "O Teste de Turing",
        description: "Alan Turing publica 'Computing Machinery and Intelligence', introduzindo o Jogo da Imitação e a célebre pergunta: 'Máquinas podem pensar?'."
      },
      {
        year: "1956",
        title: "Dartmouth Workshop",
        description: "Conferência histórica onde John McCarthy, Marvin Minsky, Nathaniel Rochester e Claude Shannon cunham oficialmente o termo 'Inteligência Artificial'."
      }
    ]
  },
  {
    id: "era-2",
    title: "Primeiras Abordagens & A Primeira Frustração",
    period: "1958–1972",
    events: [
      {
        year: "1958",
        title: "O Perceptron",
        description: "Frank Rosenblatt cria o primeiro algoritmo prático capaz de aprender pesos a partir de dados em hardware dedicado (Mark I Perceptron)."
      },
      {
        year: "1966",
        title: "ELIZA",
        description: "Joseph Weizenbaum desenvolve o primeiro chatbot da história, simulando um psicoterapeuta Rogeriano por meio do casamento de padrões de texto."
      },
      {
        year: "1969",
        title: "O Livro 'Perceptrons' & O 1º Inverno da IA",
        description: "Marvin Minsky e Seymour Papert provam matematicamente que Perceptrons de camada única não resolvem funções não-lineares, cortando investimentos."
      },
      {
        year: "1972",
        title: "Linguagem PROLOG",
        description: "Alain Colmerauer desenvolve a linguagem PROLOG, impulsionando a programação lógica e a IA Simbólica."
      }
    ]
  },
  {
    id: "era-3",
    title: "A Era Simbólica & A Redescoberta das Redes Neurais",
    period: "1980–1998",
    events: [
      {
        year: "1980",
        title: "Sistemas Especialistas",
        description: "Adoção comercial massiva de sistemas baseados em regras do tipo 'SE-ENTÃO' para diagnósticos médicos e tomada de decisões."
      },
      {
        year: "1986",
        title: "Backpropagation",
        description: "Rumelhart, Hinton e Williams demonstram como treinar redes neurais multicamadas (MLPs), superando a limitação do XOR."
      },
      {
        year: "1987",
        title: "Colapso das Lisp Machines (2º Inverno)",
        description: "Falência do mercado de hardware dedicado a Sistemas Especialistas devido à alta inflexibilidade das regras manuais."
      },
      {
        year: "1997",
        title: "Deep Blue vs. Kasparov / LSTM",
        description: "A IBM vence o campeão mundial de xadrez Garry Kasparov. Hochreiter e Schmidhuber criam as redes Long Short-Term Memory (LSTM)."
      },
      {
        year: "1998",
        title: "LeNet-5 & CNNs",
        description: "Yann LeCun estabelece a base da visão computacional moderna ao aplicar convoluções no reconhecimento de dígitos numéricos."
      }
    ]
  },
  {
    id: "era-4",
    title: "O Renascimento do Aprendizado Profundo",
    period: "2006–2016",
    events: [
      {
        year: "2006",
        title: "Deep Belief Networks",
        description: "Geoffrey Hinton introduz técnicas de pré-treinamento não supervisionado, rebatizando e popularizando o campo como Deep Learning."
      },
      {
        year: "2012",
        title: "AlexNet & GPUs",
        description: "Krizhevsky, Sutskever e Hinton vencem o desafio ImageNet utilizando redes convolucionais paralelas em GPUs NVIDIA."
      },
      {
        year: "2013",
        title: "Word2Vec",
        description: "Tomas Mikolov (Google) cria representações vetoriais de palavras (embeddings), revolucionando a semântica em PLN."
      },
      {
        year: "2014",
        title: "GANs",
        description: "Ian Goodfellow propõe o treino simultâneo entre um Gerador e um Discriminador para criar dados sintéticos altamente realistas."
      },
      {
        year: "2015",
        title: "ResNet",
        description: "Kaiming He introduz conexões residuais, permitindo o treinamento estável de redes neurais ultraprofundas."
      },
      {
        year: "2016",
        title: "AlphaGo",
        description: "O sistema da DeepMind combina Aprendizado por Reforço Profundo e MCTS para derrotar o campeão mundial do jogo Go, Lee Sedol."
      }
    ]
  },
  {
    id: "era-5",
    title: "A Era dos Transformers & Mídia Generativa",
    period: "2017–2023",
    events: [
      {
        year: "2017",
        title: "Transformer (Attention Is All You Need)",
        description: "O Google publica o mecanismo de Auto-Atenção, permitindo a paralelização massiva de modelos de linguagem."
      },
      {
        year: "2018",
        title: "BERT",
        description: "O Google lança o BERT, estabelecendo o padrão de pré-treinamento bidirecional em linguagem natural."
      },
      {
        year: "2020",
        title: "GPT-3 & AlphaFold 2",
        description: "A OpenAI lança modelo de 175B parâmetros e a DeepMind resolve o desafio do dobramento de proteínas."
      },
      {
        year: "2022",
        title: "ChatGPT & Midjourney",
        description: "Lançamento do ChatGPT com RLHF e explosão dos Modelos de Difusão para geração de imagens fotorrealistas."
      },
      {
        year: "2023",
        title: "GPT-4 & Meta Llama",
        description: "Multimodalidade nativa e explosão Open-Source com a disponibilização dos pesos da família Llama."
      }
    ]
  },
  {
    id: "era-6",
    title: "Era Agêntica, MCP & Modelos Mundiais",
    period: "2024–2026",
    events: [
      {
        year: "2024",
        title: "MCP, Sora & Raciocínio (S2)",
        description: "Lançamento do Model Context Protocol, vídeo 3D com Sora e modelos de inferência deliberativa (Série 'o' e Claude 3.5 Sonnet)."
      },
      {
        year: "2025",
        title: "Agentes Autônomos de Execução",
        description: "Ferramentas como Claude Code e Devin passam a executar tarefas complexas de software em ciclos autônomos."
      },
      {
        year: "2026",
        title: "Modelos Mundiais & Swarms",
        description: "Consolidação de simuladores espaciais 3D operando ao lado de enxames agênticos autônomos para robótica e busca pela AGI."
      }
    ]
  }
];
