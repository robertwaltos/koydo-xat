// Auto-generated shim — re-exports from @/lib/xat/config
// This lets shared ecosystem components import from "@/lib/act/config"
import type { ExamConfig as _xat_Config } from "@/lib/xat/config";
import { EXAM_CONFIG as _raw } from "@/lib/xat/config";

// Normalise to the common shape expected by ecosystem components
export const EXAM_CONFIG = {
  ..._raw,
  examId: (_raw as {"examId"?: string; "slug"?: string}).examId ?? (_raw as {"slug"?: string}).slug ?? "xat",
  locale: (_raw as {"locale"?: string}).locale ?? "en",
  isRTL: (_raw as {"isRTL"?: boolean}).isRTL ?? false,
  themeColorDark: (_raw as {"themeColorDark"?: string}).themeColorDark ?? (_raw as {"themeColor"?: string}).themeColor ?? "#1E3A8A",
} as const;

export type ExamConfig = typeof EXAM_CONFIG;
