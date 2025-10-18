import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, TrendingUp, Clock, DollarSign, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const categories = [
  { name: "Crypto", icon: "₿", color: "text-orange-500" },
  { name: "Politics", icon: "🏛️", color: "text-blue-500" },
  { name: "Sports", icon: "⚽", color: "text-green-500" },
  { name: "AI", icon: "🤖", color: "text-purple-500" },
  { name: "Memes", icon: "🎭", color: "text-pink-500" },
];

const FilterSidebar = () => {
  return (
    <aside className="w-64 space-y-4">
      {/* Search */}
      <Card className="glass p-3 border-border/50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search markets..." 
            className="pl-9 bg-background/50 border-primary/20 focus:border-primary smooth"
          />
        </div>
      </Card>

      {/* Filters */}
      <Card className="glass p-4 border-border/50">
        <h3 className="text-sm font-semibold mb-3 text-foreground">Sort By</h3>
        <div className="space-y-2">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-primary bg-primary/5 hover:bg-primary/10 font-medium"
          >
            <Zap className="w-4 h-4 mr-2" />
            Trending
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
          >
            <DollarSign className="w-4 h-4 mr-2" />
            Volume
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
          >
            <Clock className="w-4 h-4 mr-2" />
            Ending Soon
          </Button>
          <Button 
            variant="ghost" 
            className="w-full justify-start text-muted-foreground hover:text-foreground"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            New
          </Button>
        </div>
      </Card>

      {/* Categories */}
      <Card className="glass p-4 border-border/50">
        <h3 className="text-sm font-semibold mb-3 text-foreground">Categories</h3>
        <div className="space-y-2">
          {categories.map((cat) => (
            <Button
              key={cat.name}
              variant="ghost"
              className="w-full justify-start text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              <span className="mr-2 text-lg">{cat.icon}</span>
              <span>{cat.name}</span>
            </Button>
          ))}
        </div>
      </Card>
    </aside>
  );
};

export default FilterSidebar;
