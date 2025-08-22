import Navigation from "@/components/Navigation";
import GetInvolvedBody from "@/components/GetInvolved"; // if you kept my earlier get-involved layout as a component

const GetInvolvedPage = () => (
  <div className="min-h-screen">
    <Navigation />
    <main>
      <GetInvolvedBody />
    </main>
  </div>
);

export default GetInvolvedPage;
