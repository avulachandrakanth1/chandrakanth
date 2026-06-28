"use client";

import { useEffect, useRef, useState } from "react";

interface ParsedValue {
  numeric: number;
  suffix: string;
  decimals: number;
}

function parseValue(value: string): ParsedValue {
  const match = value.match(/^(\d+(?:\.\d+)?)(.*)$/);
  if (!match) {
    return { numeric: 0, suffix: value, decimals: 0 };
  }

  const numeric = Number.parseFloat(match[1]);
  const decimals = match[1].includes(".") ? match[1].split(".")[1]?.length ?? 0 : 0;

  return { numeric, suffix: match[2], decimals };
}

interface UseCountUpOptions {
  duration?: number;
  enabled?: boolean;
}

export function useCountUp(
  value: string,
  { duration = 1400, enabled = true }: UseCountUpOptions = {},
): string {
  const parsed = parseValue(value);
  const [display, setDisplay] = useState(enabled ? "0" + parsed.suffix : value);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!enabled || hasAnimated.current) {
      setDisplay(value);
      return;
    }

    hasAnimated.current = true;
    const start = performance.now();

    const tick = (now: number): void => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - progress) ** 3;
      const current = parsed.numeric * eased;
      const formatted =
        parsed.decimals > 0
          ? current.toFixed(parsed.decimals)
          : Math.round(current).toString();

      setDisplay(`${formatted}${parsed.suffix}`);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  }, [duration, enabled, parsed.decimals, parsed.numeric, parsed.suffix, value]);

  return display;
}
