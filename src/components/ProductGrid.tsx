import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Product {
  id: number;
  name: string;
  price: string;
  image: string;
  hoverImage?: string;
  category: string;
}

const ProductGrid = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products: Product[] = [
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
      name: "Sombrero Floral Camel",
      price: "S/ 295",
      image: "/lovable-uploads/fab24abe-6da3-4157-aed3-77b065d2011f.png",
      category: "Decorados"
    },
    {
      id: 4,
      name: "Sombrero Artesanal Bordado",
      price: "S/ 350",
      image: "/lovable-uploads/4865a91e-4861-4b8e-a699-6dc5425538e8.png",
      category: "Artesanales"
    },
    {
      id: 5,
      name: "Sombrero Premium Negro",
      price: "S/ 380",
      image: "/lovable-uploads/c8fb985f-fd95-4645-867d-c7faef7dc61a.png",
      category: "Premium"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="display-text font-playfair mb-4 stagger-fade">
            Nueva Colección
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto stagger-fade">
            Cada sombrero es una obra de arte, creado con fibra de vicuña 
            y técnicas ancestrales transmitidas de generación en generación.
          </p>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`group cursor-pointer stagger-fade`}
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <div className="image-overlay bg-white rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-80 object-cover luxury-hover"
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="text-center text-white">
                    <p className="text-sm uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <button className="btn-luxury text-xs">
                      Ver Detalles
                    </button>
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="text-center">
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

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button className="btn-luxury">
            Ver Toda la Colección
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;