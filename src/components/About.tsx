import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const About = () => {
  const leadership = [
    {
      name: "Flip",
      role: "Program Director",
      bio: "Street-smart leader with deep community roots. Flip has been transforming lives in Newark for over a decade, using real talk and authentic relationships to guide youth toward success."
    },
    {
      name: "Booda", 
      role: "Community Liaison",
      bio: "Wise counselor and conflict mediator. Buddah specializes in helping young people find peace within themselves and their communities, drawing from years of street experience."
    },
    {
      name: "Alif",
      role: "Youth Coordinator",
      bio: "Young but experienced coordinator who bridges the gap between staff and youth. Alif understands current street dynamics and helps young people navigate modern challenges."
    },
    {
      name: "Jimmy Woo",
      role: "Youth Coordinator",
      bio: "Young but experienced coordinator who bridges the gap between staff and youth. Alif understands current street dynamics and helps young people navigate modern challenges."
    },
    {
      name: "Akadoo",
      role: "Youth Coordinator",
      bio: "Young but experienced coordinator who bridges the gap between staff and youth. Alif understands current street dynamics and helps young people navigate modern challenges."
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            About One Hood
          </h2>
          <div className="max-w-4xl mx-auto bg-card/80 backdrop-blur-sm p-8 rounded-lg border border-border">
            <p className="text-lg text-foreground leading-relaxed mb-6">
              One Hood is more than a program – we're a movement. Born in the streets of Newark, 
              we understand the challenges our youth face because we've lived them. We leverage 
              community respect and street credibility to guide young people ages 14-25 back on track.
            </p>
            <p className="text-lg text-foreground leading-relaxed mb-6">
              Our approach is different. We don't judge. We don't talk down. We meet our youth where 
              they are and show them a path forward through education, trade skills, mental health 
              support, and cultural pride. We build on the strength that already exists in our community.
            </p>
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg border border-primary/20">
              <h3 className="text-xl font-bold text-primary mb-3">Our Mission</h3>
              <p className="text-foreground font-medium">
                To transform lives by providing at-risk youth with the education, skills, mental health support, 
                and cultural awareness they need to break cycles of violence and poverty. We believe in the power 
                of authentic relationships, community respect, and unwavering support to create lasting change.
              </p>
            </div>
          </div>
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-secondary mb-12">
            Our Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <Card key={index} className="bg-card/80 backdrop-blur-sm border-border">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-background">
                      {leader.name.charAt(0)}
                    </span>
                  </div>
                  <CardTitle className="text-xl text-foreground">{leader.name}</CardTitle>
                  <p className="text-primary font-medium">{leader.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{leader.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Impact Stats */}
        <div className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 p-8 rounded-lg border border-primary/30 mb-16">
          <h3 className="text-2xl font-bold text-center text-foreground mb-8">Our Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <p className="text-muted-foreground">Youth Served</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-secondary mb-2">85%</div>
              <p className="text-muted-foreground">Program Completion</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-2">150+</div>
              <p className="text-muted-foreground">GEDs Earned</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">75%</div>
              <p className="text-muted-foreground">Job Placement</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Ready to Join Our Mission?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Whether you're a young person looking for support, a community member wanting to help, 
            or an organization seeking partnership, we're here for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              Get Support
            </Button>
            <Button variant="peace" size="lg">
              Partner With Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;