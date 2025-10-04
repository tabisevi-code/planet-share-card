import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { DiscoveryCard } from "@/components/DiscoveryCard";
import { Sparkles } from "lucide-react";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Example planet data - you can make this dynamic
  const planetData = {
    planetName: "Kepler-442b",
    stats: {
      distance: "1,200 light-years",
      size: "1.3x Earth",
      temperature: "233K (-40°C)",
      type: "Super-Earth",
    },
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4 overflow-hidden">
      {/* Enhanced background with multiple layers */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/30 via-accent/10 to-background" />
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-secondary/20 via-transparent to-transparent" />
      
      {/* Animated gradient orbs */}
      <div className="fixed top-20 left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="fixed bottom-20 right-20 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative z-10 text-center space-y-10">
        <div className="space-y-6 animate-slide-bounce">
          <h1 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_0_40px_hsl(280_95%_65%/0.5)] animate-glow-pulse">
            Planet Discovery
          </h1>
          <p className="text-xl md:text-2xl text-foreground max-w-md mx-auto font-semibold">
            Share your <span className="text-accent">cosmic discovery</span> with the world ✨
          </p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="relative px-8 py-6 text-lg font-black bg-gradient-to-r from-primary via-accent to-secondary hover:scale-110 transition-all duration-300 shadow-[0_0_60px_hsl(280_95%_65%/0.8)] hover:shadow-[0_0_80px_hsl(280_95%_65%/1)] group overflow-hidden border-2 border-accent/50 animate-slide-bounce"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shine bg-[length:200%_100%]" />
              <Sparkles className="w-6 h-6 mr-2 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
              <span className="relative z-10">View Discovery Card</span>
              <Sparkles className="w-6 h-6 ml-2 group-hover:rotate-180 transition-transform duration-500 relative z-10" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg bg-background/90 backdrop-blur-2xl border-2 border-primary/50 shadow-[0_0_100px_hsl(280_95%_65%/0.6)]">
            <DiscoveryCard
              planetName={planetData.planetName}
              stats={planetData.stats}
            />
          </DialogContent>
        </Dialog>

        <p className="text-sm text-muted-foreground animate-pulse">
          🚀 Click the button to reveal your cosmic achievement 🌟
        </p>
      </div>
    </div>
  );
};

export default Index;
