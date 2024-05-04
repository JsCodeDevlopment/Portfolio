import { useState } from "react";
import { NavgationExpBtn } from "./ui/NavgationExpBtn";
import { ProContent } from "./ExperiencesContents/ProContent";
import { AcadContent } from "./ExperiencesContents/AcadContent";

export function ExperiencesContent() {
  const [selectedOption, setSelectedOption] = useState("prof");

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
  };
  return (
    <div className="flex h-full flex-col gap-7">
      <div className="flex flex-wrap gap-5 max-lg:justify-center max-xl:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-first font-title">
            Minhas Experiências
          </h1>
          <div className="flex flex-col gap-2">
            <p className="text-lg">
              Algumas de minhas experiências profissionais e acadêmicas.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 max-lg:mb-1 ">
        <NavgationExpBtn
          selectedOption={selectedOption}
          onOptionClick={handleOptionClick}
        />
        {selectedOption === 'prof' ? <ProContent/> : <AcadContent/>}
      </div>
    </div>
  );
}
