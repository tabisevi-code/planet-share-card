import { Share2, Twitter, Facebook, Instagram, Sparkles, Star, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import planetImage from "@/assets/cosmic-planet.png";
import { useEffect, useState } from "react";

interface DiscoveryCardProps {
  planetName: string;
  stats: {
    distance: string;
    size: string;
    temperature: string;
    type: string;
  };
}

const ParticleField = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-accent rounded-full animate-sparkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${1.5 + Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export const DiscoveryCard = ({ planetName, stats }: DiscoveryCardProps) => {
  const [showConfetti, setShowConfetti] = useState(false);
  
  useEffect(() => {
    setShowConfetti(true);
  }, []);

  const shareText = encodeURIComponent(`I helped NASA's data find a new planet! Check out ${planetName}! 🚀🪐`);
  const shareUrl = encodeURIComponent(window.location.href);

  const socialLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${shareText}&url=${shareUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}&quote=${shareText}`,
    instagram: `https://www.instagram.com/`,
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Particle field */}
      <ParticleField />
      
      {/* Rotating rings behind card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[120%] h-[120%] border-2 border-primary/20 rounded-full animate-rotate-slow" />
        <div className="absolute w-[110%] h-[110%] border-2 border-secondary/20 rounded-full animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />
      </div>

      {/* Pulsing rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="absolute w-full h-full border-4 border-primary/30 rounded-2xl animate-pulse-ring" />
        <div className="absolute w-full h-full border-4 border-secondary/30 rounded-2xl animate-pulse-ring" style={{ animationDelay: '1s' }} />
      </div>

      {/* Card container with holographic effect */}
      <div className="relative bg-gradient-to-br from-card via-card to-background rounded-2xl p-6 border-2 border-primary/50 shadow-[0_20px_60px_-15px_hsl(280_95%_45%/0.7),0_0_80px_hsl(320_95%_60%/0.4)] animate-scale-bounce backdrop-blur-xl overflow-hidden">
        {/* Animated shine effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-shine bg-[length:200%_100%]" />
        
        {/* Multi-layered glow effects */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/30 via-accent/20 to-transparent rounded-2xl blur-2xl animate-glow-pulse" />
        <div className="absolute inset-0 bg-gradient-radial from-secondary/20 via-transparent to-transparent rounded-2xl blur-xl" />
        
        {/* Content */}
        <div className="relative z-10 space-y-6">
          {/* Header with sparkles */}
          <div className="text-center space-y-3 animate-slide-bounce">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-accent animate-sparkle" />
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-full border-2 border-primary/50 shadow-[0_0_20px_hsl(280_95%_65%/0.5)]">
                <Star className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '3s' }} />
                <span className="text-sm font-bold text-foreground uppercase tracking-wider">Discovery Confirmed</span>
                <Star className="w-4 h-4 text-accent animate-spin" style={{ animationDuration: '3s', animationDirection: 'reverse' }} />
              </div>
              <Sparkles className="w-5 h-5 text-accent animate-sparkle" style={{ animationDelay: '0.5s' }} />
            </div>
            <h2 className="text-4xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent drop-shadow-[0_0_30px_hsl(280_95%_65%/0.5)] animate-glow-pulse">
              {planetName}
            </h2>
          </div>

          {/* Planet Image with mega effects */}
          <div className="relative flex justify-center py-8">
            {/* Multiple rotating glow rings */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-56 h-56 rounded-full bg-gradient-radial from-primary/40 via-accent/30 to-transparent animate-pulse-ring blur-xl" />
              <div className="absolute w-48 h-48 rounded-full bg-gradient-conic from-primary via-secondary to-accent animate-rotate-slow blur-2xl opacity-60" />
            </div>
            
            {/* Orbiting particles */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full animate-pulse"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `rotate(${i * 45}deg) translateY(-80px)`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
            
            <img
              src={planetImage}
              alt={planetName}
              className="relative w-48 h-48 object-contain animate-float drop-shadow-[0_0_60px_rgba(168,85,247,1)] z-10"
              style={{ filter: 'drop-shadow(0 0 40px hsl(320 95% 70%)) drop-shadow(0 0 80px hsl(280 95% 65%))' }}
            />
            
            {/* Corner sparkles */}
            <Rocket className="absolute top-0 right-0 w-6 h-6 text-accent animate-bounce" />
            <Star className="absolute top-0 left-0 w-5 h-5 text-primary animate-sparkle" />
            <Star className="absolute bottom-0 right-0 w-5 h-5 text-secondary animate-sparkle" style={{ animationDelay: '0.5s' }} />
            <Star className="absolute bottom-0 left-0 w-4 h-4 text-accent animate-sparkle" style={{ animationDelay: '1s' }} />
          </div>

          {/* Stats Grid with animations */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { label: 'Distance', value: stats.distance, delay: '0s' },
              { label: 'Size', value: stats.size, delay: '0.1s' },
              { label: 'Temperature', value: stats.temperature, delay: '0.2s' },
              { label: 'Type', value: stats.type, delay: '0.3s' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="relative bg-gradient-to-br from-muted/80 to-muted/40 rounded-xl p-4 border-2 border-primary/30 backdrop-blur-sm hover:border-accent/50 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_hsl(280_95%_65%/0.4)] group overflow-hidden animate-slide-bounce"
                style={{ animationDelay: stat.delay }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <p className="text-xs text-accent uppercase tracking-wider mb-1 font-bold">{stat.label}</p>
                <p className="text-sm font-black text-foreground relative z-10">{stat.value}</p>
              </div>
            ))}
          </div>

          {/* Congratulatory Message with extra flair */}
          <div className="relative bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 rounded-2xl p-5 border-2 border-accent/50 shadow-[0_0_40px_hsl(45_100%_60%/0.3)] overflow-hidden animate-slide-bounce" style={{ animationDelay: '0.4s' }}>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/20 to-transparent animate-shine bg-[length:200%_100%]" />
            <div className="relative flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-accent animate-spin" style={{ animationDuration: '2s' }} />
              <p className="text-center text-base font-black text-foreground">
                🎉 I helped NASA's data find a new planet! 🚀
              </p>
              <Sparkles className="w-5 h-5 text-accent animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />
            </div>
          </div>

          {/* Social Share Buttons with pizzazz */}
          <div className="space-y-4 animate-slide-bounce" style={{ animationDelay: '0.5s' }}>
            <div className="flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-bold text-accent uppercase tracking-wider">Share Your Discovery</span>
              <Share2 className="w-4 h-4 text-accent animate-pulse" />
            </div>
            <div className="flex gap-3 justify-center">
              <Button
                variant="outline"
                size="icon"
                className="relative w-12 h-12 rounded-full border-2 border-primary/50 bg-gradient-to-br from-primary/20 to-transparent hover:from-primary/40 hover:border-primary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_hsl(280_95%_65%/0.6)] group overflow-hidden"
                onClick={() => window.open(socialLinks.twitter, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 animate-shine bg-[length:200%_100%]" />
                <Twitter className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="relative w-12 h-12 rounded-full border-2 border-secondary/50 bg-gradient-to-br from-secondary/20 to-transparent hover:from-secondary/40 hover:border-secondary hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_hsl(190_95%_60%/0.6)] group overflow-hidden"
                onClick={() => window.open(socialLinks.facebook, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-secondary/30 to-transparent opacity-0 group-hover:opacity-100 animate-shine bg-[length:200%_100%]" />
                <Facebook className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="relative w-12 h-12 rounded-full border-2 border-accent/50 bg-gradient-to-br from-accent/20 to-transparent hover:from-accent/40 hover:border-accent hover:scale-110 transition-all duration-300 hover:shadow-[0_0_30px_hsl(45_100%_60%/0.6)] group overflow-hidden"
                onClick={() => window.open(socialLinks.instagram, '_blank')}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 animate-shine bg-[length:200%_100%]" />
                <Instagram className="w-5 h-5 relative z-10 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>

          {/* NASA Badge with glow */}
          <div className="flex items-center justify-center gap-2 pt-2 animate-slide-bounce" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-3 px-5 py-2 bg-gradient-to-r from-background/80 to-background/60 rounded-full border-2 border-primary/30 backdrop-blur-sm shadow-[0_0_20px_hsl(280_95%_65%/0.3)]">
              <span className="text-xs font-bold text-foreground">Powered by NASA Data</span>
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-accent to-secondary animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0.5 rounded-full bg-background" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
