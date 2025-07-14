import { motion } from "framer-motion";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FeaturedSection from "@/components/FeaturedSection";
import CollectionHighlight from "@/components/CollectionHighlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <motion.div 
      className="min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      {/* Header */}
      <Header />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <HeroSection />
        
        {/* Product Grid */}
        <ProductGrid />
        
        {/* Featured Section */}
        <FeaturedSection />
        
        {/* Collection Highlight */}
        <CollectionHighlight />
      </main>
      
      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Index;
