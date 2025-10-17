import { useT } from "../../i18n/I18nProvider";
import { ContactInfoItem } from "./ContactInfoItem";
import phoneIcon from "../../assets/phoneIcon";
import mailIcon from "../../assets/mailIcon";
import locationIcon from "../../assets/locationIcon";
import mapIcon from "../../assets/images/mapIcon";

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
