import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Crypto", icon: "₿" },
  { name: "Politics", icon: "🏛️" },
  { name: "Sports", icon: "⚽" },
  { name: "AI", icon: "🤖" },
  { name: "Memes", icon: "🎭" },
];

const FilterSidebar = () => {
  return (
    <aside className="w-64">
      <Card className="glass p-4 border-border/50">
        {/* Search */}
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search markets..." 
            className="pl-9 bg-background/50 border-border focus:border-primary smooth"
          />
        </div>

        {/* Sort By Section */}
        <div className="mb-4 pb-4 border-b border-border">
          <h3 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Sort By</h3>
          <div className="space-y-1">
            <Button 
              variant="ghost" 
              className="w-full justify-start h-8 text-sm text-primary bg-primary/5 hover:bg-primary/10 font-medium"
            >
              <Zap className="w-3.5 h-3.5 mr-2" />
              Trending
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start h-8 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <DollarSign className="w-3.5 h-3.5 mr-2" />
              Volume
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start h-8 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <Clock className="w-3.5 h-3.5 mr-2" />
              Ending Soon
            </Button>
            <Button 
              variant="ghost" 
              className="w-full justify-start h-8 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <TrendingUp className="w-3.5 h-3.5 mr-2" />
              New
            </Button>
          </div>
        </div>

        {/* Categories Section */}
        <div>
          <h3 className="text-xs font-semibold mb-2 text-muted-foreground uppercase tracking-wide">Categories</h3>
          <div className="space-y-1">
            {categories.map((cat) => (
              <Button
                key={cat.name}
                variant="ghost"
                className="w-full justify-start h-8 text-sm text-muted-foreground hover:text-foreground hover:bg-accent/50"
              >
                <span className="mr-2 text-base">{cat.icon}</span>
                <span>{cat.name}</span>
              </Button>
            ))}
          </div>
        </div>
      </Card>
    </aside>
  );
};

export default FilterSidebar;
