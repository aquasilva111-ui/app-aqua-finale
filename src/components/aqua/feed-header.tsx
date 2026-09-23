/**
 * AQUA Feed Header — Exemplo de uso do Feed Mode
 * Header do feed com seletor de modo
 */

import { useState } from "react";
import { FeedModePill, type FeedMode } from "./feed-mode-pill";
import { FeedModeSelector } from "./feed-mode-selector";
import { cn } from "@/lib/utils";

// ===== Props =====

interface FeedHeaderProps {
  title?: string;
  mode: FeedMode;
  onModeChange: (mode: FeedMode) => void;
  variant?: "pill" | "dropdown";
  className?: string;
}

// ===== Componente =====

export function FeedHeader({
  title = "Feed",
  mode,
  onModeChange,
  variant = "pill",
  className,
}: FeedHeaderProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-between border-b px-4 py-3",
        className
      )}
    >
      {/* Title */}
      <h1 className="text-lg font-semibold">{title}</h1>

      {/* Mode Selector */}
      {variant === "pill" ? (
        <FeedModePill value={mode} onChange={onModeChange} />
      ) : (
        <FeedModeSelector value={mode} onChange={onModeChange} />
      )}
    </div>
  );
}

// ===== Exemplo de Uso =====

export function FeedExample() {
  const [mode, setMode] = useState<FeedMode>("stream");

  return (
    <div className="h-screen flex flex-col">
      <FeedHeader
        title="For You"
        mode={mode}
        onModeChange={setMode}
        variant="pill"
      />

      {/* Feed Content */}
      <div className="flex-1 overflow-y-auto p-4">
        {/* Renderizar feed baseado no modo */}
        <div className="text-center text-muted-foreground py-12">
          <p>Feed mode: {mode}</p>
          <p className="text-sm mt-2">
            Implementar renderizadores para cada modo
          </p>
        </div>
      </div>
    </div>
  );
}

// ===== Export =====

export default FeedHeader;
