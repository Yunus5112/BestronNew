import { Container } from "./ui/Container";
import LanguageSwitcher from "./LanguageSwitcher";
import { useT } from "../i18n/I18nProvider";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo";

const navKeys = [
  { key: "nav.home", href: "/" },
  { key: "nav.about", href: "/about" },
  { key: "nav.services", href: "/services" },
  { key: "nav.projects", href: "/projects" },
  { key: "nav.sectors", href: "/sectors" },
  { key: "nav.why", href: "/why" },
  { key: "nav.contact", href: "/contact" },
] as const;

export const Header = () => {
  const t = useT();
  const location = useLocation();
  
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur supports-[backdrop-filter]:bg-white/50">
      <Container className="flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <div 
            className="h-10 w-auto"
            dangerouslySetInnerHTML={{ __html: logo }}
          />
        </Link>
        <div className="hidden md:flex items-center">
          <div className="flex items-center gap-6 text-slate-700 px-5 h-14 rounded-2xl border border-slate-200 bg-white/70 shadow-sm">
            <nav className="flex items-center gap-6">
              {navKeys.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`text-sm transition-colors ${
                      isActive 
                        ? "text-blue-900 font-bold" 
                        : "font-medium hover:text-blue-900"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                );
              })}
            </nav>
            <div className="w-px h-6 bg-slate-200" />
            <LanguageSwitcher />
          </div>
        </div>
        <div className="md:hidden" aria-hidden>
          {/* Placeholder for future mobile menu */}
          <button className="p-2 rounded-lg hover:bg-slate-100" aria-label="Menü">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </Container>
    </header>
  );
};

export default Header;


