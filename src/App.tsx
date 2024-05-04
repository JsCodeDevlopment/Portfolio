import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";
import { AboutContent } from "./components/AboutContent";
import { ProjectsContent } from "./components/ProjectsContent";
import { ContactContent } from "./components/ContactContent";
import { HomeContent } from "./components/HomeContent";
import { ExperiencesContent } from "./components/ExperiencesContent";
import { Header } from "./components/Header";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {

  return (
    <BrowserRouter>
      <div className="flex flex-col relative bg-background top-left-blur bottom-right-blur overflow-hidden w-full h-full min-h-screen flex-1 justify-between">
          <Header />
          <ToastContainer 
          position="bottom-right" 
          draggable theme="dark" 
          hideProgressBar={false} 
          closeOnClick={true} 
          pauseOnHover={true}/>
        <div className="flex p-10 h-full justify-around max-lg:pt-20 max-md:pt-14 max-sm:px-5">
          <Menu />
          <div className="flex z-10 flex-col w-2/3 max-md:justify-center max-md:items-center max-md:w-full">
            <Routes>
              <Route path="/" element={<HomeContent />} />
              <Route path="/about" element={<AboutContent />} />
              <Route path="/experiences" element={<ExperiencesContent />} />
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