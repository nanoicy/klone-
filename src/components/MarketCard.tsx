import { Button } from "@/components/ui/button";
import { TrendingUp, Share2, MessageCircle, Clock } from "lucide-react";
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
    <Card className="glass p-6 hover-lift cursor-pointer group border-border/50">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground group-hover:text-primary smooth flex-1 pr-4">
          {title}
        </h3>
        <Button 
          size="icon" 
          variant="ghost" 
          className="opacity-0 group-hover:opacity-100 smooth hover:bg-primary/10"
        >
          <Share2 className="w-4 h-4 text-primary" />
        </Button>
      </div>

      {/* Odds Display */}
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="glass rounded-xl p-3 border border-primary/20 hover:border-primary smooth">
          <div className="text-xs text-muted-foreground mb-1">YES</div>
          <div className="text-2xl font-bold text-primary">{yesOdds}%</div>
        </div>
        <div className="glass rounded-xl p-3 border border-destructive/20 hover:border-destructive smooth">
          <div className="text-xs text-muted-foreground mb-1">NO</div>
          <div className="text-2xl font-bold text-destructive">{noOdds}%</div>
        </div>
      </div>

      {/* Mini Sparkline Placeholder */}
      <div className="h-12 mb-4 rounded-lg bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 relative overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-around px-1">
          {[40, 60, 45, 70, 55, 75, 68].map((height, i) => (
            <div
              key={i}
              className="w-1 bg-primary/40 rounded-t"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>
      </div>

      {/* Stats Row */}
      <div className="flex items-center justify-between text-sm mb-4">
        <div className="flex items-center gap-2 text-muted-foreground">
          <TrendingUp className="w-4 h-4 text-primary" />
          <span className="font-medium">{volume} SOL</span>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span>{endDate}</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2">
        <Button 
          className="bg-primary hover:bg-primary/90 text-white font-medium hover-glow"
        >
          Trade YES
        </Button>
        <Button 
          variant="outline" 
          className="border-destructive/30 text-destructive hover:bg-destructive/10 hover:border-destructive font-medium"
        >
          Trade NO
        </Button>
      </div>

      {/* Chat Icon */}
      <div className="mt-3 pt-3 border-t border-border/50 flex items-center justify-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-muted-foreground hover:text-primary text-xs"
        >
          <MessageCircle className="w-3 h-3 mr-1" />
          Market Chat
        </Button>
      </div>
    </Card>
  );
};

export default MarketCard;
