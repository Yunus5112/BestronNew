import { Link, useLocation } from "react-router-dom";
import { Colors, Typography } from "../lib/theme";
import LanguageSwitcher from "../LanguageSwitcher";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ key: string; href: string }>;
  t: (key: string) => string;
}

export const MobileMenu = ({ isOpen, onClose, navItems, t }: MobileMenuProps) => {
  const location = useLocation();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Menu */}
      <div 
        className="fixed top-0 right-0 h-full w-[280px] bg-white shadow-2xl z-50 md:hidden"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-200">
          <h2 
            className="text-lg font-semibold"
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            Menü
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path 
                d="M18 6L6 18M6 6l12 12" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {navItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    onClick={onClose}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                      isActive 
                        ? "bg-blue-50" 
                        : "hover:bg-slate-50"
                    }`}
                    style={{ 
                      fontFamily: Typography.fontFamily,
                      color: isActive ? Colors.primary : Colors.textSecondary
                    }}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>
          
          {/* Language Switcher */}
          <div className="mt-6 pt-6 border-t border-slate-200">
            <LanguageSwitcher alignDropdown="left" />
          </div>
        </nav>
      </div>
    </>
  );
};
