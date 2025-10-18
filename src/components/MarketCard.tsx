import { Button } from "@/components/ui/button";
import { Share2, TrendingUp, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";

interface MarketCardProps {
  title: string;
  yesOdds: number;
  noOdds: number;
  volume: string;
  endDate: string;
  trend?: "up" | "down" | "stable";
}

const MarketCard = ({ 
  title, 
  yesOdds, 
  noOdds, 
  volume, 
  endDate, 
  trend = "stable" 
}: MarketCardProps) => {
  return (
    <Card className="glass p-4 hover-lift cursor-pointer group border-border/50">
      {/* Line 1: Title + Share */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-base font-semibold text-foreground group-hover:text-primary smooth flex-1 pr-3 line-clamp-2">
          {title}
        </h3>
        <Button 
          size="icon" 
          variant="ghost" 
          className="opacity-0 group-hover:opacity-100 smooth hover:bg-primary/10 flex-shrink-0"
        >
          <Share2 className="w-4 h-4 text-primary" />
        </Button>
      </div>

      {/* Line 2: Horizontal Probability Bar */}
      <div className="mb-3 relative h-12 rounded-xl overflow-hidden bg-gradient-to-r from-primary/10 to-destructive/10">
        {/* YES side gradient */}
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-300"
          style={{ width: `${yesOdds}%` }}
        />
        
        {/* Percentage labels */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div className="text-sm font-bold text-white drop-shadow-md">
            YES {yesOdds}%
          </div>
          <div className="text-sm font-bold text-white drop-shadow-md">
            NO {noOdds}%
          </div>
        </div>
      </div>

      {/* Line 3: Meta info row */}
      <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
        <div className="flex items-center gap-1.5">
          <TrendingUp className="w-3 h-3" />
          <span className="font-medium">{volume} SOL</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock className="w-3 h-3" />
          <span>{endDate}</span>
        </div>
      </div>

      {/* Single Trade Button */}
      <Button 
        className="w-full bg-primary hover:bg-primary/90 text-white font-medium hover-glow"
      >
        Trade
      </Button>
    </Card>
  );
};

export default MarketCard;
