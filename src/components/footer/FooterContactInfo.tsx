import { Colors, Typography } from "../lib/theme";
import phoneIcon from "../../assets/phoneIcon";
import mailIcon from "../../assets/mailIcon";
import locationIcon from "../../assets/locationIcon";
import mapIcon from "../../assets/images/mapIcon";
import LanguageSwitcher from "../LanguageSwitcher";

// Import JPG icons
const whatsappIconUrl = new URL("../../assets/icons/whatsappIcon.jpg", import.meta.url).href;
const linkedinIconUrl = new URL("../../assets/icons/linkedinIcon.jpg", import.meta.url).href;
const instagramIconUrl = new URL("../../assets/icons/instagramIcon.jpg", import.meta.url).href;

interface FooterContactInfoProps {
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  mapLinkText?: string;
  mapUrl?: string;
  mapHref?: string;
}

export const FooterContactInfo = ({ 
  phone, 
  email, 
  addressLine1, 
  addressLine2,
  mapLinkText,
  mapUrl,
  mapHref
}: FooterContactInfoProps) => {
  const textStyle = {
    fontFamily: Typography.fontFamily,
    color: Colors.textSecondary
  };

  return (
    <div className="space-y-3 lg:space-y-4">
      {/* Phone and Language switcher */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-5 flex-shrink-0"
            dangerouslySetInnerHTML={{ __html: phoneIcon }}
            aria-hidden="true"
          />
          <a
            href={`https://wa.me/${phone.replace(/\s/g, '').replace(/\+/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Contact us on WhatsApp"
          >
            <img
              src={whatsappIconUrl}
              alt="WhatsApp"
              className="w-[22px] h-[22px] flex-shrink-0"
            />
          </a>
          <a 
            href={`tel:${phone.replace(/\s/g, '')}`}
            className="text-[16px] hover:text-primary transition-colors"
            style={textStyle}
            aria-label={`Call ${phone}`}
          >
            {phone}
          </a>
        </div>
        
        <LanguageSwitcher />
      </div>

      {/* Email with Social Media on right */}
      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="flex items-center gap-3">
          <div
            className="w-6 h-5 flex-shrink-0"
            dangerouslySetInnerHTML={{ __html: mailIcon }}
            aria-hidden="true"
          />
          <a 
            href={`mailto:${email}`}
            className="text-[16px] hover:text-primary transition-colors underline"
            style={textStyle}
            aria-label={`Email ${email}`}
          >
            {email}
          </a>
        </div>
        
        {/* Social Media Links - Right side */}
        <div className="flex items-center gap-3">
          <a
            href="https://www.linkedin.com/company/bestron-technology"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Visit our LinkedIn page"
          >
            <img
              src={linkedinIconUrl}
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
          <a
            href="https://www.instagram.com/bestron_technology/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition-opacity"
            aria-label="Visit our Instagram page"
          >
            <img
              src={instagramIconUrl}
              alt="Instagram"
              className="w-6 h-6"
            />
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="flex items-start gap-3">
        <div
          className="w-5 h-6 flex-shrink-0 mt-0.5"
          dangerouslySetInnerHTML={{ __html: locationIcon }}
          aria-hidden="true"
        />
        <div className="text-[16px] leading-[1.6]" style={textStyle}>
          <p>{addressLine1}</p>
          <p>{addressLine2}</p>
        </div>
      </div>

      {/* Map link - Only show if props are provided */}
      {mapLinkText && mapUrl && mapHref && (
        <div className="flex items-center gap-3 pt-2">
          <div
            className="w-[31px] h-[31px] flex-shrink-0"
            dangerouslySetInnerHTML={{ __html: mapIcon }}
            aria-hidden="true"
          />
          <a 
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[16px] hover:underline"
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
            aria-label="Open location in Google Maps"
          >
            {mapLinkText}
          </a>
          <span 
            className="hidden lg:inline text-[14px]"
            style={{ 
              fontFamily: Typography.fontFamily,
              color: Colors.primary
            }}
          >
            {mapUrl}
          </span>
        </div>
      )}
    </div>
  );
};
