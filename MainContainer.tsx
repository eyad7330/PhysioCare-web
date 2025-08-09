import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MainContainerProps {
  children: React.ReactNode;
  className?: string;
}

const MainContainer = ({ children, className }: MainContainerProps) => {
  return (
    <div className="max-w-4xl mx-auto my-8 px-4">
      <Card className={cn(
        "p-8 md:p-12 bg-white/95 backdrop-blur-sm shadow-2xl border-t-4 border-secondary rounded-2xl relative overflow-hidden",
        className
      )}>
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-accent/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-2xl"></div>
        
        {/* Content */}
        <div className="relative z-10 animate-fade-in-up">
          {children}
        </div>
      </Card>
    </div>
  );
};

export default MainContainer;
