import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="stagger-fade">
            <img 
              src="/lovable-uploads/f6889e80-ef8d-4c3b-b267-16340fce7f29.png" 
              alt="Vicuña de Oro" 
              className="h-12 w-auto mb-4 filter invert"
            />
            <p className="text-background/80 text-sm leading-relaxed mb-4">
              Preservamos la tradición andina creando sombreros artesanales 
              de lujo con fibra de vicuña auténtica y técnicas ancestrales.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="stagger-fade">
            <h3 className="font-playfair text-lg mb-4">Productos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/hombres" className="text-background/80 hover:text-primary transition-colors">Sombreros para Hombres</a></li>
              <li><a href="/mujeres" className="text-background/80 hover:text-primary transition-colors">Sombreros para Mujeres</a></li>
              <li><a href="/accesorios" className="text-background/80 hover:text-primary transition-colors">Accesorios</a></li>
              <li><a href="/coleccion-premium" className="text-background/80 hover:text-primary transition-colors">Colección Premium</a></li>
              <li><a href="/personalizados" className="text-background/80 hover:text-primary transition-colors">Diseños Personalizados</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="stagger-fade">
            <h3 className="font-playfair text-lg mb-4">Soporte</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contacto" className="text-background/80 hover:text-primary transition-colors">Contacto</a></li>
              <li><a href="/guia-tallas" className="text-background/80 hover:text-primary transition-colors">Guía de Tallas</a></li>
              <li><a href="/envios" className="text-background/80 hover:text-primary transition-colors">Envíos y Devoluciones</a></li>
              <li><a href="/cuidados" className="text-background/80 hover:text-primary transition-colors">Cuidado del Producto</a></li>
              <li><a href="/faq" className="text-background/80 hover:text-primary transition-colors">Preguntas Frecuentes</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="stagger-fade">
            <h3 className="font-playfair text-lg mb-4">Newsletter</h3>
            <p className="text-background/80 text-sm mb-4">
              Suscríbete para recibir noticias sobre nuevas colecciones y ofertas exclusivas.
            </p>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Tu correo electrónico"
                className="bg-background/10 border-background/30 text-background placeholder:text-background/60"
              />
              <Button className="w-full btn-luxury">
                Suscribirse
              </Button>
            </div>
          </div>
        </div>

        {/* Association Logo */}
        <div className="text-center mb-8 stagger-fade">
          <img 
            src="/lovable-uploads/b82b29ea-6fb2-4ad9-90f7-90fbd590c622.png" 
            alt="Asociación Vicuña de Oro" 
            className="h-16 w-auto mx-auto opacity-80 hover:opacity-100 transition-opacity"
          />
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Vicuña de Oro. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="/privacidad" className="text-background/60 hover:text-primary transition-colors">
                Política de Privacidad
              </a>
              <a href="/terminos" className="text-background/60 hover:text-primary transition-colors">
                Términos de Uso
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;