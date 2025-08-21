import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "@/pages/Home";
import AboutPage from "@/pages/AboutPage";
import ProgramsPage from "@/pages/ProgramsPage";
import StoriesPage from "@/pages/StoriesPage";
import GetInvolvedPage from "@/pages/GetInvolvedPage";
import MentorPage from "@/pages/MentorPage";

const Index = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/get-involved" element={<GetInvolvedPage />} />
        <Route path="/mentor" element={<MentorPage />} />
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Index;
