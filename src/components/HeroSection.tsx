import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Image */}
      <div className="absolute inset-0">
        <img
          src="/lovable-uploads/c6a758d2-3d13-4e3f-94e8-ef98adecccbc.png"
          alt="Luxury Vicuña Collection"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/30"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white max-w-4xl mx-auto px-6">
          <h1 className="hero-text font-playfair mb-6 fade-up">
            Vicuña de Oro
          </h1>
          <p className="text-xl md:text-2xl mb-8 font-light leading-relaxed fade-up opacity-90">
            Descubre la elegancia andina en cada fibra. Sombreros artesanales 
            inspirados en la tradición milenaria de las vicuñas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-up">
            <Button className="btn-luxury">
              Explorar Colección
            </Button>
            <Button 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-foreground"
            >
              Descubrir Historia
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white fade-up">
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm uppercase tracking-wide">Descubrir</span>
          <div className="w-px h-8 bg-white opacity-60 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;