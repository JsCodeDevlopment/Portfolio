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
      iconRef: homeRef
    },
    {
      icon: About,
      title: "Sobre",
      href: "/about",
      iconRef: aboutRef
    },
    {
      icon: Projects,
      title: "Projetos",
      href: "/projects",
      iconRef: projectsRef
      
    },
    {
      icon: Contact,
      title: "Contato",
      href: "/contact",
      iconRef: contactRef
    },
  ];
  
  return (
    <div className=" flex rounded-xl w-60 h-80 p-[1px] z-10 bg-gradient-to-b from-first to-first/0">
      <div className="flex flex-col w-60 h-80 rounded-xl py-7 gap-3 px-3 bg-thirt">
        <div className="flex w-full gap-4 pb-1 border-b-[0.1px] border-white items-center justify-center">
          <img className="w-12 h-12 rounded-md" src={Logo} alt="" />
          <div className="flex flex-col justify-center">
            <h1 className="text-2xl">Jonatas Silva</h1>
            <p className="text-md">Fullstack Developer</p>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          {menuOptions.map((option) => (
            <Link to={option.href} key={option.title} onMouseEnter={() => option.iconRef.current?.play()} onMouseLeave={() => option.iconRef.current?.stop()}>
              <div className="flex gap-2 items-center rounded-md hover:bg-gradient-to-r hover:from-black/30 hover:to-black/5 w-full p-1 h-10">
                <IconAnimation data={option.icon} iconRef={option.iconRef}/>
                <p className="text-lg">{option.title}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
