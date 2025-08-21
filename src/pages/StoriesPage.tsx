import Navigation from "@/components/Navigation";

const StoriesPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <main className="py-20 px-6 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6">Stories</h1>
      <p className="text-muted-foreground">
        Real journeys and transformations from the One Hood community. (Content coming soon.)
      </p>
    </main>
  </div>
);

export default StoriesPage;
