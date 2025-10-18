import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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
    <Card className="glass p-4 hover-lift cursor-pointer group border-border/50 hover:border-primary/30">
      {/* Line 1: Title + Share Button */}
      <div className="flex items-start gap-2 mb-3">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <h3 className="text-sm font-semibold text-[#0E0E0E] group-hover:text-primary smooth flex-1 pr-3 line-clamp-2 cursor-help">
                {title}
              </h3>
            </TooltipTrigger>
            <TooltipContent>
              <p className="max-w-xs">{title}</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <button className="p-2 rounded-lg hover:bg-accent/50 smooth shrink-0">
          <Share2 className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>

      {/* Line 2: Horizontal Probability Bar with solid colors */}
      <div className="mb-3 relative h-12 rounded-xl overflow-hidden bg-gray-100">
        {/* YES side - solid green */}
        <div 
          className="absolute left-0 top-0 h-full bg-success transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(0,116,88,0.3)]"
          style={{ width: `${yesOdds}%` }}
        />
        
        {/* NO side - solid red */}
        <div 
          className="absolute right-0 top-0 h-full bg-destructive transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(222,10,38,0.3)]"
          style={{ width: `${noOdds}%` }}
        />
        
        {/* Percentage labels */}
        <div className="absolute inset-0 flex items-center justify-between px-4">
          <div className="text-sm font-bold text-white drop-shadow-md z-10">
            YES {yesOdds}%
          </div>
          <div className="text-sm font-bold text-white drop-shadow-md z-10">
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
        className="w-full border-border text-foreground hover:border-primary hover:bg-primary/5 hover:text-primary font-medium smooth"
      >
        Trade
      </Button>
    </Card>
  );
};

export default MarketCard;
