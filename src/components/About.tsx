import { Card, CardContent } from "@/components/ui/card";
import businessMeeting from "@/assets/business-meeting.jpg";

const About = () => {
  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-business-navy mb-6">
              About Panna Distributors
            </h2>
            <p className="text-xl text-business-muted max-w-3xl mx-auto">
              45+ years of unwavering commitment to quality textiles and customer satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src={businessMeeting} 
                alt="Business meeting with textile samples" 
                className="w-full rounded-lg shadow-card"
              />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-business-navy mb-4">
                Your Trusted Textile Partner Since 1979
              </h3>
              
              <p className="text-lg text-foreground leading-relaxed">
                Located at #13/3, Naveen Market, T.N. Setty Lane, Chickpet, Bangalore: 560 053, Panna Distributors 
                has been serving the textile needs of institutions across South India for over 
                45 years.
              </p>
              
              <p className="text-lg text-foreground leading-relaxed">
                As a sole proprietorship with 30+ years of hands-on experience, we understand 
                the unique fabric requirements of schools, colleges, hotels, hospitals, and 
                factories. Our dedicated team of 7 professionals ensures personalized service 
                and rapid response to your orders.
              </p>
            </div>
          </div>
          
          {/* Company Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <Card className="text-center shadow-card border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-business-navy mb-2">1979</div>
                <div className="text-business-muted">Established</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-business-navy mb-2">45+</div>
                <div className="text-business-muted">Years Experience</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-business-navy mb-2">7</div>
                <div className="text-business-muted">Team Members</div>
              </CardContent>
            </Card>
            
            <Card className="text-center shadow-card border-0">
              <CardContent className="pt-6">
                <div className="text-3xl font-bold text-business-navy mb-2">100%</div>
                <div className="text-business-muted">Customer Focus</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;