import { useState } from "react";
import Me from "../assets/images/aboutImg.png";
import Download from "../assets/images/download.png";
import { FrontStacks } from "./skillsComponents/Front";

import { Button } from "./ui/Button";
import { NavgationBtn } from "./ui/NavgationBtn";
import { BackStacks } from "./skillsComponents/Back";
import { OthersStacks } from "./skillsComponents/Others";

export function AboutContent() {
  const [selectedOption, setSelectedOption] = useState('front');

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-wrap gap-5 max-lg:justify-center max-xl:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-first">Sobre Mim</h1>
          <div className="flex flex-col gap-2 max-w-md">
            <p className="text-xl">
              Meu nome é Jonatas Silva, sou um desenvolvedor fullstack
              apaixonado por tecnologia.{" "}
            </p>
            <p className="text-xl">
              Atualmente, estou explorando as maravilhas do TypeScript e React
              no front-end, enquanto começo minha jornada no mundo do back-end
              com Node.js.{" "}
            </p>
            <p className="text-xl">
              No futuro, pretendo expandir meus horizontes e mergulhar no estudo
              do desenvolvimento mobile.{" "}
            </p>
            <p className="text-xl">
              Além da programação, meu hobby favorito é ouvir música e tocar
              bateria, porque a música é a minha terapia.
            </p>
          </div>
        </div>
        <div className="flex w-72">
          <img className="w-full object-cover rounded-lg" src={Me} alt="" />
        </div>
      </div>
      <div className="flex max-lg:justify-center max-xl:justify-center">
        <Button title="Download C.V" logo={Download} size="large" endereco="" />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="text-3xl">Habilidades</h1>
        <div className="flex flex-col gap-2 h-48 max-lg:h-64 max-lg:mb-3 max-md:h-[500px]">
          <NavgationBtn selectedOption={selectedOption} onOptionClick={handleOptionClick} />
          {selectedOption === 'front' ? <FrontStacks/> : selectedOption === 'back' ? <BackStacks/> : <OthersStacks/>}
        </div>
      </div>
    </div>
  );
}