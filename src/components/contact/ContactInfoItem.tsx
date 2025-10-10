import type { ContactInfo } from "./ContactInfoCard";

interface ContactInfoItemProps extends ContactInfo {
  className?: string;
}

export const ContactInfoItem = ({
  type,
  icon,
  value,
  href,
  target,
  rel,
  isMultiLine = false,
  lines = [],
  className = ""
}: ContactInfoItemProps) => {
  const baseClasses = "flex items-start gap-3";
  const iconClasses = {
    phone: "w-5 h-5 flex-shrink-0",
    email: "w-6 h-5 flex-shrink-0",
    address: "w-5 h-6 flex-shrink-0 mt-0.5",
    map: "w-6 h-6 bg-slate-200 rounded flex items-center justify-center flex-shrink-0"
  };

  const textClasses = {
    phone: "text-[16px] hover:text-primary transition-colors",
    email: "text-[16px] hover:text-primary transition-colors underline",
    address: "text-[16px] leading-[1.6]",
    map: "text-primary text-[16px] hover:underline"
  };

  const iconElement = (
    <div
      className={iconClasses[type]}
      dangerouslySetInnerHTML={{ __html: icon }}
      aria-hidden="true"
    />
  );

  const contentElement = isMultiLine ? (
    <div className={textClasses.address} style={{ color: '#8987A1' }}>
      {lines.map((line, index) => (
        <p key={index}>{line}</p>
      ))}
    </div>
  ) : (
    <span className={textClasses[type]} style={{ color: type === 'map' ? undefined : '#8987A1' }}>
      {value}
    </span>
  );

  const wrappedContent = href ? (
    <a
      href={href}
      target={target}
      rel={rel}
      className={textClasses[type]}
      style={{ color: type === 'map' ? undefined : '#8987A1' }}
      aria-label={`${type === 'phone' ? 'Call' : type === 'email' ? 'Email' : 'Open map'}: ${value}`}
    >
      {contentElement}
    </a>
  ) : contentElement;

  return (
    <div className={`${baseClasses} ${className}`}>
      {iconElement}
      {wrappedContent}
      {type === 'map' && (
        <span className="text-primary text-[14px] ml-2">
          {value}
        </span>
      )}
    </div>
  );
};
