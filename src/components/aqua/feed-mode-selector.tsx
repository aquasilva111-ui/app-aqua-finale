/**
 * AQUA Feed Mode Selector
 * Dropdown para selecionar o modo do feed
 * Design: Ícone + nome do modo
 */

import { useState, useRef, useEffect } from "react";
import {
  LayoutList,
  LayoutGrid,
  Grid3X3,
  Image,
  AlignLeft,
  BookOpen,
  ChevronDown,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

// ===== Tipos =====

export type FeedMode = "stream" | "cards" | "grid" | "media" | "compact" | "editorial";

interface FeedModeOption {
  value: FeedMode;
  label: string;
  icon: React.ElementType;
}

// ===== Configuração dos Modos =====

const FEED_MODES: FeedModeOption[] = [
  { value: "stream", label: "Stream", icon: LayoutList },
  { value: "cards", label: "Cards", icon: LayoutGrid },
  { value: "grid", label: "Grid", icon: Grid3X3 },
  { value: "media", label: "Media", icon: Image },
  { value: "compact", label: "Compact", icon: AlignLeft },
  { value: "editorial", label: "Editorial", icon: BookOpen },
];

// ===== Props =====

interface FeedModeSelectorProps {
  value: FeedMode;
  onChange: (mode: FeedMode) => void;
  className?: string;
}

// ===== Componente =====

export function FeedModeSelector({ value, onChange, className }: FeedModeSelectorProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedMode = FEED_MODES.find((m) => m.value === value) || FEED_MODES[0];

  // Fechar ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Fechar com Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-2 rounded-lg border bg-background px-3 py-2 text-sm",
          "hover:bg-black/5 dark:hover:bg-white/10 transition-colors",
          "focus:outline-none focus:ring-2 focus:ring-nazar/50",
          open && "ring-2 ring-nazar/50"
        )}
      >
        <selectedMode.icon className="h-4 w-4 text-nazar" />
        <span className="font-medium">{selectedMode.label}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-1 w-48 rounded-xl border bg-background shadow-lg z-50 overflow-hidden">
          {/* Header */}
          <div className="px-3 py-2 border-b bg-muted/50">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
              Mode
            </span>
          </div>

          {/* Options */}
          <div className="p-1">
            {FEED_MODES.map((mode) => {
              const isSelected = mode.value === value;
              return (
                <button
                  key={mode.value}
                  onClick={() => {
                    onChange(mode.value);
                    setOpen(false);
                  }}
                  className={cn(
                    "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left",
                    "transition-colors",
                    isSelected
                      ? "bg-nazar/10 text-nazar"
                      : "hover:bg-black/5 dark:hover:bg-white/10"
                  )}
                >
                  <mode.icon
                    className={cn(
                      "h-4 w-4",
                      isSelected ? "text-nazar" : "text-muted-foreground"
                    )}
                  />
                  <span className="flex-1 font-medium">{mode.label}</span>
                  {isSelected && <Check className="h-4 w-4 text-nazar" />}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ===== Export =====

export default FeedModeSelector;
