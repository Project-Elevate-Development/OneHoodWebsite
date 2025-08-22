import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BadgeCheck, CalendarDays, MapPin, Quote, Target } from "lucide-react";

type Story = {
  title: string;
  person: string;
  location: string;
  date: string;
  tags: string[];
  excerpt: string;
  image?: string;
};

const stories: Story[] = [
  {
    title: "From Suspension to Graduation",
    person: "Jayden, 17",
    location: "West Ward, Newark",
    date: "June 2025",
    tags: ["Education", "Mentorship"],
    excerpt:
      "After multiple suspensions, Jayden joined our GED prep and met weekly with a mentor. Six months later, cap and gown.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "First Paycheck Friday",
    person: "Keisha, 20",
    location: "South Ward, Newark",
    date: "May 2025",
    tags: ["Trades", "Placement"],
    excerpt:
      "Keisha completed 8 weeks of electrical basics and started a paid apprenticeship. That first paycheck hit different.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Finding Peace, Finding Voice",
    person: "Marcus, 18",
    location: "Central Ward, Newark",
    date: "April 2025",
    tags: ["Wellness", "Counseling"],
    excerpt:
      "Through one‑on‑one counseling and peer circles, Marcus learned tools for anger and anxiety—then helped lead a group.",
    image:
      "https://images.unsplash.com/photo-1520975661595-6453be3f7070?q=80&w=1200&auto=format&fit=crop",
  },
];

const Stories = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="pt-20 pb-24 px-6">
      <section className="max-w-7xl mx-auto">
        {/* Header / Lead */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Stories from One Hood
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Real journeys. Real change. Our young people and families share how
            education, trade skills, and wellness support transformed their path.
          </p>
        </div>

        {/* Stories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {stories.map((s, i) => (
            <Card
              key={i}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 transition-colors overflow-hidden"
            >
              {s.image && (
                <div
                  className="h-40 bg-cover bg-center"
                  style={{ backgroundImage: `url(${s.image})` }}
                />
              )}
              <CardHeader>
                <CardTitle className="text-xl text-foreground">
                  {s.title}
                </CardTitle>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <BadgeCheck className="h-4 w-4 text-primary" />
                    {s.person}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4 text-secondary" />
                    {s.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <CalendarDays className="h-4 w-4 text-accent" />
                    {s.date}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{s.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2 py-1 rounded-md border border-border bg-background/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Button variant="outline" className="w-full">
                  Read Story
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* FEATURED: Leadership Narrative (replaces image banner) */}
        <div className="rounded-xl border border-border bg-card/80 backdrop-blur-sm mb-16 overflow-hidden">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 p-6 md:p-8 border-b border-border">
            <div className="inline-flex items-center gap-2 text-primary">
              <Target className="h-5 w-5" />
              <span className="text-sm font-semibold">Featured</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mt-2">
              ONE HOOD: Leadership Without Opposition
            </h2>
          </div>

          <div className="p-6 md:p-8 space-y-5 leading-relaxed text-foreground">
            <p>
              In the heart of Newark, where streets have long been divided by rivalry and misunderstanding, a new vision is rising. It’s called <strong>ONE HOOD</strong>, a movement born from the belief that true power doesn’t come from fear or violence—it comes from unity, respect, and shared responsibility.
            </p>
            <p>
              ONE HOOD is led by some of the city’s most influential sets and community leaders who have decided to set aside old rivalries and show the world what leadership without opposition looks like. This is about transforming neighborhoods from the inside out—where East, West, North, and South come together under one mission: to reduce violence, restore peace, and empower our people through education, mentorship, and opportunity.
            </p>
            <p>
              This isn’t just talk. The core team is on the front lines: <em>Violence Prevention Specialists</em> mediate conflicts before they erupt; <em>Community Engagement Coordinators</em> organize peace walks and healing circles; <em>Training &amp; Education Leads</em> teach de‑escalation, restorative justice, and trauma‑informed care; <em>Counselors</em> provide support for those navigating pain and loss; <em>Resource Coordinators</em> connect people to jobs, housing, and services; and <em>Program Officers</em> track results, ensuring every effort leads to real change.
            </p>
            <p>
              ONE HOOD teaches that leadership is rooted in respect, honor, love, and trust. It’s about showing the young, the men, the women, and the families of Newark that you can be powerful without hurting someone who looks like you. It’s about teaching skills that matter—from entrepreneurship, trades, and job readiness to life lessons, education, and personal growth. Every handshake, every workshop, every conversation is a building block for a stronger community.
            </p>
            <p>
              This organization is a call to all community leaders, organizers, mentors, and influencers: join us. Bring your experience, your wisdom, your energy. Together, we can create a city where youth see opportunity instead of bullets, where neighborhoods are safe, and where leaders demonstrate the kind of power that inspires not fear, but respect and hope.
            </p>
            <p>
              ONE HOOD is not just a Newark story—it’s a blueprint for cities across the country. When we stand together, when we lead with integrity, we prove that unity can rival any opposition. It’s time for leaders to rise, to teach, to protect, and to build. The streets will know peace, our young people will know guidance, and our communities will know that leadership rooted in love and accountability can change lives—one hood at a time.
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <Button variant="hero">Join the Movement</Button>
              <Button variant="outline">Explore Programs</Button>
            </div>
          </div>
        </div>

        {/* Pull Quote */}
        <div className="bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 p-6 md:p-8 rounded-xl border border-primary/20 mb-16">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="h-8 w-8 mx-auto mb-4 text-primary" />
            <p className="text-lg md:text-xl text-foreground">
              “They didn’t just give me advice. They gave me a plan and walked it with me.”
            </p>
            <p className="text-sm text-muted-foreground mt-3">
              — One Hood participant
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Have a story to share?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If One Hood has impacted your life, we’d love to hear it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="peace">Submit Your Story</Button>
            <Button variant="outline">Partner With Us</Button>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default Stories;
