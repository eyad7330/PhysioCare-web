import { Calendar, MessageSquare, MapPin, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface NavTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const NavTabs = ({ activeTab, onTabChange }: NavTabsProps) => {
  const tabs = [
    {
      id: 'booking',
      label: 'حجز موعد',
      icon: Calendar,
      description: 'احجز جلستك'
    },
    {
      id: 'contact',
      label: 'تواصل معنا',
      icon: MessageSquare,
      description: 'راسلنا'
    },
    {
      id: 'locations',
      label: 'المواقع',
      icon: MapPin,
      description: 'فروعنا'
    },
    {
      id: 'about',
      label: 'من نحن',
      icon: Info,
      description: 'تعرف علينا'
    }
  ];

  return (
    <nav className="flex justify-center gap-3 my-8 px-4 flex-wrap" dir="rtl">
      {tabs.map((tab) => {
        const Icon = tab.icon;
        const isActive = activeTab === tab.id;
        
        return (
          <Button
            key={tab.id}
            variant={isActive ? "default" : "outline"}
            size="lg"
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "flex items-center gap-3 px-6 py-3 rounded-full font-cairo font-semibold transition-all duration-300",
              isActive 
                ? "bg-primary text-primary-foreground shadow-lg transform scale-105" 
                : "hover:bg-primary/10 hover:text-primary hover:scale-105 hover:shadow-md"
            )}
          >
            <Icon className="w-5 h-5" />
            <div className="text-right">
              <div className="text-sm font-bold">{tab.label}</div>
              <div className="text-xs opacity-80">{tab.description}</div>
            </div>
          </Button>
        );
      })}
    </nav>
  );
};

export default NavTabs;
