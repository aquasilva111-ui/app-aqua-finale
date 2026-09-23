# Aqua

Rede social descentralizada construída sobre o [AT Protocol](https://atproto.com), usando o código do [Bluesky social-app](https://github.com/bluesky-social/social-app) (licença MIT) como ponto de partida.

## Estrutura do repositório

```
app-aqua-finale/
├── social-app-main/          # App Aqua (React Native + Expo → Web, iOS, Android)
├── bsky-reference/           # Referências do ecossistema AT Protocol
│   ├── atproto/              # Especificação e SDKs do protocolo
│   ├── pds/                  # Personal Data Server (contas, posts, dados)
│   ├── indigo/               # Serviços backend Go (relay, AppView)
│   ├── jetstream/            # Streaming de eventos da rede em tempo real
│   ├── ozone/                # Interface de moderação/rotulagem
│   ├── feed-generator/       # Starter kit de feeds personalizados
│   ├── cookbook/             # Exemplos e scripts de desenvolvimento
│   ├── deploy-recipes/       # Receitas de deploy da stack completa
│   ├── goat/                 # CLI oficial do AT Protocol
│   └── proposals/            # Propostas de evolução do protocolo
└── statusphere-example-app-main/  # App de exemplo mínimo (bom pra aprender)
```

## Stack

- **App**: React Native + Expo (TypeScript) — um código, três plataformas
- **Protocolo**: AT Protocol (identidades descentralizadas, dados portáteis)
- **Backend** (futuro): PDS próprio + relay + AppView (ver `bsky-reference/indigo` e `deploy-recipes`)
- **Pacotes**: pnpm (versão 11.x) · Node.js ≥ 24.19

## Rodando local

```bash
cd social-app-main
pnpm install
pnpm web        # abre o app no navegador (modo dev)
```

## Deploy

O build gera arquivos estáticos em `social-app-main/dist/`, compatíveis com qualquer hospedagem estática.

### Netlify (zero config)

O `netlify.toml` já está na raiz. Basta conectar o repositório em [app.netlify.com](https://app.netlify.com) — sem nenhuma configuração manual.

### Vercel

O arquivo `vercel.json` já configura a instalação, o build e o diretório de saída. Conecte o repositório pela raiz e deixe os comandos padrão da Vercel. As rotas do app também são encaminhadas para `index.html` para que links diretos continuem abrindo.

### Outras opções

- **Cloudflare Pages**: build `pnpm build-web` (diretório `social-app-main`), output `dist`
- **Railway / Render**: servir a pasta `dist/` com um servidor estático

## Roadmap

- [x] Base do código no GitHub
- [x] Deploy de demonstração (web)
- [ ] **Rebrand Aqua**: nome, ícones, cores e splash screen (ver `social-app-main/app.config.js`)
- [ ] Configurar servidores próprios (PDS + relay + AppView) com `deploy-recipes`
- [ ] Publicar apps iOS/Android com EAS
- [ ] Feeds e moderação personalizados

## Licenças

O código do `social-app` é MIT. As referências têm licenças próprias (Apache 2.0, CC0 etc.) — veja o `LICENSE` de cada pasta antes de reutilizar código.
