import { AboutPageProps } from "../../interfaces/IAboutPageProp";

export function NavgationBtn({ selectedOption, onOptionClick }: AboutPageProps) {
  return (
    <div className="z-50 w-full">
      <div className="w-full">
        <div
          className="grid max-w-xs grid-cols-3 gap-1 p-1 mx-auto my-2 bg-white/5 rounded-lg shadow-lg"
          role="group" >
          <button
            type="button"
            name="front"
            onClick={() => onOptionClick('front')}
            className={`px-5 py-1.5 text-xs max-lg:text-[0.6rem] font-medium rounded-lg ${selectedOption === 'front' ? 'bg-white text-black' : 'hover:bg-background'}`} >
            Front-end
          </button>
          <button
            type="button"
            name="back"
            onClick={() => onOptionClick('back')}
            className={`px-5 py-1.5 text-xs max-lg:text-[0.6rem] font-medium rounded-lg ${selectedOption === 'back' ? 'bg-white text-black' : 'hover:bg-background'}`} >
            Back-end
          </button>
          <button
            type="button"
            name="other"
            onClick={() => onOptionClick('other')}
            className={`px-5 py-1.5 text-xs max-lg:text-[0.6rem] font-medium rounded-lg ${selectedOption === 'other' ? 'bg-white text-black' : 'hover:bg-background'}`} >
            Outros
          </button>
        </div>
      </div>
    </div>
  );
}