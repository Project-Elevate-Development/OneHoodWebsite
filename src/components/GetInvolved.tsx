import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  HandHeart,
  HeartHandshake,
  ClipboardCheck,
  Users,
  DollarSign,
  Mail,
  CalendarCheck,
  Target,
  LineChart,
  ShieldAlert,
  BookOpenCheck,
  LifeBuoy,
  Briefcase,
} from "lucide-react";

const tiers = [
  { name: "Community Ally", amount: "$25", blurb: "Covers a week of snacks for a study group." },
  { name: "Program Supporter", amount: "$100", blurb: "Funds supplies for 3 GED prep sessions." },
  { name: "Apprentice Sponsor", amount: "$250", blurb: "Helps place a youth into a paid trade trial." },
];

const steps = [
  {
    icon: <ClipboardCheck className="h-6 w-6" />,
    title: "Apply",
    text: "Submit a quick interest form so we can match you to the right opportunity.",
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Onboard",
    text: "Attend a short orientation about our mission, approach, and safety practices.",
  },
  {
    icon: <CalendarCheck className="h-6 w-6" />,
    title: "Get Scheduled",
    text: "Pick a time that fits your week—one‑time events or recurring sessions.",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Make Impact",
    text: "Show up for youth—tutoring, mock interviews, trade demos, and more.",
  },
];

const roles = [
  {
    icon: <ShieldAlert className="h-5 w-5 text-primary" />,
    title: "Violence Prevention Specialists",
    text: "Mediate conflicts before they escalate; de-escalation and street outreach.",
  },
  {
    icon: <Users className="h-5 w-5 text-secondary" />,
    title: "Community Engagement Coordinators",
    text: "Build trust through neighborhood events, healing spaces, and consistent presence.",
  },
  {
    icon: <BookOpenCheck className="h-5 w-5 text-accent" />,
    title: "Training & Education Leads",
    text: "Life skills, entrepreneurship, restorative practices for youth and community leaders.",
  },
  {
    icon: <LifeBuoy className="h-5 w-5 text-primary" />,
    title: "Counselors",
    text: "Trauma‑informed support and referrals; individual and group care.",
  },
  {
    icon: <Briefcase className="h-5 w-5 text-secondary" />,
    title: "Resource Coordinators",
    text: "Connect residents to jobs, housing, education, and essential services.",
  },
  {
    icon: <LineChart className="h-5 w-5 text-accent" />,
    title: "Program & Data Officers",
    text: "Track outcomes to show measurable progress and guide strategy.",
  },
];

