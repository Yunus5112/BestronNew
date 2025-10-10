import { OverviewItemCard } from "./OverviewItemCard";

interface OverviewItem {
  title: string;
  desc: string;
}

interface OverviewItemsListProps {
  items: OverviewItem[];
}

export const OverviewItemsList = ({ items }: OverviewItemsListProps) => {
  return (
    <div className="space-y-6">
      {items?.map((item, index) => (
        <OverviewItemCard
          key={index}
          title={item.title}
          description={item.desc}
        />
      ))}
    </div>
  );
};
