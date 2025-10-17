import { useT } from "../i18n/I18nProvider";
import { FooterSection } from "./footer/FooterSection";
import { FooterBrand } from "./footer/FooterBrand";
import { FooterNav } from "./footer/FooterNav";
import { FooterContactInfo } from "./footer/FooterContactInfo";

export const Footer = () => {
  const t = useT();

  const navItems = [
    { key: "nav.home", href: "/" },
    { key: "nav.about", href: "/about" },
    { key: "nav.services", href: "/services" },
    { key: "nav.projects", href: "/projects" },
    { key: "nav.sectors", href: "/sectors" },
    { key: "nav.why", href: "/why" },
    { key: "nav.contact", href: "/contact" }
  ];

  return (
    <FooterSection>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16">
        {/* Left side - Company info */}
        <div className="lg:col-span-2">
          <FooterBrand
            description={t("footer.companyDescription")}
            copyright={t("footer.copyright")}
          />
        </div>

        {/* Right side - Navigation and contact */}
        <div className="space-y-6 lg:space-y-8 lg:col-span-3">
          <FooterNav items={navItems} t={t} />
          
          <FooterContactInfo
            phone={t("footer.phone")}
            email={t("footer.email")}
            addressLine1={t("footer.address.line1")}
            addressLine2={t("footer.address.line2")}
            mapLinkText={t("footer.mapLink")}
            mapUrl={t("footer.mapUrl")}
            mapHref="https://maps.app.goo.gl/BvrGQRKtaVH18nvt9"
          />
        </div>
      </div>
    </FooterSection>
  );
};

export default Footer;
