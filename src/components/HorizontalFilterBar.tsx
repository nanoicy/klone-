import { Button } from "@/components/ui/button";
import { Zap, TrendingUp, Clock, Sparkles, Bitcoin, Landmark, Trophy, Brain, Laugh } from "lucide-react";

const HorizontalFilterBar = () => {
  const sortFilters = [
    { label: "Trending", icon: Zap, active: true },
    { label: "Volume", icon: TrendingUp, active: false },
    { label: "Ending Soon", icon: Clock, active: false },
    { label: "New", icon: Sparkles, active: false },
  ];

  const categoryFilters = [
    { label: "Crypto", icon: Bitcoin, active: false },
    { label: "Politics", icon: Landmark, active: false },
    { label: "Sports", icon: Trophy, active: false },
    { label: "AI", icon: Brain, active: false },
    { label: "Memes", icon: Laugh, active: false },
  ];

  return (
    <div className="sticky top-[96px] z-40 border-b border-border/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center overflow-x-auto scrollbar-hide">
          <div className="bg-background/80 rounded-full px-6 py-2.5 inline-flex items-center gap-6 border border-border/30">
          {/* Sort Filters */}
          <div className="flex items-center gap-2">
            {sortFilters.map((filter) => (
              <Button
                key={filter.label}
                variant="ghost"
                size="sm"
                className={`
                  px-4 py-2 rounded-full font-medium text-sm smooth
                  ${
                    filter.active
                      ? "bg-primary/10 text-primary ring-1 ring-primary/30 pulse-neon"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }
                `}
              >
                <filter.icon className="w-4 h-4 mr-1.5" />
                {filter.label}
              </Button>
            ))}
          </div>

            {/* Divider */}
            <div className="h-6 w-px bg-border/50" />

            {/* Category Filters */}
          <div className="flex items-center gap-2">
            {categoryFilters.map((filter) => (
              <Button
                key={filter.label}
                variant="ghost"
                size="sm"
                className={`
                  px-4 py-2 rounded-full font-medium text-sm smooth
                  ${
                    filter.active
                      ? "bg-primary/10 text-primary ring-1 ring-primary/30 pulse-neon"
                      : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                  }
                `}
              >
                <filter.icon className="w-4 h-4 mr-1.5" />
                {filter.label}
              </Button>
            ))}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default HorizontalFilterBar;
