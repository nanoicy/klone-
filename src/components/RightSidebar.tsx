import { Card } from "@/components/ui/card";
import { Crown, TrendingUp, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useState } from "react";

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
  const [activeTab, setActiveTab] = useState<"leaderboard" | "recent">("leaderboard");

  return (
    <aside className="w-80">
      <Card className="glass p-4 border-border/50">
        {/* Tabs */}
        <div className="flex gap-2 mb-4 border-b border-border pb-2">
          <button
            onClick={() => setActiveTab("leaderboard")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium smooth ${
              activeTab === "leaderboard"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            <Crown className="w-4 h-4" />
            Leaderboard
          </button>
          <button
            onClick={() => setActiveTab("recent")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium smooth ${
              activeTab === "recent"
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
            }`}
          >
            <Clock className="w-4 h-4" />
            Recent
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === "leaderboard" ? (
          <div className="space-y-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-muted-foreground">24h Volume</span>
              <a href="#" className="text-xs text-primary hover:underline">View All</a>
            </div>
            {topCreators.map((creator) => (
              <div
                key={creator.name}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 smooth cursor-pointer"
              >
                <div className="relative">
                  <Avatar className="w-9 h-9 border-2 border-primary/20">
                    <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white text-xs font-semibold">
                      {creator.name.substring(0, 2)}
                    </AvatarFallback>
                  </Avatar>
                  {creator.rank === 1 && (
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-500 rounded-full flex items-center justify-center">
                      <Crown className="w-2.5 h-2.5 text-white" />
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
        ) : (
          <div className="space-y-2">
            {recentMarkets.map((market, i) => (
              <div
                key={i}
                className="p-2 rounded-lg hover:bg-accent/50 smooth cursor-pointer"
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
        )}
      </Card>
    </aside>
  );
};

export default RightSidebar;
