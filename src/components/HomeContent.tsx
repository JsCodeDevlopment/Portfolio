import { Button } from "./ui/Button";
import Github from "../assets/images/guithub.png";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";
import Me from "../assets/images/homeImg.png";
import Arrow from "../assets/static/downArrow.json";
import { IconAnimation } from "./IconAnimation";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { LottieRefCurrentProps } from "lottie-react";

export function HomeContent() {
  const arrowRef = useRef<LottieRefCurrentProps>(null);

  return (
    <div className="flex flex-col gap-5 max-md:w-full max-md:items-center">
      <div className="flex flex-col items-center justify-center">
        
        <div className="flex w-full justify-around max-xl:flex-col">
          <div className="flex gap-2 flex-col pb-4 max-sm:pt-4">
            <div className="flex flex-col max-sm:items-center">
              <h1 className="text-3xl text-first font-title max-sm:text-5xl">Jonatas Silva</h1>
              <p className="text-sm font-extralight">Ceará - Brasil</p>
            </div>
            <div className="flex w-96 max-lg:w-full max-sm:items-center max-sm:text-center">
              <p className="text-xl">
                {`Aprender, desenvolver e transmitir. Essa é a essência da minha jornada como desenvolvedor Fullstack.`}
              </p>
            </div>
            <div className="flex max-lg:items-center max-lg:justify-center">
              <Button
                title="Linkedin"
                logo={Linkedin}
                bg="primary"
                size="medium"
                endereco="https://www.linkedin.com/in/jscodedevelopment/"
                focus="activeFocus"
              />
              <Button
                title="Github"
                logo={Github}
                bg="primary"
                size="medium"
                endereco="https://github.com/JsCodeDevlopment"
                focus="activeFocus"
              />
              <Button
                title="Instagram"
                logo={Instagram}
                bg="primary"
                size="medium"
                endereco="https://www.instagram.com/jonatasilva14/"
                focus="activeFocus"
              />
            </div>
          </div>
          <div className="flex col-span-2 z-10 max-lg:z-0 max-lg:m-0">
            <img src={Me} alt="" />
          </div>
        </div>

        <div className="flex flex-col items-center justify-center p-5">
          <p className="text-xl">
            Te convido a <span className="text-first">conhecer</span> mais sobre
            mim e meu trabalho.
          </p>
          <Link to="/projects">
            <IconAnimation
              data={Arrow}
              iconRef={arrowRef}
              autoplay={true}
              loop={true}
              width={25}
              height={25}
              speed={0.4}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
