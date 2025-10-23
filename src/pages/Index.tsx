import TopBar from "@/components/TopBar";
import HorizontalFilterBar from "@/components/HorizontalFilterBar";
import MarketCard from "@/components/MarketCard";
import RightSidebar from "@/components/RightSidebar";
import FloatingCreateButton from "@/components/FloatingCreateButton";

const mockMarkets = [
  {
    title: "Will Solana Flip Ethereum in 2026?",
    yesOdds: 68,
    noOdds: 32,
    volume: "12.4K",
    endDate: "Dec 31, 2026",
  },
  {
    title: "Will Bitcoin reach $100,000 before 2025?",
    yesOdds: 73,
    noOdds: 27,
    volume: "24.8K",
    endDate: "Dec 31, 2024",
  },
  {
    title: "Will AI replace 50% of software jobs by 2030?",
    yesOdds: 45,
    noOdds: 55,
    volume: "8.2K",
    endDate: "Jan 1, 2030",
  },
  {
    title: "Will SpaceX land humans on Mars before 2030?",
    yesOdds: 34,
    noOdds: 66,
    volume: "15.6K",
    endDate: "Dec 31, 2029",
  },
  {
    title: "Will GPT-5 be released in 2025?",
    yesOdds: 82,
    noOdds: 18,
    volume: "19.3K",
    endDate: "Dec 31, 2025",
  },
  {
    title: "Will the Fed cut rates in Q1 2025?",
    yesOdds: 61,
    noOdds: 39,
    volume: "11.7K",
    endDate: "Mar 31, 2025",
  },
  {
    title: "Will Apple release AR glasses in 2025?",
    yesOdds: 38,
    noOdds: 62,
    volume: "7.1K",
    endDate: "Dec 31, 2025",
  },
  {
    title: "Will Dogecoin reach $1 in 2025?",
    yesOdds: 22,
    noOdds: 78,
    volume: "31.2K",
    endDate: "Dec 31, 2025",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#FAFAFC] to-background">
      <TopBar />
      <HorizontalFilterBar />
      
      <main className="container mx-auto px-6 pt-32 pb-12">
        <div className="flex gap-5">
          {/* Main Market Feed */}
          <div className="flex-1 space-y-6">
            {/* Hero Section */}
            <div className="glass rounded-2xl p-3.5 border-border/50 mb-12 relative overflow-hidden">
              <h1 className="text-xl font-bold mb-1 text-foreground">
                Trade What You Believe.
              </h1>
              <p className="text-sm text-muted-foreground mb-3.5 max-w-2xl">
                Predict outcomes, earn rewards, and verify truth on Solana.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-primary text-white rounded-xl font-semibold hover-glow smooth hover:-translate-y-0.5 text-sm">
                  Create Market
                </button>
                <a href="https://icy.fun/docs" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary smooth underline-offset-4 hover:underline">
                  How it Works
                </a>
              </div>
            </div>

            {/* Market Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4 mb-12">
              {mockMarkets.map((market, i) => (
                <MarketCard key={i} {...market} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center pt-6">
              <button className="px-10 py-3.5 rounded-full font-semibold text-sm smooth bg-primary text-white hover:bg-primary/90 hover-glow hover:-translate-y-1">
                Load More Markets
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </main>

      {/* Floating Create Button */}
      <FloatingCreateButton />
    </div>
  );
};

export default Index;
