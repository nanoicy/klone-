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
      {/* Line 1: Title + Share Button */}
      <div className="flex items-start gap-2 mb-3">
        <h3 className="text-sm font-semibold text-[#0E0E0E] group-hover:text-primary smooth flex-1 pr-3 line-clamp-2">
          {title}
        </h3>
        <button className="p-2 rounded-lg hover:bg-accent/50 smooth shrink-0">
          <Share2 className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Line 2: Horizontal Probability Bar with semantic colors */}
      <div className="mb-3 relative h-12 rounded-xl overflow-hidden bg-gradient-to-r from-success/10 to-destructive/10">
        {/* YES side - green gradient */}
        <div 
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-success to-success/70 transition-all duration-500"
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

      {/* Line 3: Compact meta info */}
      <div className="flex items-center text-xs text-[#A0A7B2] mb-3 font-medium">
        <span>📈 {volume} SOL</span>
        <span className="mx-2">·</span>
        <span>⏱ {endDate}</span>
      </div>

      {/* Single Trade Button - outline style */}
      <Button 
        variant="outline"
        size="sm"
        className="w-full border-border text-foreground hover:bg-primary hover:text-white hover:border-primary font-medium smooth"
      >
        Trade
      </Button>
    </Card>
  );
};

export default MarketCard;
