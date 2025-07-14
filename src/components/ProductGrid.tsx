import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Sombrero Clásico de Vicuña",
      price: "$1,450",
      description: "Elegante sombrero confeccionado con fibra de vicuña premium",
      image: "/lovable-uploads/ee5f4890-3dbc-47a7-b42b-16801eab3301.png"
    },
    {
      id: 2,
      name: "Gorro Artesanal Andino",
      price: "$890",
      description: "Diseño tradicional con técnicas ancestrales",
      image: "/lovable-uploads/1a482b32-14be-4e22-9d29-96baf376085e.png"
    },
    {
      id: 3,
      name: "Bufanda de Alpaca",
      price: "$650",
      description: "Suave y cálida, perfecta para cualquier ocasión",
      image: "/lovable-uploads/4865a91e-4861-4b8e-a699-6dc5425538e8.png"
    },
    {
      id: 4,
      name: "Abrigo de Invierno",
      price: "$2,300",
      description: "Elegancia y calidez en una sola prenda",
      image: "/lovable-uploads/c8fb985f-fd95-4645-867d-c7faef7dc61a.png"
    },
    {
      id: 5,
      name: "Conjunto Premium",
      price: "$3,200",
      description: "La más fina selección de fibra de vicuña",
      image: "/lovable-uploads/fab24abe-6da3-4157-aed3-77b065d2011f.png"
    },
    {
      id: 6,
      name: "Chaleco Tradicional",
      price: "$1,200",
      description: "Diseño clásico con bordados artesanales",
      image: "/lovable-uploads/d8b657cb-b7c4-45a1-b688-70370ace8b53.png"
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="display-text font-playfair mb-4">
            Colección Destacada
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cada pieza es una obra de arte, creada con fibra de vicuña 
            y técnicas ancestrales transmitidas de generación en generación.
          </p>
        </motion.div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.div 
              key={product.id} 
              className="group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="block">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-lg font-medium">Ver Detalles</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="font-playfair text-lg font-medium">{product.name}</h3>
                  <p className="text-muted-foreground text-sm">{product.description}</p>
                  <p className="text-primary font-medium">{product.price}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;