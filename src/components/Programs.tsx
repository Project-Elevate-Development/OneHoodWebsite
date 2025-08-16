import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Wrench, Heart, Users, Building, Lightbulb } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: <GraduationCap className="h-8 w-8" />,
      title: "Education Support",
      description: "GED preparation, school re-entry programs, and academic tutoring",
      features: ["One-on-one tutoring", "GED test preparation", "High school re-enrollment support", "College readiness"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Trade Apprenticeships", 
      description: "Hands-on training in construction, automotive, electrical, and more",
      features: ["Construction skills", "Automotive repair", "Electrical work", "HVAC training"]
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Mental Health & Wellness",
      description: "Counseling, therapy, and peer support groups",
      features: ["Individual counseling", "Group therapy", "Peer mentoring", "Crisis intervention"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Community Building",
      description: "Cultural awareness and community pride programs",
      features: ["Cultural events", "Community service", "Leadership development", "Conflict resolution"]
    },
    {
      icon: <Building className="h-8 w-8" />,
      title: "Job Placement",
      description: "Employment assistance and career development",
      features: ["Resume building", "Interview prep", "Job placement", "Career counseling"]
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Entrepreneurship",
      description: "Business development and startup support",
      features: ["Business planning", "Financial literacy", "Startup funding", "Mentorship programs"]
    }
  ];

  return (
    <section id="programs" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Comprehensive support designed to meet youth where they are and guide them 
            toward a brighter future through education, skills, and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 smooth">
              <CardHeader>
                <div className="text-primary mb-4">
                  {program.icon}
                </div>
                <CardTitle className="text-xl text-foreground">{program.title}</CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-secondary rounded-full mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button variant="outline" className="w-full mt-6">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;