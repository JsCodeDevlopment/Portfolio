import Home from "../../assets/static/home.json";
import About from "../../assets/static/about.json";
import Projects from "../../assets/static/project.json";
import Contact from "../../assets/static/contact.json";
import Experience from "../../assets/static/experiences.json";
import { IMenuOptions } from "../../interfaces/IMenuoptions";
import { useRef } from "react";
import { LottieRefCurrentProps } from "lottie-react";

export function useMenuOptions() {
  const homeRef = useRef<LottieRefCurrentProps>(null);
  const aboutRef = useRef<LottieRefCurrentProps>(null);
  const expRef = useRef<LottieRefCurrentProps>(null);
  const projectsRef = useRef<LottieRefCurrentProps>(null);
  const contactRef = useRef<LottieRefCurrentProps>(null);

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
      icon: Experience,
      title: "Experiências",
      href: "/experiences",
      iconRef: expRef,
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
