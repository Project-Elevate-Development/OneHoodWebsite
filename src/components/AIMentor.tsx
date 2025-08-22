import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Clock, Shield } from "lucide-react";

const AIMentor = () => {
  const [selectedMentor, setSelectedMentor] = useState<string | null>(null);

  const mentors = [
    {
      id: "flip",
      name: "Flip",
      role: "Program Director",
      personality: "Straight-talking leader who keeps it 100. Been through it all and came out stronger.",
      avatar: "👤"
    },
    {
      id: "buddah", 
      name: "Buddah",
      role: "Community Liaison",
      personality: "Wise and peaceful guide who helps resolve conflicts and find inner strength.",
      avatar: "👤"
    },
    {
      id: "alif",
      name: "Alif",
      role: "Youth Coordinator", 
      personality: "Young but experienced, relates to current street situations and modern challenges.",
      avatar: "👤"
    },
    {
      id: "jimmy",
      name: "Jimmy Woo",
      role: "Youth Coordinator",
      personality: "Young but experienced coordinator who bridges the gap between staff and youth. Alif understands current street dynamics and helps young people navigate modern challenges.",
      avatar: "👤"
    },
    {
      id: "akadoo",
      name: "Akadoo",
      role: "Youth Coordinator",
      personality: "Young but experienced coordinator who bridges the gap between staff and youth. Alif understands current street dynamics and helps young people navigate modern challenges.",
      avatar: "👤"
    }
  ];

  const features = [
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: "24/7 Support",
      description: "Someone to talk to anytime, day or night"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Real Talk",
      description: "Authentic conversations in language you understand"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Always Available",
      description: "Even when you leave the program, we're still here"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safe Space",
      description: "Confidential support for whatever you're going through"
    }
  ];

  return (
    <section id="mentor" className="py-20 px-6 bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            AI Mentor Support
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Talk to our AI mentors 24/7. They speak your language, understand your struggles, 
            and provide real guidance for real situations. Choose who you want to talk to.
          </p>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="text-primary mb-3 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Mentor Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {mentors.map((mentor) => (
            <Card 
              key={mentor.id} 
              className={`cursor-pointer border-2 smooth ${
                selectedMentor === mentor.id 
                  ? 'border-primary bg-primary/10' 
                  : 'border-border hover:border-primary/50'
              }`}
              onClick={() => setSelectedMentor(mentor.id)}
            >
              <CardHeader className="text-center">
                <div className="text-4xl mb-2">{mentor.avatar}</div>
                <CardTitle className="text-xl text-foreground">{mentor.name}</CardTitle>
                <p className="text-primary font-medium">{mentor.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground text-center">
                  {mentor.personality}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Chat Interface Preview */}
        <Card className="max-w-2xl mx-auto bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-center text-primary">
              {selectedMentor 
                ? `Chat with ${mentors.find(m => m.id === selectedMentor)?.name}`
                : "Select a Mentor to Start Chatting"
              }
            </CardTitle>
          </CardHeader>
          <CardContent>
            {selectedMentor ? (
              <div className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground mb-2">
                    {mentors.find(m => m.id === selectedMentor)?.name}:
                  </p>
                  <p className="text-foreground">
                    Yo, what's good? I'm here to listen and help you figure things out. 
                    What's on your mind today?
                  </p>
                </div>
                <div className="flex gap-2">
                  <input 
                    type="text" 
                    placeholder="Type your message..." 
                    className="flex-1 p-3 bg-background border border-border rounded-md text-foreground"
                    disabled
                  />
                  <Button variant="peace">Send</Button>
                </div>
                <p className="text-xs text-muted-foreground text-center">
                  Connect to Supabase to enable full AI chat functionality
                </p>
              </div>
            ) : (
              <div className="text-center py-8">
                <MessageCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">
                  Choose a mentor above to start your conversation
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Button variant="hero" size="lg" disabled>
            Start Chatting (Connect Supabase)
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Full AI mentor functionality requires Supabase integration for secure, private conversations
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIMentor;