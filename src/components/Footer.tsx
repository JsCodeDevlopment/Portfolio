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
    <footer className="shadow bg-black z-10">
      <div className="w-full mx-auto gap-1 max-w-screen-xl p-4 md:flex md:items-center md:justify-center">
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-sm max-sm:text-xs">Feito com</h1>
          <h1 className="text-sm max-sm:text-xs">{heartIcon()}</h1>
          <h1 className="text-sm max-sm:text-xs">por Jonatas Silva</h1>
        </div>
        <div className="flex items-center justify-center gap-1">
          <h1 className="text-sm max-sm:text-xs">
            © Todos os direitos reservados. 2023-
            {currentYear}
          </h1>
        </div>
      </div>
    </footer>
  );
}
