import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Products = () => {
  const products = [
    {
      title: "Shirting Fabrics",
      description: "Complete range from general to premium shirting materials for all occasions and requirements",
      features: ["Cotton Blends", "Pure Cotton", "Formal Wear", "Casual Wear", "Premium Quality"]
    },
    {
      title: "Suiting Materials", 
      description: "Extensive collection covering every suiting need for professional and formal wear",
      features: ["Wool Blends", "Polyester Suits", "Formal Suiting", "Wedding Collection", "Corporate Wear"]
    },
    {
      title: "Uniform Materials",
      description: "Specialized solutions for schools, colleges, hotels, hospitals, factories and organizations",
      features: ["School Uniforms", "Hospital Scrubs", "Hotel Staff", "Factory Workwear", "Custom Solutions"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-business-navy mb-6">
              Our Product Portfolio
            </h2>
            <p className="text-xl text-business-muted max-w-3xl mx-auto">
              Comprehensive textile solutions for every business and institutional need
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {products.map((product, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-business transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-business-navy mb-3">
                    {product.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-6 leading-relaxed">
                    {product.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <div className="w-2 h-2 bg-business-gold rounded-full mr-3"></div>
                        <span className="text-business-muted">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Button variant="business" className="w-full">
                    Request Samples
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="bg-gradient-to-r from-business-navy to-business-navy/90 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-business-light mb-4">
              In-House Stitching Factory
            </h3>
            <p className="text-xl text-business-light/90 mb-6 max-w-3xl mx-auto">
              Complete customization services with our own stitching facility. From fabric selection 
              to final garment delivery - we handle it all under one roof.
            </p>
            <Button variant="accent" size="lg" className="text-lg px-8 py-3">
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;