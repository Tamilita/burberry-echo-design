import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProductGrid from "@/components/ProductGrid";
import FeaturedSection from "@/components/FeaturedSection";
import CollectionHighlight from "@/components/CollectionHighlight";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
    </div>
  );
};

export default Index;
