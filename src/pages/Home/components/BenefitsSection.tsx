import { Clock, Users, TrendingUp, Star } from "lucide-react";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: Clock,
      title: "Save Time",
      description: "Save time by automating the composites Pattern Design and Pattern Grading process."
    },
    {
      icon: Users,
      title: "Eliminate Resources",
      description: "Take the monotony out of composites Pattern Design and Grading, leverage custom made tools and libraries and automate the workflow eliminating human errors"
    },
    {
      icon: TrendingUp,
      title: "Collaborate Easily",
      description: "Share the digital patterns of composites with team members, customers, suppliers and partners, as required, easily and fast to arrive at decisions faster."
    },
    {
      icon: Star,
      title: "Easier Project Management",
      description: "Manage various projects easily by having all details of digital patterns of different orders for composites easily available for ready reference at any time."
    },
        {
      icon: Clock,
      title: "Accelerate Business Velocity",
      description: "Rev up your business engine and accelerate your business in the digital economy by combining easy collaboration, effective project management and by eliminating errors."
    },
    {
      icon: Users,
      title: "Build a Strategic Competitive Advantage",
      description: "Returns On Investment is a function of Business Velocity and Margins. REACH Composites PDS enables higher Margins while accelerating your Business Velocity and can help you build a long term, sustainable competitive advantage."
    }
  ];

  return (
    <section className="py-16 bg-white text-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-655d9b">
          Benefits of REACH Composites PDS
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          REACH Composites PDS
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-655d9b mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;