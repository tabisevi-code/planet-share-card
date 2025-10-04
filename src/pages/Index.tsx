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
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      {/* Background stars effect */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      
      <div className="relative z-10 text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            Planet Discovery
          </h1>
          <p className="text-xl text-muted-foreground max-w-md mx-auto">
            Share your cosmic discovery with the world
          </p>
        </div>

        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity shadow-[0_0_30px_rgba(168,85,247,0.5)] group"
            >
              <Sparkles className="w-5 h-5 mr-2 group-hover:animate-spin" />
              View Discovery Card
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-lg bg-background/95 backdrop-blur-xl border-primary/30">
            <DiscoveryCard
              planetName={planetData.planetName}
              stats={planetData.stats}
            />
          </DialogContent>
        </Dialog>

        <p className="text-sm text-muted-foreground">
          Click the button to see your shareable discovery card
        </p>
      </div>
    </div>
  );
};

export default Index;
