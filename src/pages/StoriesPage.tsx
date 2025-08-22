import Navigation from "@/components/Navigation";
import StoriesPageBody from "@/components/Stories"; // if you kept my earlier stories layout as a component
// If not using a separate component, you can keep your current simple content here instead.

const StoriesPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <main>
      <StoriesPageBody />
    </main>
  </div>
);

export default StoriesPage;
