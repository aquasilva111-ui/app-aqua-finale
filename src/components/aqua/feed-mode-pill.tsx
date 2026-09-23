/**
 * AQUA Feed Mode Selector — Pill Style
 * Versão compacta estilo pill navigation
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

// ===== Configuração =====

const FEED_MODES: FeedModeOption[] = [
  { value: "stream", label: "Stream", icon: LayoutList },
  { value: "cards", label: "Cards", icon: LayoutGrid },
  { value: "grid", label: "Grid", icon: Grid3X3 },
  { value: "media", label: "Media", icon: Image },
  { value: "compact", label: "Compact", icon: AlignLeft },
  { value: "editorial", label: "Editorial", icon: BookOpen },
];

// ===== Props =====

interface FeedModePillProps {
  value: FeedMode;
  onChange: (mode: FeedMode) => void;
  className?: string;
}

// ===== Componente =====

export function FeedModePill({ value, onChange, className }: FeedModePillProps) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const selectedMode = FEED_MODES.find((m) => m.value === value) || FEED_MODES[0];

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <div ref={containerRef} className={cn("relative", className)}>
      {/* Pill Button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "flex items-center gap-2 rounded-full border bg-background/80 backdrop-blur px-4 py-2 text-sm",
          "hover:bg-black/5 dark:hover:bg-white/10 transition-all",
          "focus:outline-none focus:ring-2 focus:ring-nazar/50",
          open && "ring-2 ring-nazar/50 bg-background"
        )}
      >
        <selectedMode.icon className="h-4 w-4 text-nazar" />
        <span className="font-medium">{selectedMode.label}</span>
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 text-muted-foreground transition-transform",
            open && "rotate-180"
          )}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute top-full left-0 mt-2 w-44 rounded-2xl border bg-background/95 backdrop-blur-xl shadow-xl z-50 overflow-hidden">
          {/* Options */}
          <div className="p-1.5">
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
                    "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left",
                    "transition-all",
                    isSelected
                      ? "bg-nazar/10 text-nazar"
                      : "hover:bg-black/5 dark:hover:bg-white/10"
                  )}
                >
                  <div
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg",
                      isSelected
                        ? "bg-nazar/20 text-nazar"
                        : "bg-muted text-muted-foreground"
                    )}
                  >
                    <mode.icon className="h-4 w-4" />
                  </div>
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

export default FeedModePill;
