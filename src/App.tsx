// Erwin Lejeune - 2026-02-15

import { useEffect, useRef } from "react";
import { resumeData } from "./data/resume";
import {
  DownloadButton,
  Header,
  ProfessionalSummary,
  WorkExperience,
  Publications,
  EducationSection,
  Skills,
  Projects,
  Languages,
} from "./components";
import { generateResumePdf, toResumeFilename } from "./lib/generatePdf";

/**
 * Single-page resume application.
 *
 * The layout mirrors a traditional CV:
 *  - A two-column grid on desktop (main content left, sidebar right).
 *  - Stacked single column on mobile / print.
 *
 * Optional sections (projects, publications, languages) are only
 * rendered when their corresponding arrays contain data.
 *
 * Append `?download` to the URL to auto-generate and download the PDF
 * (e.g. `https://yoursite.com/?download`).
 */
export default function App() {
  const {
    name,
    title,
    summary,
    contact,
    experience,
    education,
    skills,
    publications = [],
    projects = [],
    languages = [],
  } = resumeData;

  const hasAutoDownloaded = useRef(false);

  useEffect(() => {
    if (hasAutoDownloaded.current) return;
    const params = new URLSearchParams(window.location.search);
    if (!params.has("download")) return;

    hasAutoDownloaded.current = true;

    // Short delay so fonts and images finish loading before capture.
    const timer = setTimeout(async () => {
      const page = document.querySelector(".page") as HTMLElement | null;
      if (!page) return;
      await generateResumePdf(page, toResumeFilename(name));
    }, 1500);

    return () => clearTimeout(timer);
  }, [name]);

  return (
    <>
      <DownloadButton name={name} />
      <div className="page">
        <div className="px-5 py-8 sm:px-10 sm:py-10 md:px-14 md:py-12">
          <Header name={name} title={title} contact={contact} />

          <div className="grid grid-cols-1 md:grid-cols-[1fr_240px] gap-x-10 gap-y-2">
            {/* ---- Main column ---- */}
            <div>
              <ProfessionalSummary summary={summary} />
              <WorkExperience experience={experience} />
              {projects.length > 0 && <Projects projects={projects} />}
            </div>

            {/* ---- Sidebar ---- */}
            <aside>
              <Skills skills={skills} />
              <EducationSection education={education} />
              {publications.length > 0 && <Publications publications={publications} />}
              {languages.length > 0 && <Languages languages={languages} />}
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
