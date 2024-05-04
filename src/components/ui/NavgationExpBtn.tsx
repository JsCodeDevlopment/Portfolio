import { ExpPageProps } from "../../interfaces/IExpPageProp";

export function NavgationExpBtn({
  selectedOption,
  onOptionClick,
}: ExpPageProps) {
  return (
    <div className="z-50 w-full">
      <div className="w-full">
        <div
          className="grid max-w-xs grid-cols-2 gap-1 p-1 mx-auto my-2 bg-white/5 rounded-lg shadow-lg"
          role="group"
        >
          <button
            type="button"
            name="prof"
            onClick={() => onOptionClick("prof")}
            className={`flex justify-center px-5 py-1.5 text-xs max-lg:text-[0.6rem] font-medium rounded-lg ${
              selectedOption === "prof"
                ? "bg-white text-black"
                : "hover:bg-background"
            }`}
          >
            Profissionais
          </button>
          <button
            type="button"
            name="acad"
            onClick={() => onOptionClick("acad")}
            className={`flex justify-center px-5 py-1.5 text-xs max-lg:text-[0.6rem] font-medium rounded-lg ${
              selectedOption === "acad"
                ? "bg-white text-black"
                : "hover:bg-background"
            }`}
          >
            Acadêmicas
          </button>
        </div>
      </div>
    </div>
  );
}
