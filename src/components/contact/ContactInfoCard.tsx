import { useT } from "../../i18n/I18nProvider";
import { ContactInfoItem } from "./ContactInfoItem";
import phoneIcon from "../../assets/phoneIcon";
import mailIcon from "../../assets/mailIcon";
import locationIcon from "../../assets/locationIcon";

export interface ContactInfo {
  type: 'phone' | 'email' | 'address' | 'map';
  icon: string;
  value: string;
  href?: string;
  target?: string;
  rel?: string;
  isMultiLine?: boolean;
  lines?: string[];
}

interface ContactInfoCardProps {
  className?: string;
}

export const ContactInfoCard = ({ className = "" }: ContactInfoCardProps) => {
  const t = useT();

  const contactInfoItems: ContactInfo[] = [
    {
      type: 'phone',
      icon: phoneIcon,
      value: t("footer.phone"),
      href: "tel:+902169990219"
    },
    {
      type: 'email',
      icon: mailIcon,
      value: t("footer.email"),
      href: "mailto:info@bestrontechnology.com",
      target: "_blank"
    },
    {
      type: 'address',
      icon: locationIcon,
      value: t("footer.address.line1"),
      isMultiLine: true,
      lines: [
        t("footer.address.line1"),
        t("footer.address.line2")
      ]
    },
    {
      type: 'map',
      icon: mapIcon,
      value: t("footer.mapLink"),
      href: "https://maps.app.goo.gl/BvrGQRKtaVH18nvt9",
      target: "_blank",
      rel: "noopener noreferrer"
    }
  ];

  return (
    <div className={`space-y-6 ${className}`}>
      {contactInfoItems.map((item, index) => (
        <ContactInfoItem
          key={`contact-${item.type}-${index}`}
          {...item}
        />
      ))}
    </div>
  );
};

// Map icon SVG
const mapIcon = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" stroke="currentColor" stroke-width="2"/>
  <circle cx="12" cy="10" r="3" stroke="currentColor" stroke-width="2"/>
</svg>`;
