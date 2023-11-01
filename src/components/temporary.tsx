import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { AboutContent } from "./components/AboutContent";
import { ProjectsContent } from "./components/ProjectsContent";
import { ContactContent } from "./components/ContactContent";
import { HomeContent } from "./components/HomeContent";

export const App = () => {
  return (
    <BrowserRouter>
        <div className="flex relative top-left-blur bottom-right-blur bg-background gap-14 w-full overflow-hidden pt-16 px-32 max-lg:p-2 max-lg:pt-10 max-lg:flex-wrap-reverse max-lg:items-center max-lg:justify-center max-md:flex-wrap-reverse max-md:items-center max-md:justify-center max-md:px-1 max-md:pb-5">
          <Menu />
          <div className="flex z-10 flex-col w-2/3 max-md:w-11/12 max-md:justify-center max-md:items-center">
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/about" element={<AboutContent />} />
              <Route path="/projects" element={<ProjectsContent />} />
              <Route path="/contact" element={<ContactContent />} />
            </Routes>
          </div>
        </div>
        <Footer />
    </BrowserRouter>
  );
};
