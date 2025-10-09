import { useState } from "react";
import { cn } from "./lib/cn";
import { useI18n, type Lang } from "../i18n/I18nProvider";
import earth from "../assets/images/earth";

export const LanguageSwitcher = () => {
  const { lang, setLang } = useI18n();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 px-3 h-10 rounded-xl border border-slate-200 bg-white/70 hover:bg-white text-slate-700 shadow-sm"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
            <div 
              className="h-5 w-5"
              dangerouslySetInnerHTML={{ __html: earth }}
            />
        <span className="text-sm font-medium">{lang}</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 mt-2 w-28 rounded-xl border border-slate-200 bg-white shadow-lg overflow-hidden z-50"
        >
          {(["TR", "EN", "DE"]).map((code) => (
            <li key={code}>
              <button
                type="button"
                className={cn(
                  "w-full text-left px-4 py-2 text-sm hover:bg-slate-50",
                  code === lang && "text-blue-900 font-semibold"
                )}
                onClick={() => {
                  setLang(code as Lang);
                  setOpen(false);
                }}
                role="option"
                aria-selected={code === lang}
              >
                {code}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;


