import { ScheduleIcon } from "../../assets/images/scheduleIcon";
import { useExperiences } from "../data/MockProfExp";

export function ProContent() {
  const { profExp } = useExperiences();
  return (
    <>
      {profExp.map((exp) => (
        <ol className="relative border-s border-gray-700" key={exp.id}>
          <li className="mb-10 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 rounded-full -start-3 ring-2 ring-first bg-black/30">
              <ScheduleIcon />
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-white">
              {exp.company}
              {exp.end === "o momento" && (
                <span className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-first text-white ms-3">
                  Atual
                </span>
              )}
            </h3>
            <span className="mb-4 text-base font-normal text-first">{exp.title}</span>
            <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
              {`${exp.start} - ${exp.end}`}
            </time>
            <p className="mb-4 text-base font-normal text-white">
              {exp.description}
            </p>
          </li>
        </ol>
      ))}
    </>
  );
}
