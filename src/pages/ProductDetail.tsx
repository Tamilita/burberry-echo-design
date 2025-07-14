import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Heart, ShoppingBag, Star } from "lucide-react";

const ProductDetail = () => {
  const { id } = useParams();

  // Mock product data - in real app this would come from API/database
  const product = {
    id: id,
    name: "Sombrero de Vicuña Premium",
    price: "$1,450",
    originalPrice: "$1,850",
    description: "Elegante sombrero confeccionado con la más fina fibra de vicuña, siguiendo técnicas artesanales ancestrales. Cada pieza es única y representa siglos de tradición peruana.",
    mainImage: "/lovable-uploads/ee5f4890-3dbc-47a7-b42b-16801eab3301.png",
    galleryImages: [
      "/lovable-uploads/1a482b32-14be-4e22-9d29-96baf376085e.png",
      "/lovable-uploads/4865a91e-4861-4b8e-a699-6dc5425538e8.png",
      "/lovable-uploads/c8fb985f-fd95-4645-867d-c7faef7dc61a.png"
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Beige Natural", "Miel", "Castaño"],
    features: [
      "100% Fibra de Vicuña Auténtica",
      "Hecho a mano por artesanos peruanos",
      "Comercio justo y sostenible",
      "Pieza única numerada"
    ],
    rating: 4.9,
    reviews: 127
  };

  const recommendedProducts = [
    {
      id: 9,
      name: "Bufanda de Vicuña",
      price: "$890",
      image: "/lovable-uploads/4865a91e-4861-4b8e-a699-6dc5425538e8.png"
    },
    {
      id: 10,
      name: "Gorro de Alpaca",
      price: "$450",
      image: "/lovable-uploads/1a482b32-14be-4e22-9d29-96baf376085e.png"
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
        <div className="container mx-auto px-6 py-12">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Hero Image - 1/3 */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="sticky top-24">
                <img
                  src={product.mainImage}
                  alt={product.name}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </motion.div>

            {/* Gallery - 1/3 */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="space-y-4 max-h-96 overflow-y-auto custom-scrollbar">
                {product.galleryImages.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${product.name} vista ${index + 1}`}
                    className="w-full h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </motion.div>

            {/* Product Info - 1/3 */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <div className="sticky top-24 space-y-6">
                <div>
                  <Badge variant="secondary" className="mb-2">Edición Limitada</Badge>
                  <h1 className="text-3xl font-playfair mb-4">{product.name}</h1>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {product.rating} ({product.reviews} reseñas)
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 mb-6">
                    <span className="text-2xl font-bold text-primary">{product.price}</span>
                    <span className="text-lg text-muted-foreground line-through">{product.originalPrice}</span>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Tallas disponibles:</h3>
                  <div className="flex space-x-2">
                    {product.sizes.map((size) => (
                      <Button key={size} variant="outline" size="sm">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Colores:</h3>
                  <div className="space-y-2">
                    {product.colors.map((color) => (
                      <div key={color} className="flex items-center space-x-2">
                        <div className="w-4 h-4 rounded-full bg-primary"></div>
                        <span className="text-sm">{color}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <Button className="w-full btn-luxury" size="lg">
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Añadir al Carrito
                  </Button>
                  <Button variant="outline" className="w-full" size="lg">
                    <Heart className="w-4 h-4 mr-2" />
                    Añadir a Favoritos
                  </Button>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Descripción:</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h3 className="font-medium mb-3">Características:</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Recommended Products */}
          <motion.section 
            className="mt-20 py-12 border-t"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="display-text font-playfair text-center mb-12">Combina con Esto</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {recommendedProducts.map((item, index) => (
                <motion.div
                  key={item.id}
                  className="group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
                >
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="font-playfair text-lg mb-2">{item.name}</h3>
                  <p className="text-primary font-medium">{item.price}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default ProductDetail;