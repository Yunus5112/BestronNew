import { Colors, Typography } from "../lib/theme";

interface NoteItem {
  title: string;
  description: string;
}

interface ServiceNoteSectionProps {
  title: string;
  items: NoteItem[];
  className?: string;
}

export const ServiceNoteSection = ({ title, items, className = "" }: ServiceNoteSectionProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <h3 
        className={`${Typography.sizes.body} font-semibold`}
        style={{ 
          fontFamily: Typography.fontFamily,
          color: Colors.primary
        }}
      >
        {title}
      </h3>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="space-y-2">
            <h4 
              className={`${Typography.sizes.body} font-semibold`}
              style={{ 
                fontFamily: Typography.fontFamily,
                color: Colors.primary
              }}
            >
              {item.title}
            </h4>
            <p 
              className={`${Typography.sizes.body} leading-[1.5]`}
              style={{ 
                fontFamily: Typography.fontFamily,
                color: Colors.primary
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

