import { Heading } from "../ui/Heading";
import { Text } from "../ui/Text";

interface CompetencyItemProps {
  title: string;
  description: string;
  showBullet?: boolean;
  className?: string;
}

export const CompetencyItem = ({ 
  title, 
  description, 
  showBullet = true,
  className = "" 
}: CompetencyItemProps) => {
  return (
    <div className={`space-y-4 ${className}`}>
      <Heading level="h3">
        {showBullet ? "• " : ""}{title}
      </Heading>
      <Text>{description}</Text>
    </div>
  );
};
