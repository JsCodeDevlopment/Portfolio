import React from "../../assets/images/react.svg";
import Html from "../../assets/images/html.svg";
import Css from "../../assets/images/css.svg";
import Javascript from "../../assets/images/javascript.svg";
import Typescript from "../../assets/images/typescript.svg";
import Lottie from "../../assets/images/lottie.png";
import Tailwind from "../../assets/images/tailwind.svg";
import Styled from "../../assets/images/styledcomponents.svg";
import Vite from "../../assets/images/vite.svg";
import Next from "../../assets/images/next.svg";
import ShadcnUi from "../../assets/images/shadcn.svg";
import { IFrontStacks } from "../../interfaces/IFrontStacks";

export function useFrontStacks() {
  const frontStacks: IFrontStacks[] = [
    {
      title: "HTML5",
      logo: Html,
    },
    {
      title: "CSS3",
      logo: Css,
    },
    {
      title: "Javascript",
      logo: Javascript,
    },
    {
      title: "Typescript",
      logo: Typescript,
    },
    {
      title: "React",
      logo: React,
    },
    {
      title: "Lottie",
      logo: Lottie,
    },
    {
      title: "Tailwind",
      logo: Tailwind,
    },
    {
      title: "Styled Components",
      logo: Styled,
    },
    {
      title: "Vite",
      logo: Vite,
    },
    {
      title: "Shadcn-ui",
      logo: ShadcnUi,
    },
    {
      title: "NextJs",
      logo: Next,
    },
  ];
  return { frontStacks };
}
