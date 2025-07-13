const FeaturedSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="stagger-fade">
            <h2 className="display-text font-playfair mb-6">
              Tradición y Lujo en Cada Pieza
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              En las alturas de los Andes peruanos, donde las vicuñas han habitado 
              por milenios, nace nuestra inspiración. Cada sombrero es testimonio 
              de una tradición que honra tanto al animal sagrado como al artesano 
              que dedica su vida a preservar estas técnicas ancestrales.
            </p>
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm uppercase tracking-wide">Fibra de Vicuña Auténtica</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm uppercase tracking-wide">Técnicas Artesanales Ancestrales</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm uppercase tracking-wide">Comercio Justo y Sostenible</span>
              </div>
            </div>
            <button className="btn-luxury">
              Conoce Nuestra Historia
            </button>
          </div>

          {/* Right Image */}
          <div className="stagger-fade">
            <div className="relative">
              <img
                src="/lovable-uploads/92eb4561-8d4e-4b16-9a27-7f2cd0fa1a2f.png"
                alt="Vicuñas en su hábitat natural"
                className="w-full h-96 object-cover rounded-lg luxury-hover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;