import Photoshop from "../../assets/images/photoshop.svg";
import Figma from "../../assets/images/figma.svg";
import Git from "../../assets/images/git.svg";
import Github from "../../assets/images/github.svg";
import Vercel from "../../assets/images/vercel.svg";
import Stripe from "../../assets/images/stripe.svg";
import { IFrontStacks } from "../../interfaces/IFrontStacks";

export function useOtherStacks() {
  const frontStacks: IFrontStacks[] = [
    {
      title: "Photoshop",
      logo: Photoshop,
    },
    {
      title: "Figma",
      logo: Figma,
    },
    {
      title: "Git",
      logo: Git,
    },
    {
      title: "Github",
      logo: Github,
    },
    {
      title: "Vercel",
      logo: Vercel,
    },
    {
      title: "Stripe",
      logo: Stripe,
    },
  ];
  return { frontStacks };
}
