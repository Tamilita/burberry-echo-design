const CollectionHighlight = () => {
  const collections = [
    {
      title: "Colección Tradicional",
      description: "Sombreros clásicos inspirados en diseños andinos milenarios",
      image: "/lovable-uploads/ee5f4890-3dbc-47a7-b42b-16801eab3301.png",
      link: "/tradicional"
    },
    {
      title: "Colección Moderna",
      description: "Diseños contemporáneos que fusionan tradición y modernidad",
      image: "/lovable-uploads/b82b29ea-6fb2-4ad9-90f7-90fbd590c622.png",
      link: "/moderna"
    }
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-text font-playfair mb-4 stagger-fade">
            Nuestras Colecciones
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto stagger-fade">
            Dos mundos unidos por la pasión de crear piezas únicas que 
            honran nuestras raíces mientras abrazan el futuro.
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {collections.map((collection, index) => (
            <div
              key={collection.title}
              className={`group cursor-pointer stagger-fade`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg bg-white">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-80 object-cover luxury-hover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-playfair mb-2 group-hover:text-primary transition-colors">
                    {collection.title}
                  </h3>
                  <p className="text-sm opacity-90 mb-4 leading-relaxed">
                    {collection.description}
                  </p>
                  <div className="flex items-center space-x-2 text-sm uppercase tracking-wide group-hover:text-primary transition-colors">
                    <span>Explorar</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionHighlight;