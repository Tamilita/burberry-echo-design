import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Filter, ChevronDown } from "lucide-react";

const Hombres = () => {
  const products = [
    {
      id: 1,
      name: "Sombrero Clásico Miel",
      price: "S/ 280",
      image: "/lovable-uploads/d8b657cb-b7c4-45a1-b688-70370ace8b53.png",
      category: "Clásicos"
    },
    {
      id: 2,
      name: "Sombrero Elegante Negro",
      price: "S/ 320",
      image: "/lovable-uploads/1a482b32-14be-4e22-9d29-96baf376085e.png",
      category: "Elegantes"
    },
    {
      id: 3,
      name: "Sombrero Artesanal Bordado",
      price: "S/ 350",
      image: "/lovable-uploads/4865a91e-4861-4b8e-a699-6dc5425538e8.png",
      category: "Artesanales"
    },
    {
      id: 4,
      name: "Sombrero Premium Negro",
      price: "S/ 380",
      image: "/lovable-uploads/c8fb985f-fd95-4645-867d-c7faef7dc61a.png",
      category: "Premium"
    }
  ];

  const categories = [
    "Todos",
    "Clásicos",
    "Elegantes",
    "Artesanales",
    "Premium"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="relative h-96 overflow-hidden">
          <img
            src="/lovable-uploads/c6a758d2-3d13-4e3f-94e8-ef98adecccbc.png"
            alt="Sombreros para Hombres"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/40"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-5xl font-playfair mb-4 fade-up">
                Sombreros para Hombres
              </h1>
              <p className="text-xl opacity-90 fade-up">
                Elegancia andina para el hombre moderno
              </p>
            </div>
          </div>
        </section>

        {/* Filters and Products */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            {/* Filter Bar */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 space-y-4 md:space-y-0">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant="outline"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {category}
                  </Button>
                ))}
              </div>
              
              <div className="flex items-center space-x-4">
                <Button variant="outline" className="flex items-center space-x-2">
                  <Filter className="h-4 w-4" />
                  <span>Filtros</span>
                </Button>
                <Button variant="outline" className="flex items-center space-x-2">
                  <span>Ordenar por</span>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {products.map((product, index) => (
                <div
                  key={product.id}
                  className={`group cursor-pointer stagger-fade`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="image-overlay bg-white rounded-lg overflow-hidden mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-80 object-cover luxury-hover"
                    />
                    
                    {/* Quick Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="space-y-2">
                        <Button className="btn-luxury text-xs w-full">
                          Vista Rápida
                        </Button>
                        <Button variant="outline" className="text-xs w-full bg-white">
                          Añadir al Carrito
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="text-center">
                    <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-playfair text-lg mb-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {product.price}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-16">
              <Button className="btn-luxury">
                Cargar Más Productos
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Hombres;