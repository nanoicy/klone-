import { Card } from "@/components/ui/card";
import { Crown } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const topCreators = [
  { name: "CryptoKing", volume: "145.2K", accuracy: "87%", rank: 1, change: "+12%" },
  { name: "MarketMaven", volume: "132.8K", accuracy: "84%", rank: 2, change: "+8%" },
  { name: "TruthSeeker", volume: "98.5K", accuracy: "91%", rank: 3, change: "+15%" },
  { name: "AlphaTrader", volume: "87.3K", accuracy: "79%", rank: 4, change: "-3%" },
];

const creatorEarnings = [
  { name: "CryptoKing", earnings: "142.3", rank: 1, medal: "🥇" },
  { name: "MarketMaven", earnings: "119.4", rank: 2, medal: "🥈" },
  { name: "TruthSeeker", earnings: "98.2", rank: 3, medal: "🥉" },
  { name: "AlphaTrader", earnings: "76.5", rank: 4, medal: "" },
];

const RightSidebar = () => {
  return (
    <aside className="w-80 space-y-5">
      {/* Card 1: Top Creators Leaderboard */}
      <Card className="glass p-4 border-border/50">
        <div className="flex items-center justify-between mb-3">
          <h4 className="text-sm font-semibold text-foreground">Top Creators</h4>
          <a href="#" className="text-xs text-primary hover:underline">View All</a>
        </div>
        <div className="space-y-2">
          {topCreators.map((creator) => (
            <div
              key={creator.name}
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-accent/50 smooth cursor-pointer"
            >
              <div className="relative">
                <Avatar className="w-9 h-9 ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
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
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-sm text-[#0E0E0E] truncate">
                    {creator.name}
                  </span>
                  <span className={`text-xs ${creator.change.startsWith('+') ? 'text-success' : 'text-destructive'}`}>
                    {creator.change.startsWith('+') ? '↗' : '↘'} {creator.change}
                  </span>
                </div>
                <div className="text-xs text-[#A0A7B2]">
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
      </Card>

      {/* Card 2: Creator Earnings */}
      <Card className="glass p-4 border-border/50">
        <div className="mb-3">
          <h4 className="text-xs font-medium text-primary/80 uppercase tracking-wider mb-1">
            1% Creator Earnings
          </h4>
          <p className="text-xs text-muted-foreground">
            Top creators by bonus earnings in the past 24 hours.
          </p>
        </div>
        <div className="space-y-3">
          {creatorEarnings.map((creator) => (
            <div
              key={creator.rank}
              className="flex items-center gap-3 p-3 rounded-xl hover:bg-accent/30 smooth"
            >
              <div className="text-2xl">{creator.medal || "•"}</div>
              <Avatar className="w-9 h-9 ring-2 ring-primary/30 ring-offset-2 ring-offset-background">
                <AvatarFallback className="bg-gradient-to-br from-primary to-primary-glow text-white text-xs font-semibold">
                  {creator.name.substring(0, 2)}
                </AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <span className="font-semibold text-sm text-[#0E0E0E] truncate block">
                  {creator.name}
                </span>
                <div className="text-xs text-[#A0A7B2]">
                  Rank #{creator.rank}
                </div>
              </div>
              <div className="text-sm font-bold" style={{ color: '#00C2FF' }}>
                {creator.earnings} SOL
              </div>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default RightSidebar;
