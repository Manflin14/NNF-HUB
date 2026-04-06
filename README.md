# NNF HUB — Builds & Estratégias Competitivas

Hub profissional de builds, composições e estratégias para jogos competitivos.

## Jogos Suportados

- **EA FC 26 Pro Clubs** — Builds otimizados por posição com atributos, Play Styles, skill points e dicas de meta
- **Teamfight Tactics (Set 16)** — Composições meta, tier lists, itens BIS, posicionamento e guias por fase

## Stack

- **Frontend**: Next.js 15 (App Router) + React 19
- **Estilização**: TailwindCSS 4 com design system customizado (CSS variables)
- **Backend**: Next.js API Routes (serverless)
- **Database**: MongoDB + Mongoose
- **Autenticação**: JWT via cookies (httpOnly) com `jose`
- **Validação**: Zod
- **Linguagem**: TypeScript (strict)

## Como Rodar

```bash
# 1. Instalar dependências
npm install

# 2. Copiar env vars
cp .env.example .env
# Edite MONGODB_URI e JWT_SECRET

# 3. Rodar em desenvolvimento (com Turbopack)
npm run dev

# 4. Build de produção
npm run build
npm start
```

## Estrutura do Projeto

```
src/
├── app/                          # Next.js App Router (rotas = páginas + API)
│   ├── layout.tsx                # Root layout (Navbar + Footer + Fonts)
│   ├── page.tsx                  # Home — Landing dashboard
│   ├── ea-fc/
│   │   ├── page.tsx              # Página principal EA FC com índice de builds
│   │   └── busca/page.tsx        # Busca de builds com filtros
│   ├── posicao/[slug]/page.tsx   # Build detail (slug dinâmico)
│   ├── tft/
│   │   ├── page.tsx              # Página principal TFT com tier list
│   │   └── busca/page.tsx        # Busca de comps com filtros
│   ├── tft/[id]/page.tsx         # Comp detail (slug dinâmico)
│   ├── login/page.tsx            # Login
│   ├── register/page.tsx         # Cadastro
│   ├── dashboard/page.tsx        # Dashboard com estatísticas
│   ├── perfil/[id]/page.tsx      # Profile do usuário
│   └── api/                      # API Routes (REST)
│       ├── auth/
│       │   ├── login/route.ts    # POST — Login com JWT cookie
│       │   ├── register/route.ts # POST — Registro com bcrypt
│       │   ├── session/route.ts  # GET — Verifica sessão atual
│       │   └── logout/route.ts   # POST — Logout (delete cookie)
│       ├── builds/route.ts       # GET — Lista builds com filtros
│       ├── builds/[id]/like/     # POST — Votar em build
│       ├── builds/[id]/comments/ # GET/POST — Comentários
│       ├── tft-comps/route.ts    # GET — Lista comps com filtros
│       ├── tft-comps/[id]/like/  # POST — Votar em comp
│       └── search/route.ts       # GET — Busca global
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx            # Header com navegação + auth
│   │   ├── GameSidebar.tsx       # Sidebar de navegação por jogo
│   │   └── Footer.tsx            # Footer com links
│   ├── ui/                       # Primitive UI components
│   │   ├── Button.tsx            # Button com variants (primary/secondary/ghost/danger)
│   │   ├── Input.tsx             # Input com label, icon, error
│   │   ├── TagBadge.tsx          # Badge de tags (meta, competitivo, etc.)
│   │   ├── TierTag.tsx           # Badge de tier (S/A/B/C/D)
│   │   ├── GameCard.tsx          # Card de jogo na home
│   │   └── Breadcrumbs.tsx       # Navegação breadcrumb
│   ├── ea-fc/
│   │   ├── BuildCard.tsx         # Card de build no índice
│   │   └── BuildDetail.tsx       # Build detail com tabs
│   └── tft/
│       ├── CompCard.tsx          # Card de comp no índice
│       ├── CompDetail.tsx        # Comp detail (sinergias, itens)
│       └── TFTHexBoard.tsx       # Board hex de posicionamento
├── data/                         # Dados estáticos (seed data)
│   ├── builds.ts                 # Builds de EA FC Pro Clubs
│   └── tft-comps.ts              # Composições TFT
├── hooks/                        # React hooks customizados
│   ├── useAuth.ts                # Auth state + login/register/logout
│   ├── useLocalStorage.ts        # Persistência local genérica
│   └── useDebounce.ts            # Debounce para busca
├── lib/                          # Core utilities
│   ├── db.ts                     # MongoDB connection singleton
│   ├── auth.ts                   # JWT create/verify/session
│   └── validation.ts             # Zod schemas
├── models/                       # Mongoose schemas
│   ├── index.ts                  # Model registration
│   ├── User.ts                   # Schema do usuário
│   ├── Build.ts                  # Schema de build EA FC
│   ├── TFTComp.ts               # Schema de comp TFT
│   └── Comment.ts               # Schema de comentário
├── types/                        # TypeScript type definitions
│   ├── index.ts                  # Types EA FC + User + Search
│   └── tft.ts                    # Types TFT
├── utils/
│   └── helpers.ts                # Slugify, configs, formatters
└── styles/
    └── globals.css               # TailwindCSS + tema customizado + animações
```

## Banco de Dados

### MongoDB — Schemas Principais

**User**: username, email, passwordHash, avatar, level, experience, reputation, favorites[], role

**Build**: name, slug, position, game, height, weight, archetype, preferredFoot, skillPoints, maxRating, attributes, playStyles[], playStylePlus[], description, tips[], tags[], votes

**TFTComp**: name, slug, tier, patch, difficulty, description, coreChampions[], synergies[], carryItems, positioning[], guide{early,mid,late}, augments[], votes, trending, tags

**Comment**: contentId, contentType, userId, username, content, votes

## Design System

Tema escuro com variáveis CSS customizadas (`src/styles/globals.css`):
- **Game colors**: Verde (EA FC), Roxo (TFT)
- **Tier colors**: S=Vermelho, A=Laranja, B=Amarelo, C=Azul, D=Cinza
- **Tag colors**: Meta=Verde, Off-Meta=Laranja, Competitivo=Vermelho, etc.
- **Typography**: Inter (sans) + JetBrains Mono (code)

## Expansão Futura

- Adicionar novo jogo: criar pasta `src/app/{game}/`, adicionar ao `GAMES` em `utils/helpers.ts`
- Adicionar nova build: adicionar entry em `src/data/builds.ts`
- Adicionar nova comp: adicionar entry em `src/data/tft-comps.ts`
- O sistema de módulos é plug-and-play por design

## Deploy

**Vercel** (recomendado):
```bash
npx vercel
```

**Variáveis de ambiente**:
- `MONGODB_URI` — conexão MongoDB (mongo atlas, etc.)
- `JWT_SECRET` — chave secreta para JWT production
- `NODE_ENV=production`

## Licença

Projeto não oficial — não afiliado à EA Sports, Riot Games ou qualquer outra empresa.
Feito pela comunidade, para a comunidade.
