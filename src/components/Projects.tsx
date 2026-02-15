// Erwin Lejeune - 2026-02-15

import type { Project } from "../types/resume";
import { Favicon } from "./Favicon";
import { Section } from "./Section";

interface ProjectsProps {
  projects: Project[];
}

/** Renders notable projects with tech-stack pills. */
export function Projects({ projects }: ProjectsProps) {
  if (projects.length === 0) return null;

  return (
    <Section title="Projects">
      <div className="space-y-4">
        {projects.map((project, idx) => (
          <div key={idx}>
            <h3 className="text-sm font-semibold text-primary inline-flex items-center gap-1.5">
              {project.url && <Favicon url={project.url} size={13} />}
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                >
                  {project.name}
                </a>
              ) : (
                project.name
              )}
            </h3>
            <p className="text-sm text-primary/85 mt-0.5 leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-1.5">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-block rounded-full bg-surface px-2.5 py-0.5 text-xs text-primary/80 border border-divider"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
