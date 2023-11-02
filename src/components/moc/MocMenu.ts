import Home from "../../assets/static/home.json";
import About from "../../assets/static/about.json";
import Projects from "../../assets/static/project.json";
import Contact from "../../assets/static/contact.json";
import { IMenuOptions } from "../../interfaces/IMenuoptions";
import { useRef } from "react";

export function useMenuOptions() {
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
      speed: 1,
    },
    {
      icon: About,
      title: "Sobre",
      href: "/about",
      iconRef: aboutRef,
      speed: 1,
    },
    {
      icon: Projects,
      title: "Projetos",
      href: "/projects",
      iconRef: projectsRef,
      speed: 1,
    },
    {
      icon: Contact,
      title: "Contato",
      href: "/contact",
      iconRef: contactRef,
      speed: 1,
    },
  ];
  return { menuOptions };
}
