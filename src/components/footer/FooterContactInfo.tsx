import { Colors, Typography } from "../lib/theme";
import phoneIcon from "../../assets/phoneIcon";
import mailIcon from "../../assets/mailIcon";
import locationIcon from "../../assets/locationIcon";
import LanguageSwitcher from "../LanguageSwitcher";

interface FooterContactInfoProps {
  phone: string;
  email: string;
  addressLine1: string;
  addressLine2: string;
  mapLinkText: string;
  mapUrl: string;
  mapHref: string;
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
    <div className="space-y-4">
      {/* Phone and Language switcher */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div
            className="w-5 h-5 flex-shrink-0"
            dangerouslySetInnerHTML={{ __html: phoneIcon }}
            aria-hidden="true"
          />
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

      {/* Email */}
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

      {/* Map link */}
      <div className="flex items-center gap-3 pt-2">
        <div className="w-6 h-6 bg-slate-200 rounded flex items-center justify-center flex-shrink-0">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path 
              d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" 
              stroke={Colors.textSecondary}
              strokeWidth="2"
            />
            <circle 
              cx="12" 
              cy="10" 
              r="3" 
              stroke={Colors.textSecondary}
              strokeWidth="2"
            />
          </svg>
        </div>
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
          className="text-[14px]"
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          {mapUrl}
        </span>
      </div>
    </div>
  );
};
