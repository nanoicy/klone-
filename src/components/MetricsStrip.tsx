import { TrendingUp, Layers, Trophy } from "lucide-react";

const MetricsStrip = () => {
  const metrics = [
    { label: "24h Volume", value: "3.4M SOL", icon: TrendingUp },
    { label: "Active Markets", value: "268", icon: Layers },
    { label: "Top Creator Earnings", value: "142 SOL", icon: Trophy },
  ];

  return (
    <div className="glass rounded-xl border-border/50 backdrop-blur-xl mb-6">
      <div className="flex items-center justify-center divide-x divide-border/50">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-6 py-3 first:pl-6 last:pr-6"
          >
            <div className="p-2 rounded-lg bg-primary/10">
              <metric.icon className="w-4 h-4 text-primary" />
            </div>
            <div>
              <div className="text-xs text-muted-foreground font-medium">
                {metric.label}
              </div>
              <div className="text-sm font-bold text-foreground">
                {metric.value}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsStrip;