const GetInvolved = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="pt-20 pb-24 px-6">
      <section className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Get Involved
          </h1>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Volunteer, donate, or partner—every role matters. Together we provide real options to Newark’s youth.
          </p>
        </div>

        {/* NEW: Leadership Model Narrative */}
        <div className="mb-14">
          <div className="bg-card/80 backdrop-blur-sm border border-border rounded-xl p-6 md:p-8">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 text-primary" />
              <h2 className="text-xl md:text-2xl font-bold text-foreground">
                A New Model of Leadership in Newark
              </h2>
            </div>

            <div className="space-y-5 text-foreground leading-relaxed">
              <p>
                In Newark, where communities have faced decades of systemic challenges, violence, and division, a new model of leadership is emerging. <strong>ONE HOOD</strong> is not just an organization—it is a movement of accountability, unity, and measurable impact. By bringing together influential community leaders from all corners of the city—East, West, North, and South—ONE HOOD demonstrates that real power comes from collaboration, strategy, and shared responsibility, not conflict.
              </p>
              <p>
                At the core of ONE HOOD is a strategically organized team with clear responsibilities: Violence Prevention Specialists mediate conflicts before they escalate; Community Engagement Coordinators foster trust through neighborhood events and healing initiatives; Training &amp; Education Leads equip youth and community leaders with life skills, entrepreneurship training, and restorative practices; Counselors provide trauma‑informed support; Resource Coordinators connect residents to employment, housing, and essential services; and Program &amp; Data Officers track measurable outcomes to demonstrate real progress.
              </p>
              <p>
                ONE HOOD is teaching Newark—and the nation—that leadership rooted in <em>respect, honor, love, and trust</em> is transformative. Communities can reduce violence, increase youth engagement, and restore credibility without opposition or retaliation. By investing in education, mentorship, job training, and life skills, ONE HOOD creates a replicable blueprint for social and economic empowerment.
              </p>
            </div>

            {/* Role Grid */}
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {roles.map((r) => (
                <div key={r.title} className="rounded-lg border border-border p-4 bg-background/60">
                  <div className="flex items-center gap-2 mb-2">
                    {r.icon}
                    <h3 className="font-semibold text-foreground">{r.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground">{r.text}</p>
                </div>
              ))}
            </div>

            {/* Outcome Callout */}
            <div className="mt-8 bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 p-5 md:p-6 rounded-lg border border-primary/20">
              <p className="text-foreground">
                This initiative is a call to political leaders, city officials, funders, and community organizers:
                Newark shows that when diverse groups unite under a shared mission, results are tangible and measurable.
                ONE HOOD is already reducing conflicts, increasing youth participation, and building trust across neighborhoods.
                With collaboration, accountability, and vision, we can scale this blueprint to cities nationwide.
              </p>
            </div>
          </div>
        </div>

        {/* Action Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mb-3">
                <HandHeart className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-xl">Volunteer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Tutor GED, lead study circles, or run hands‑on trade demos.
              </p>
              <Button variant="hero" className="w-full">Apply to Volunteer</Button>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-secondary/15 border border-secondary/30 flex items-center justify-center mb-3">
                <DollarSign className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-xl">Donate</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Fund counseling, test fees, and starter tools for apprenticeships.
              </p>
              <Button variant="peace" className="w-full">Give Now</Button>
            </CardContent>
          </Card>

          <Card className="bg-card/80 backdrop-blur-sm border-border">
            <CardHeader className="text-center">
              <div className="mx-auto w-12 h-12 rounded-full bg-accent/15 border border-accent/30 flex items-center justify-center mb-3">
                <HeartHandshake className="h-6 w-6 text-accent" />
              </div>
              <CardTitle className="text-xl">Partner</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground mb-4">
                Employers, schools, and orgs—let’s build pipelines to jobs and degrees.
              </p>
              <Button variant="outline" className="w-full">Start a Partnership</Button>
            </CardContent>
          </Card>
        </div>

        {/* Volunteer Steps */}
        <div className="bg-muted/40 border border-border rounded-xl p-6 md:p-8 mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            How Volunteering Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((s, i) => (
              <div key={i} className="text-center">
                <div className="flex items-center justify-center mb-3 text-primary">
                  {s.icon}
                </div>
                <p className="font-semibold text-foreground">{i + 1}. {s.title}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Donation Tiers */}
        <div className="mb-14">
          <h2 className="text-2xl font-bold text-foreground mb-6 text-center">
            Donation Tiers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tiers.map((t) => (
              <Card key={t.name} className="bg-card/80 backdrop-blur-sm border-border hover:border-primary/50 smooth">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{t.name}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">{t.amount}</div>
                  <p className="text-muted-foreground mb-4">{t.blurb}</p>
                  <Button variant="peace" className="w-full">Donate {t.amount}</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Newsletter / Contact */}
        <div className="bg-gradient-to-r from-primary/15 via-secondary/15 to-accent/15 p-6 md:p-8 rounded-xl border border-primary/20 mb-10">
          <div className="max-w-3xl mx-auto text-center">
            <Mail className="h-6 w-6 text-primary mx-auto mb-3" />
            <h3 className="text-xl font-bold mb-2">Stay in the Loop</h3>
            <p className="text-muted-foreground mb-4">
              Get updates on volunteer events, new programs, and impact stories.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex flex-col sm:flex-row gap-3 justify-center"
            >
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-80 p-3 bg-background border border-border rounded-md text-foreground"
              />
              <Button variant="hero">Subscribe</Button>
            </form>
            <p className="text-xs text-muted-foreground mt-3">
              We’ll never share your information.
            </p>
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-3">Ready to take the next step?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            By supporting ONE HOOD, you champion a proven, community‑led model for safer streets, stronger opportunities, and thriving neighborhoods.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero">Volunteer Today</Button>
            <Button variant="peace">Donate Now</Button>
            <Button variant="outline">Talk to Our Team</Button>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default GetInvolved;
