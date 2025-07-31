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
            <p className="text-xl text-business-muted max-w-3xl mx-auto text-justify">
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
                  <p className="text-foreground mb-6 leading-relaxed text-justify">
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
                  
                  <div className="flex justify-center">
                    <Button 
                      variant="business" 
                      className="w-full"
                      onClick={() => window.open(`https://wa.me/919448762116?text=Hi Could you please share ${product.title} Catalogue`, '_blank')}
                    >
                      Request Catalogue
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Product Catalogues Section */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-business-navy mb-4">
                Product Catalogues
              </h3>
              <p className="text-lg text-business-muted max-w-2xl mx-auto text-justify">
                Browse our comprehensive catalogues featuring the latest fabric collections and specifications
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="shadow-card border-0 hover:shadow-business transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-business-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-business-gold rounded"></div>
                  </div>
                  <h4 className="font-semibold text-business-navy mb-2">Shirting Collection</h4>
                  <p className="text-sm text-business-muted mb-4">Latest shirting fabrics catalog</p>
                  <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 hover:shadow-business transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-business-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-business-gold rounded"></div>
                  </div>
                  <h4 className="font-semibold text-business-navy mb-2">Suiting Materials</h4>
                  <p className="text-sm text-business-muted mb-4">Premium suiting collection</p>
                  <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 hover:shadow-business transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-business-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-business-gold rounded"></div>
                  </div>
                  <h4 className="font-semibold text-business-navy mb-2">Uniform Fabrics</h4>
                  <p className="text-sm text-business-muted mb-4">Institutional uniform materials</p>
                  <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 hover:shadow-business transition-all duration-300 cursor-pointer">
                <CardContent className="pt-6 text-center">
                  <div className="w-16 h-16 bg-business-gold/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <div className="w-8 h-8 bg-business-gold rounded"></div>
                  </div>
                  <h4 className="font-semibold text-business-navy mb-2">Complete Range</h4>
                  <p className="text-sm text-business-muted mb-4">Full product range catalog</p>
                  <Button variant="outline" size="sm" className="w-full">Download PDF</Button>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Additional Services */}
          <div className="bg-gradient-to-r from-business-navy to-business-navy/90 rounded-lg p-8 text-center">
            <h3 className="text-3xl font-bold text-business-light mb-4">
              In-House Stitching Factory
            </h3>
            <p className="text-xl text-business-light/90 mb-6 max-w-3xl mx-auto text-justify">
              Complete customization services with our own stitching facility. From fabric selection 
              to final garment delivery - we handle it all under one roof.
            </p>
            <Button 
              variant="accent" 
              size="lg" 
              className="text-lg px-8 py-3"
              onClick={() => window.open('https://wa.me/919448762116?text=Hey was going through your website, Can we discuss the products / services you offer', '_blank')}
            >
              Learn More About Our Services
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;