import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-business-navy text-business-light">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-business-light/90 max-w-3xl mx-auto text-justify">
              Ready to partner with South India's most trusted textile distributor? 
              Let's discuss your requirements today.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-business-gold">
                Get In Touch
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-business-gold rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Address</h4>
                    <p className="text-business-light/90">
                      #13/3, Naveen Market, T.N. Setty Lane, Chickpet<br />
                      Bangalore: 560 053
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-business-gold rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Phone</h4>
                    <p className="text-business-light/90 text-xl">
                      +91 94487 62116
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-business-gold rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Email</h4>
                    <p className="text-business-light/90">
                      Info@pannadistributors.com
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-business-gold rounded-full mr-4 mt-1 flex-shrink-0"></div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Website</h4>
                    <p className="text-business-light/90">
                      pannadistributors.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Call to Action */}
            <div>
              <Card className="bg-business-light text-business-navy shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Request a Quote Today
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <p className="text-lg text-justify">
                    Whether you need shirting, suiting, or uniform materials, 
                    we're here to provide the perfect solution for your organization.
                  </p>
                  
                  <div className="space-y-4">
                    <Button 
                      variant="business" 
                      size="lg" 
                      className="w-full text-lg py-3"
                      onClick={() => window.open('tel:+919448762116', '_blank')}
                    >
                      Call Now: 94487 62116
                    </Button>
                    
                    <Button 
                      variant="accent" 
                      size="lg" 
                      className="w-full text-lg py-3"
                      onClick={() => window.open('mailto:info@pannadistributors.com', '_blank')}
                    >
                      Send Email Inquiry
                    </Button>
                  </div>
                  
                  <div className="pt-6 border-t border-business-navy/20">
                    <h4 className="font-semibold mb-3">We Serve:</h4>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Schools & Colleges</div>
                      <div>• Hotels & Restaurants</div>
                      <div>• Hospitals & Clinics</div>
                      <div>• Factories & Industries</div>
                      <div>• Government Organizations</div>
                      <div>• Corporate Offices</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-business-gold">
              Let us be your trusted partner for all shirting, suiting, and uniform requirements
            </h3>
            <p className="text-lg text-business-light/90 text-justify">
              Experience 45+ years of textile excellence with Panna Distributors
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;