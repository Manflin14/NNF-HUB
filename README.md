# NNF HUB

Guia definitivo para builds meta do **EA FC 26 Pro Clubs** e composições do **TFT Set 16** (Patch 16.6).

Atributos, Play Styles, posicionamento de board, progressão por nível e dicas estratégicas para cada jogo — tudo atualizado e centralizado.

## Stack

- **Next.js 16** com App Router e Static Export
- **React 19** + **TypeScript**
- **Tailwind CSS 4** — design system com variáveis CSS customizadas
- **ESLint** — linting do código

## Como rodar localmente

```bash
# Instalar dependências
npm install

# Modo desenvolvimento (localhost:3000)
npm run dev

# Build estático (saída em /out)
npm run build

# Lint
npm run lint
```

## Build para produção

O projeto gera um site 100% estático com `output: 'export'`. A pasta `out/` pode ser hospedada em qualquer place (GitHub Pages, Vercel, Netlify, etc.).

## Estrutura de arquivos

```
src/
├── app/                    # Rotas do Next.js
│   ├── page.tsx            # Home — landing com links dos jogos
│   ├── ea-fc/page.tsx      # Página de índice de posições EA FC
│   ├── posicao/[slug]/     # Detalhe de uma posição (builds, atributos)
│   ├── tft/page.tsx        # Índice de composições TFT
│   └── tft/[id]/           # Detalhe de uma composição TFT
├── components/             # Componentes React reutilizáveis
│   ├── BuildCard.tsx       # Card de build EA FC
│   ├── AttributeGroups.tsx # Barras de atributos individuais
│   ├── ProgressionTable.tsx# Tabela de progressão por nível
│   ├── PlayStyleBadge.tsx  # Badge colorido de Play Style
│   └── tft/
│       ├── CompCard.tsx    # Card de composição TFT
│       └── TFTBoard.tsx    # Board hexagonal de posicionamento
├── data/                   # Dados estáticos (builds, comps)
│   ├── builds.ts           # 8 posições × 2 builds = 16 builds
│   └── tft-comps.ts        # 9 composições meta
├── lib/
│   └── tokens.ts           # Design tokens (cores, labels centralizados)
└── types/
    ├── index.ts            # Tipos EA FC (Position, Build, etc.)
    └── tft.ts              # Tipos TFT (TFTComp, TFTChampion, etc.)
```

## Deploy em GitHub Pages

1. Configure `NEXT_PUBLIC_BASE_PATH=/nome-do-repo` no `.env`
2. Rode `npm run build`
3. Rode o workflow de deploy (o `out/` vai para a branch `gh-pages`)

## Licença

Projeto não oficial — não afiliado à EA Sports, Riot Games ou qualquer outra empresa. Feito pela comunidade, para a comunidade.
