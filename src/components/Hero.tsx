import { Button } from "@/components/ui/button";
import newarkHero from "@/assets/newark-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${newarkHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-8">
          <h1 className="text-hero mb-6 leading-tight">
            ONE HOOD
          </h1>
          <p className="text-street text-xl md:text-2xl text-foreground/90 mb-4">
            Newark's Youth Rising Together
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Guiding at-risk youth ages 14-25 back on track through education, trades, 
            mental health support, and cultural awareness. Building respect, unity, and transformation 
            in our community.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button variant="hero" size="lg" className="px-8 py-4">
            Join the Movement
          </Button>
          <Button variant="street" size="lg" className="px-8 py-4">
            Get Support Now
          </Button>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-primary mb-2">Education</h3>
            <p className="text-muted-foreground">GED programs and school re-entry support</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-secondary mb-2">Trades</h3>
            <p className="text-muted-foreground">Apprenticeships and job training</p>
          </div>
          <div className="bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
            <h3 className="text-2xl font-bold text-accent mb-2">Wellness</h3>
            <p className="text-muted-foreground">Mental health and peer support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;