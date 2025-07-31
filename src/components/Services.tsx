import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import manufacturingImage from "@/assets/manufacturing.jpg";

const Services = () => {
  const advantages = [
    {
      title: "45+ Years Expertise",
      description: "Deep understanding of which fabrics suit each business need based on 45+ years of experience"
    },
    {
      title: "In-House Manufacturing",
      description: "Complete stitching factory for customized uniforms and garments with quality control"
    },
    {
      title: "Rapid Response",
      description: "Quick turnaround times and responsive customer service for urgent requirements"
    },
    {
      title: "End-to-End Solutions",
      description: "From fabric selection to final delivery - comprehensive textile solutions under one roof"
    },
    {
      title: "Trusted Partnerships",
      description: "Strong relationships with leading mills like S Kumars ensuring consistent quality and competitive pricing"
    },
    {
      title: "South India Coverage",
      description: "Extensive service network covering all cities and towns across South India"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-business-navy mb-6">
              Why Choose Panna Distributors
            </h2>
            <p className="text-xl text-business-muted max-w-3xl mx-auto">
              Competitive advantages that make us your ideal textile partner
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={manufacturingImage} 
                alt="Modern manufacturing facility" 
                className="w-full rounded-lg shadow-card"
              />
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-business-navy mb-6">
                Complete Manufacturing Capabilities
              </h3>
              <p className="text-lg text-foreground leading-relaxed mb-6">
                Our state-of-the-art in-house stitching factory allows us to provide end-to-end 
                solutions from raw fabric to finished garments. We ensure quality control at 
                every step of the manufacturing process.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-business-gold rounded-full mr-4"></div>
                  <span className="text-foreground">Custom uniform design and manufacturing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-business-gold rounded-full mr-4"></div>
                  <span className="text-foreground">Quality control and testing</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-business-gold rounded-full mr-4"></div>
                  <span className="text-foreground">Timely delivery and logistics</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Competitive Advantages Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {advantages.map((advantage, index) => (
              <Card key={index} className="shadow-card border-0 hover:shadow-business transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl text-business-navy flex items-center">
                    <div className="w-4 h-4 bg-business-gold rounded-full mr-3"></div>
                    {advantage.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          {/* Service Catalogues Section */}
          <div className="bg-background rounded-lg p-8">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-business-navy mb-4">
                Service Catalogues & Resources
              </h3>
              <p className="text-lg text-business-muted max-w-2xl mx-auto">
                Access detailed information about our manufacturing capabilities and service offerings
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="shadow-card border-0 hover:shadow-business transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-business-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-business-gold rounded"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-business-navy mb-3">Manufacturing Catalogue</h4>
                  <p className="text-business-muted mb-4">Complete overview of our in-house manufacturing capabilities and processes</p>
                  <Button variant="business" className="w-full">
                    Download Catalogue
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 hover:shadow-business transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-business-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-business-gold rounded"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-business-navy mb-3">Custom Solutions Guide</h4>
                  <p className="text-business-muted mb-4">Detailed guide on our customization services and bespoke solutions</p>
                  <Button variant="business" className="w-full">
                    Download Guide
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-0 hover:shadow-business transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="w-12 h-12 bg-business-gold/10 rounded-lg flex items-center justify-center mb-4">
                    <div className="w-6 h-6 bg-business-gold rounded"></div>
                  </div>
                  <h4 className="text-xl font-semibold text-business-navy mb-3">Quality Standards</h4>
                  <p className="text-business-muted mb-4">Our quality control processes and industry certifications</p>
                  <Button variant="business" className="w-full">
                    View Standards
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;