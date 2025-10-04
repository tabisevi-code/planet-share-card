import { Share2, Twitter, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import planetImage from "@/assets/cosmic-planet.png";

interface DiscoveryCardProps {
  planetName: string;
  stats: {
    distance: string;
    size: string;
    temperature: string;
    type: string;
  };
}

export const DiscoveryCard = ({ planetName, stats }: DiscoveryCardProps) => {
  const shareText = encodeURIComponent(`I helped NASA's data find a new planet! Check out ${planetName}! 🚀🪐`);
  const shareUrl = encodeURIComponent(window.location.href);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`,
    instagram: `https://www.instagram.com/`, // Instagram doesn't support direct sharing via URL
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Card container with holographic effect */}
      <div className="relative bg-gradient-to-b from-card to-background rounded-2xl p-6 border-2 border-primary/30 shadow-[0_10px_40px_-10px_hsl(267_84%_45%/0.5)] animate-scale-in">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent rounded-2xl blur-xl" />
        
        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Header */}
          <div className="text-center space-y-2">
            <div className="inline-block px-4 py-1 bg-primary/20 rounded-full border border-primary/30">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">Discovery Confirmed</span>
            </div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              {planetName}
            </h2>
          </div>

          {/* Planet Image */}
          <div className="relative flex justify-center py-6">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-radial from-primary/30 via-accent/20 to-transparent animate-glow" />
            </div>
            <img
              src={planetImage}
              alt={planetName}
              className="relative w-40 h-40 object-contain animate-float drop-shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            />
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-muted/50 rounded-lg p-3 border border-border backdrop-blur-sm">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Distance</p>
              <p className="text-sm font-semibold text-foreground">{stats.distance}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 border border-border backdrop-blur-sm">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Size</p>
              <p className="text-sm font-semibold text-foreground">{stats.size}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 border border-border backdrop-blur-sm">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Temperature</p>
              <p className="text-sm font-semibold text-foreground">{stats.temperature}</p>
            </div>
            <div className="bg-muted/50 rounded-lg p-3 border border-border backdrop-blur-sm">
              <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Type</p>
              <p className="text-sm font-semibold text-foreground">{stats.type}</p>
            </div>
          </div>

          {/* Congratulatory Message */}
          <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-4 border border-primary/20">
            <p className="text-center text-sm font-medium text-foreground">
              🎉 I helped NASA's data find a new planet! 🚀
            </p>
          </div>

          {/* Social Share Buttons */}
          <div className="space-y-3">
            <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
              <Share2 className="w-3 h-3" />
              <span>Share your discovery</span>
            </div>
            <div className="flex gap-2 justify-center">
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-primary/30 hover:bg-primary/20 hover:border-primary/50"
                onClick={() => window.open(socialLinks.twitter, '_blank')}
              >
                <Twitter className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-primary/30 hover:bg-primary/20 hover:border-primary/50"
                onClick={() => window.open(socialLinks.facebook, '_blank')}
              >
                <Facebook className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="w-10 h-10 rounded-full border-primary/30 hover:bg-primary/20 hover:border-primary/50"
                onClick={() => window.open(socialLinks.instagram, '_blank')}
              >
                <Instagram className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* NASA Badge */}
          <div className="flex items-center justify-center gap-2 pt-2">
            <div className="flex items-center gap-2 px-3 py-1 bg-background/50 rounded-full border border-border/50">
              <span className="text-xs text-muted-foreground">Powered by NASA Data</span>
              <div className="w-4 h-4 rounded-full bg-gradient-to-br from-primary to-secondary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
