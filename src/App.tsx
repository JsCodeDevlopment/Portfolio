import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { HomeContent } from "./components/HomeContent";
import { AboutContent } from "./components/AboutContent";
import { ProjectsContent } from "./components/ProjectsContent";
import { ContactContent } from "./components/ContactContent";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="overflow-hidden texture">
        <div className="flex relative top-left-blur bottom-right-blur bg-background gap-14 w-full overflow-hidden h-screen pt-16 px-32">
          <Menu />
          <div className="flex z-10">
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/about" element={<AboutContent />} />
              <Route path="/projects" element={<ProjectsContent />} />
              <Route path="/contact" element={<ContactContent />} />
            </Routes>
          </div>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};
