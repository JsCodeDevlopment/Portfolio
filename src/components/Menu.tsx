import { Link } from "react-router-dom";
import Logo from "../assets/images/mini-logo.png";
import Home from "../assets/static/home.json";
import About from "../assets/static/about.json";
import Projects from "../assets/static/project.json";
import Contact from "../assets/static/contact.json";
import { IMenuOptions } from "../interfaces/IMenuoptions";
import { useRef } from "react";
import { IconAnimation } from "./IconAnimation";

export function Menu() {
  const homeRef = useRef<any>();
  const aboutRef = useRef<any>();
  const projectsRef = useRef<any>();
  const contactRef = useRef<any>();

  const menuOptions: IMenuOptions[] = [
    {
      icon: Home,
      title: "Ínicio",
      href: "/",
      iconRef: homeRef,
      speed: 1
    },
    {
      icon: About,
      title: "Sobre",
      href: "/about",
      iconRef: aboutRef,
      speed: 1
    },
    {
      icon: Projects,
      title: "Projetos",
      href: "/projects",
      iconRef: projectsRef,
      speed: 1
      
    },
    {
      icon: Contact,
      title: "Contato",
      href: "/contact",
      iconRef: contactRef,
      speed: 1
    },
  ];
  
  return (
    <div className=" flex rounded-xl w-60 h-80 p-[1px] z-10 bg-gradient-to-b from-first to-first/0 max-lg:w-1/2 max-lg:h-40 max-lg:absolute max-lg:bottom-1 max-sm:w-2/3 max-[424px]:w-[300px]">
      <div className="flex flex-col w-60 h-80 rounded-xl py-7 gap-3 px-3 bg-thirt max-lg:w-full max-lg:h-full max-lg:items-center max-lg:justify-center max-lg:p-2">
        <div className="flex w-full gap-4 pb-1 border-b-[0.1px] border-white items-center justify-center max-md:flex-col max-md:gap-1">
          <img className="w-12 h-12 rounded-md max-md:w-7 max-md:h-7" src={Logo} alt="" />
          <div className="flex flex-col justify-center max-md:items-center">
            <h1 className="text-2xl max-md:text-base">Jonatas Silva</h1>
            <p className="text-md max-md:text-xs">Fullstack Developer</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 max-lg:flex-row max-lg:w-full max-lg:h-full max-lg:items-center max-lg:justify-center max-lg:z-50">
          {menuOptions.map((option) => (
            <Link to={option.href} key={option.title} onMouseEnter={() => option.iconRef.current?.play()} onMouseLeave={() => option.iconRef.current?.stop()}>
              <div className="flex gap-2 items-center rounded-md hover:bg-gradient-to-r hover:from-black/30 hover:to-black/5 w-full p-1 h-10 max-lg:bg-black/30 max-lg:justify-center max-lg:flex-col max-lg:gap-0 max-lg:p-2 max-lg:w-[60px] max-lg:h-[50px]">
                <IconAnimation data={option.icon} iconRef={option.iconRef} speed={option.speed}/>
                <p className="text-lg max-lg:text-sm">{option.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
