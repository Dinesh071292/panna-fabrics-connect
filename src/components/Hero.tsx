import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-textile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional textile warehouse" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-business-navy/80 to-business-navy/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-business-light">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            <span className="block text-business-gold">Panna Distributors</span>
            <span className="block text-3xl md:text-4xl font-medium mt-4">
              45+ Years of Textile Excellence
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-business-light/90 max-w-3xl mx-auto">
            Wholesale Shirting, Suiting & Uniform Materials for Schools, Colleges, 
            Hotels, Hospitals, Factories across South India
          </p>
          
          <div className="flex justify-center items-center mb-12">
            <Button 
              variant="accent" 
              size="lg"
              onClick={() => window.open('https://wa.me/9448762116?text=Hi,%20Need%20a%20Quote', '_blank')}
              className="text-lg px-8 py-6 h-auto font-semibold"
            >
              Get Quote Now
            </Button>
          </div>
          
          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-business-gold mb-2">45+</div>
              <div className="text-business-light/80">Years of Excellence</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-business-gold mb-2">1979</div>
              <div className="text-business-light/80">Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-business-gold mb-2">All</div>
              <div className="text-business-light/80">South India Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;