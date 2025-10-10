import { Colors, Typography } from "../lib/theme";

interface ServiceListProps {
  items: string[];
  className?: string;
}

export const ServiceList = ({ items, className = "" }: ServiceListProps) => {
  return (
    <ul className={`space-y-3 ${className}`}>
      {items.map((item: string, index: number) => (
        <li 
          key={index}
          className={`${Typography.sizes.body} leading-[1.5] flex items-start`}
          style={{ 
            fontFamily: Typography.fontFamily,
            color: Colors.primary
          }}
        >
          <span 
            className="w-2 h-2 rounded-full mt-3 mr-3 flex-shrink-0"
            style={{ backgroundColor: Colors.primary }}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
};

