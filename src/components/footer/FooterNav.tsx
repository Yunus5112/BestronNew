import { Link, useLocation } from "react-router-dom";
import { Colors, Typography } from "../lib/theme";

interface NavItem {
  key: string;
  href: string;
}

interface FooterNavProps {
  items: NavItem[];
  t: (key: string) => string;
}

export const FooterNav = ({ items, t }: FooterNavProps) => {
  const location = useLocation();

  return (
    <nav className="flex flex-wrap gap-6">
      {items.map((item, index) => {
        const isHashLink = item.href.startsWith('#');
        const isActive = location.pathname === item.href;
        
        const linkStyle = {
          fontFamily: Typography.fontFamily,
          color: isActive ? Colors.primary : Colors.textSecondary
        };
        
        if (isHashLink) {
          return (
            <a
              key={index}
              href={item.href}
              className="text-[16px] font-medium transition-colors hover:text-primary"
              style={linkStyle}
            >
              {t(item.key)}
            </a>
          );
        }
        
        return (
          <Link
            key={index}
            to={item.href}
            className="text-[16px] font-medium transition-colors hover:text-primary"
            style={linkStyle}
          >
            {t(item.key)}
          </Link>
        );
      })}
    </nav>
  );
};
