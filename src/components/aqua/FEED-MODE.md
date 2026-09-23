# AQUA Feed Mode — Documentação

## 🌊 Visão Geral

Componente para seleção do **modo de visualização do feed** (Feed Mode).

---

## 📦 Componentes

| Componente | Arquivo | Descrição |
|------------|---------|-----------|
| `FeedModeSelector` | `feed-mode-selector.tsx` | Dropdown clássico |
| `FeedModePill` | `feed-mode-pill.tsx` | Estilo pill (recomendado) |
| `FeedHeader` | `feed-header.tsx` | Header completo com exemplo |

---

## 🎨 Modos Disponíveis

| Modo | Ícone | Descrição |
|------|-------|-----------|
| `stream` | LayoutList | Feed vertical estilo social |
| `cards` | LayoutGrid | Cards de objetos mistos |
| `grid` | Grid3X3 | Grid de descoberta |
| `media` | Image | Foco em imagens |
| `compact` | AlignLeft | Lista densa |
| `editorial` | BookOpen | Estilo revista |

---

## 🚀 Uso

### Básico (Pill)

```tsx
import { FeedModePill, type FeedMode } from "@/components/aqua/feed-mode-pill";

const [mode, setMode] = useState<FeedMode>("stream");

<FeedModePill value={mode} onChange={setMode} />
```

### Dropdown

```tsx
import { FeedModeSelector } from "@/components/aqua/feed-mode-selector";

<FeedModeSelector value={mode} onChange={setMode} />
```

### Header Completo

```tsx
import { FeedHeader } from "@/components/aqua/feed-header";

<FeedHeader
  title="For You"
  mode={mode}
  onModeChange={setMode}
  variant="pill"
/>
```

---

## 🎯 Props

### FeedModePill / FeedModeSelector

| Prop | Tipo | Descrição |
|------|------|-----------|
| `value` | `FeedMode` | Modo atual |
| `onChange` | `(mode: FeedMode) => void` | Callback de mudança |
| `className` | `string` | Classes extras |

### FeedHeader

| Prop | Tipo | Descrição |
|------|------|-----------|
| `title` | `string` | Título do feed |
| `mode` | `FeedMode` | Modo atual |
| `onModeChange` | `(mode: FeedMode) => void` | Callback |
| `variant` | `"pill" \| "dropdown"` | Estilo do seletor |

---

## 🎨 Customização

### Adicionar Novo Modo

```typescript
// Em feed-mode-pill.tsx ou feed-mode-selector.tsx
const FEED_MODES: FeedModeOption[] = [
  // ... modos existentes
  { value: "timeline", label: "Timeline", icon: Clock },
];
```

### Mudar Ícones

```typescript
import { YourIcon } from "lucide-react";

{ value: "stream", label: "Stream", icon: YourIcon },
```

---

## 📱 Responsividade

- **Mobile**: Pill ocupa largura total
- **Desktop**: Pill alinhado à direita
- **Touch**: Área de toque mínima 44x44px

---

## ♿ Acessibilidade

- ✅ Navegação por teclado (Tab, Enter, Escape)
- ✅ ARIA labels
- ✅ Focus visible
- ✅ Screen reader friendly

---

## 🔧 Integração com Feed

```tsx
function Feed() {
  const [mode, setMode] = useState<FeedMode>("stream");

  return (
    <div>
      <FeedHeader mode={mode} onModeChange={setMode} />
      
      {/* Renderizadores por modo */}
      {mode === "stream" && <StreamView />}
      {mode === "grid" && <GridView />}
      {mode === "cards" && <CardsView />}
      {/* ... */}
    </div>
  );
}
```

---

*Documentação gerada em: 2026-09-22*
*Versão: 1.0.0*
