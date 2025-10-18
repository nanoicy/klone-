import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Crown, TrendingUp, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const topCreators = [
  { name: "CryptoKing", volume: "145.2K", accuracy: "87%", rank: 1 },
  { name: "MarketMaven", volume: "132.8K", accuracy: "84%", rank: 2 },
  { name: "TruthSeeker", volume: "98.5K", accuracy: "91%", rank: 3 },
  { name: "AlphaTrader", volume: "87.3K", accuracy: "79%", rank: 4 },
];

const recentMarkets = [
  { title: "Will ETH hit $5k in 2025?", time: "2m ago" },
  { title: "US Election Prediction", time: "5m ago" },
  { title: "Super Bowl Winner 2025", time: "8m ago" },
  { title: "Next Fed Rate Decision", time: "12m ago" },
];

const RightSidebar = () => {
  return (
    <aside className="w-80 space-y-4">
      {/* King of the Hill - Top Creators */}
      <Card className="glass p-5 border-border/50 hover-lift">
        <div className="flex items-center gap-2 mb-4">
          <Crown className="w-5 h-5 text-yellow-500" />
          <h3 className="text-sm font-bold text-foreground">King of the Hill</h3>
          <span className="text-xs text-muted-foreground ml-auto">24h Volume</span>
        </div>

        <div className="space-y-3">
          {topCreators.map((creator) => (
            <div
              key={creator.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 smooth cursor-pointer"
            >
              <div className="relative">
                <Avatar className="w-10 h-10 border-2 border-primary/20">
                  <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white font-semibold">
                    {creator.name.substring(0, 2)}
                  </AvatarFallback>
                </Avatar>
                {creator.rank === 1 && (
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Crown className="w-3 h-3 text-white" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-foreground truncate">
                  {creator.name}
                </div>
                <div className="text-xs text-muted-foreground">
                  {creator.accuracy} accuracy
                </div>
              </div>

              <div className="text-right">
                <div className="text-sm font-bold text-primary">{creator.volume}</div>
                <div className="text-xs text-muted-foreground">SOL</div>
              </div>
            </div>
          ))}
        </div>

        <Button 
          variant="outline" 
          className="w-full mt-4 border-primary/20 hover:border-primary hover:bg-primary/5 text-primary font-medium"
        >
          View Full Leaderboard
        </Button>
      </Card>

      {/* Recent Markets */}
      <Card className="glass p-5 border-border/50">
        <div className="flex items-center gap-2 mb-4">
          <Clock className="w-5 h-5 text-primary" />
          <h3 className="text-sm font-bold text-foreground">Recent Markets</h3>
        </div>

        <div className="space-y-3">
          {recentMarkets.map((market, i) => (
            <div
              key={i}
              className="p-3 rounded-lg hover:bg-accent/50 smooth cursor-pointer border border-transparent hover:border-primary/20"
            >
              <p className="text-sm font-medium text-foreground mb-1 line-clamp-2">
                {market.title}
              </p>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <TrendingUp className="w-3 h-3" />
                <span>{market.time}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Top Categories */}
      <Card className="glass p-5 border-border/50">
        <h3 className="text-sm font-bold text-foreground mb-4">Top Categories</h3>
        <div className="space-y-2">
          {[
            { name: "Crypto", count: "234", icon: "₿" },
            { name: "Politics", count: "189", icon: "🏛️" },
            { name: "Sports", count: "156", icon: "⚽" },
          ].map((cat) => (
            <Button
              key={cat.name}
              variant="ghost"
              className="w-full justify-between hover:bg-accent/50"
            >
              <span className="flex items-center gap-2">
                <span className="text-lg">{cat.icon}</span>
                <span className="text-sm font-medium">{cat.name}</span>
              </span>
              <span className="text-xs text-muted-foreground">{cat.count} markets</span>
            </Button>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default RightSidebar;
