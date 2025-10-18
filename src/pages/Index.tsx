import TopBar from "@/components/TopBar";
import FilterSidebar from "@/components/FilterSidebar";
import MarketCard from "@/components/MarketCard";
import RightSidebar from "@/components/RightSidebar";

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
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-[#FAFAFC] to-background">
      <TopBar />
      
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="flex gap-5">
          {/* Left Filter Sidebar */}
          <FilterSidebar />

          {/* Main Market Feed */}
          <div className="flex-1 space-y-6">
            {/* Hero Section */}
            <div className="glass rounded-2xl p-5 border-border/50 mb-8 relative overflow-hidden">
              <h1 className="text-3xl font-bold mb-2 text-foreground">
                Trade What You Believe.
              </h1>
              <p className="text-base text-muted-foreground mb-5 max-w-2xl">
                Predict outcomes, earn rewards, and verify truth on Solana.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-6 py-3 bg-primary text-white rounded-xl font-semibold hover-glow smooth hover:-translate-y-0.5">
                  Create Market
                </button>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary smooth underline-offset-4 hover:underline">
                  How it Works
                </a>
              </div>
            </div>

            {/* Market Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
              {mockMarkets.map((market, i) => (
                <MarketCard key={i} {...market} />
              ))}
            </div>

            {/* Load More */}
            <div className="flex justify-center pt-6">
              <button className="px-8 py-3 glass rounded-xl font-semibold hover:bg-accent/50 smooth border border-primary/20 hover:border-primary">
                Load More Markets
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <RightSidebar />
        </div>
      </main>
    </div>
  );
};

export default Index;
