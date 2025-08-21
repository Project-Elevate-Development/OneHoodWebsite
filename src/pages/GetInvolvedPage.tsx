import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";

const GetInvolvedPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get Involved</h1>
      <p className="text-muted-foreground mb-8">
        Volunteer, donate, or partner with us to amplify our impact in Newark.
      </p>
      <div className="flex gap-3">
        <Button variant="hero">Volunteer</Button>
        <Button variant="peace">Donate</Button>
        <Button variant="outline">Partner With Us</Button>
      </div>
    </main>
  </div>
);

export default GetInvolvedPage;
