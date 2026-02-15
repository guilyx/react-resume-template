// Erwin Lejeune - 2026-02-15

import type { Language } from "../types/resume";
import { Section } from "./Section";

interface LanguagesProps {
  languages: Language[];
}

/** Renders spoken / written languages with proficiency level. */
export function Languages({ languages }: LanguagesProps) {
  if (languages.length === 0) return null;

  return (
    <Section title="Languages">
      <ul className="space-y-1">
        {languages.map((lang, idx) => (
          <li key={idx} className="text-sm text-primary/85">
            <span className="font-semibold">{lang.name}</span>
            <span className="text-muted"> — {lang.proficiency}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}
