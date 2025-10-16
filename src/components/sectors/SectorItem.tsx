import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

interface SectorItemProps {
  title: string;
  description: string;
  className?: string;
}

export const SectorItem = ({ title, description, className = "" }: SectorItemProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <Heading level="h3">• {title}</Heading>
      <Text>{description}</Text>
    </div>
  );
};

