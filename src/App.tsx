import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { AboutContent } from "./components/AboutContent";
import { ProjectsContent } from "./components/ProjectsContent";
import { ContactContent } from "./components/ContactContent";
import { HomeContent } from "./components/HomeContent";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="flex flex-col relative bg-background top-left-blur bottom-right-blur overflow-hidden w-full h-full">
          <Header />
        <div className="flex p-10 justify-around">
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
      </div>
    </BrowserRouter>
  );
};
