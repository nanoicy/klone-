import { Button } from "@/components/ui/button";
import { Wallet, User } from "lucide-react";
import icyLogo from "@/assets/icy-logo.png";

const TopBar = () => {
  return (
    <header className="fixed top-4 left-0 right-0 z-50 glass border-b border-border/50 backdrop-blur-xl shadow-sm">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-8">
          <a 
            href="/" 
            className="flex items-center gap-2 hover:opacity-80 smooth"
          >
            <img 
              src={icyLogo} 
              alt="icy.fun" 
              className="w-8 h-8"
            />
            <span className="text-xl font-semibold text-[#111111] tracking-wide">
              icy.fun
            </span>
          </a>

          {/* Navigation Tabs */}
          <nav className="hidden md:flex items-center gap-1">
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
        <div className="flex items-center gap-4">
          <Button 
            className="hidden sm:flex items-center gap-2 bg-primary text-white hover:bg-primary/90 hover-glow px-6 py-2.5"
          >
            <Wallet className="w-4 h-4" />
            <span>Connect Wallet</span>
          </Button>
          
          <Button 
            size="icon" 
            variant="ghost"
            className="rounded-full hover:bg-primary/10 w-10 h-10"
          >
            <User className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
