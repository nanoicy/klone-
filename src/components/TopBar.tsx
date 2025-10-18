import { Button } from "@/components/ui/button";
import { Wallet, User } from "lucide-react";

const TopBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/50 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-6 h-18 flex items-baseline justify-between">
        {/* Logo */}
        <div className="flex items-baseline gap-8">
          <a 
            href="/" 
            className="text-xl font-semibold text-[#111111] hover:underline underline-offset-4 decoration-primary/50 smooth tracking-wide"
            style={{ letterSpacing: '0.25px' }}
          >
            Veritas Network
          </a>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-baseline gap-1">
            <Button variant="ghost" className="text-foreground hover:text-primary">
              Markets
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Create
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Leaderboard
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Portfolio
            </Button>
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Docs
            </Button>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <Button 
            variant="outline" 
            className="hidden sm:flex items-center gap-2 border-primary/20 hover:border-primary hover:bg-primary/5 hover-glow"
          >
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </Button>
          
          <Button 
            size="icon" 
            variant="ghost"
            className="rounded-full hover:bg-primary/10"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
