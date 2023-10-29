import Lottie from "lottie-react";
import Heart from "../assets/static/heart.json";
import { useRef } from "react";

export function Footer() {
  const heartRef = useRef<any>();
  const currentYear = new Date().getFullYear();
  const heartIcon = () => (
    <Lottie
      lottieRef={heartRef}
      animationData={Heart}
      style={{ width: 15, height: 15 }}
      autoplay={true}
      loop={true}
    />
  );
  return (
    <div className="flex bg-black h-9 items-center gap-1 justify-center">
      <h1 className="text-sm">Feito com</h1>
      <h1 className="text-sm">{heartIcon()}</h1>
      <h1 className="text-sm">por Jonatas Silva - © Todos os direitos reservados. 2023-{currentYear}</h1>
    </div>
  );
}