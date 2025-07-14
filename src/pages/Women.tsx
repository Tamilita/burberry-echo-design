import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Women = () => {
  const categories = [
    {
      title: "Ropa",
      image: "/lovable-uploads/c6a758d2-3d13-4e3f-94e8-ef98adecccbc.png",
      link: "/c/women/clothing"
    },
    {
      title: "Abrigos",
      image: "/lovable-uploads/b82b29ea-6fb2-4ad9-90f7-90fbd590c622.png",
      link: "/c/women/coats"
    },
    {
      title: "Accesorios",
      image: "/lovable-uploads/d8b657cb-b7c4-45a1-b688-70370ace8b53.png",
      link: "/c/accessories"
    }
  ];

  const featuredProducts = [
    {
      id: 1,
      name: "Trench Coat Clásico",
      price: "$2,890",
      image: "/lovable-uploads/fab24abe-6da3-4157-aed3-77b065d2011f.png"
    },
    {
      id: 2,
      name: "Bufanda de Vicuña",
      price: "$1,650",
      image: "/lovable-uploads/4865a91e-4861-4b8e-a699-6dc5425538e8.png"
    },
    {
      id: 3,
      name: "Bolso de Mano",
      price: "$3,200",
      image: "/lovable-uploads/c8fb985f-fd95-4645-867d-c7faef7dc61a.png"
    },
    {
      id: 4,
      name: "Sombrero Elegante",
      price: "$890",
      image: "/lovable-uploads/ee5f4890-3dbc-47a7-b42b-16801eab3301.png"
    }
  ];

  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <motion.section 
          className="relative h-96 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute inset-0">
            <img
              src="/lovable-uploads/92eb4561-8d4e-4b16-9a27-7f2cd0fa1a2f.png"
              alt="Ropa para Mujeres"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-foreground/20"></div>
          </div>
          <div className="relative text-center text-white">
            <h1 className="hero-text font-playfair mb-4">Ropa para Mujeres</h1>
            <p className="text-xl">Elegancia atemporal en cada pieza</p>
          </div>
        </motion.section>

        {/* Categories Grid */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="display-text font-playfair text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Categorías
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {categories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                >
                  <Link 
                    to={category.link}
                    className="group block relative overflow-hidden rounded-lg"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-lg font-medium">Ver Detalles</span>
                      </div>
                    </div>
                    <div className="text-center mt-4">
                      <h3 className="text-xl font-playfair">{category.title}</h3>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="display-text font-playfair text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Productos Destacados
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  <Link 
                    to={`/product/${product.id}`}
                    className="group block"
                  >
                    <div className="relative overflow-hidden rounded-lg mb-4">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white text-sm font-medium">Ver Producto</span>
                      </div>
                    </div>
                    <h3 className="font-playfair text-lg mb-2">{product.name}</h3>
                    <p className="text-primary font-medium">{product.price}</p>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Women;