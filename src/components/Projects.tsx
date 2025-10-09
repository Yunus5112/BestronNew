import { useCallback, useMemo, useState } from "react";
import { Container } from "./ui/Container";
import { useT } from "../i18n/I18nProvider";
import projectBackgroundImage from "../assets/images/projectBackgroundImage";

const asset = (name: string) => new URL(`../assets/images/projects/${name}`, import.meta.url).href;

const images = [asset("image1.png"), asset("image2.png"), asset("image3.png")];

export const Projects = () => {
  const t = useT();
  const [idx, setIdx] = useState(0);
  const len = images.length;
  const at = useCallback((i: number) => images[((i % len) + len) % len], [len]);
  const prev = useMemo(() => at(idx - 1), [idx, at]);
  const current = useMemo(() => at(idx), [idx, at]);
  const next = useMemo(() => at(idx + 1), [idx, at]);

  return (
    <section className="relative overflow-hidden py-8 sm:py-10 lg:py-12" style={{ backgroundColor: '#F6F8FF' }}>
          {/* background - centered and scaled */}
          <div 
            className="absolute left-1/2 -translate-x-1/2 top-4 -z-10 w-[680px] sm:w-[840px] lg:w-[980px] h-auto opacity-90 pointer-events-none"
            dangerouslySetInnerHTML={{ __html: projectBackgroundImage }}
          />
      <Container>
        {/* Title row with arrows aligned to heading */}
        <div className="mb-6 sm:mb-8 flex items-center justify-between">
          <button
            type="button"
            aria-label="Önceki"
            className="h-11 w-11 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-white ml-16 sm:ml-28 lg:ml-40"
            onClick={() => setIdx((v) => v - 1)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M15 6l-6 6 6 6" stroke="#0C176C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <h2 className="text-[60px] leading-[1.2] font-semibold text-primary text-center">{t("projects.title") || "Projeler"}</h2>
          <button
            type="button"
            aria-label="Sonraki"
            className="h-11 w-11 rounded-full bg-white/80 shadow flex items-center justify-center hover:bg-white mr-16 sm:mr-28 lg:mr-40"
            onClick={() => setIdx((v) => v + 1)}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M9 6l6 6-6 6" stroke="#0C176C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>

        <p className="mt-5 text-[18px] leading-[1.5] text-center max-w-4xl mx-auto text-[#8987A1]">{t("projects.description")}</p>

        {/* 3 kart: solda/sağda yarım, ortada tam */}
        <div className="relative mt-10 sm:mt-12 lg:mt-14">
          <div className="mx-auto max-w-6xl grid grid-cols-[.5fr_1fr_.5fr] items-center gap-6">
            <div className="rounded-2xl border border-slate-200 shadow bg-white overflow-hidden">
              <img src={prev} alt="Önceki proje" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl border border-slate-200 shadow-lg bg-white overflow-hidden">
              <img src={current} alt="Güncel proje" className="w-full h-full object-cover" />
            </div>
            <div className="rounded-2xl border border-slate-200 shadow bg-white overflow-hidden">
              <img src={next} alt="Sonraki proje" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;


