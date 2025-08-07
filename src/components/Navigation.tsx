import { Button } from "@/components/ui/button";
import { useState, useEffect, useCallback, memo } from "react";

const Navigation = memo(() => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, []);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Products', id: 'products' },
    { label: 'Services', id: 'services' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleWhatsAppClick = useCallback(() => {
    window.open('https://wa.me/9448762116?text=Hi,%20need%20a%20quote', '_blank');
  }, []);

  return (
    <nav className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-sm shadow-lg border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Brand */}
          <div className="flex items-center">
            <img 
              src="/lovable-uploads/c0149a8f-9e3a-482c-ad5f-ce4ae00a2709.png" 
              alt="Panna Distributors Logo" 
              className="h-10 w-auto mr-3"
            />
            <h1 className={`text-xl font-bold transition-colors duration-300 ${
              isScrolled ? 'text-business-navy' : 'text-business-light'
            }`}>
              Panna Distributors
            </h1>
          </div>

          {/* Navigation Buttons */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={isScrolled ? "ghost" : "secondary"}
                size="sm"
                onClick={() => scrollToSection(item.id)}
                className={
                  isScrolled 
                    ? "text-business-navy hover:text-business-gold hover:bg-business-gold/10" 
                    : "bg-background/80 text-business-navy border-business-light/30 hover:bg-background/90 hover:text-business-gold backdrop-blur-sm"
                }
              >
                {item.label}
              </Button>
            ))}
            <Button
              variant={isScrolled ? "business" : "accent"}
              size="sm"
              onClick={handleWhatsAppClick}
              className="ml-2"
            >
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant={isScrolled ? "ghost" : "outline"}
              size="sm"
              className={
                isScrolled 
                  ? "text-business-navy" 
                  : "text-business-light border-business-light/30"
              }
            >
              Menu
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
});

export default Navigation;