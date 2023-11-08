import github from "../../assets/images/github-icon.svg";
import link from "../../assets/images/visitar.svg";
import { Button } from "./Button";
import { IRepos } from "../../interfaces/IRepos";
import { utcToZonedTime } from "date-fns-tz";
import { differenceInDays, parseISO } from "date-fns";
import { useEffect } from "react";
import { MockTopcs } from "../data/MockTopcs";

export function ProjectCard({ repo: { name, html_url, description, homepage, created_at, topics } }: { repo: IRepos }) {
  const { stackIcons } = MockTopcs();

  const setShowTag = () => {
    const timeZone = "America/Sao_Paulo";
    const parsedDate = utcToZonedTime(parseISO(created_at.toString()),timeZone);
    const currentDate = new Date();
    const daysDifference = differenceInDays(parsedDate, currentDate);

    let displayStyle;

    if (daysDifference > -30) {
      displayStyle = "inline-flex";
    } else {
      displayStyle = "hidden";
    }
    return displayStyle;
  };
  
  useEffect(() => {
    setShowTag();
  }, []);

  return (
    <div className="card w-full bg-white/5 shadow-xl hover:bg-gradient-to-b hover:from-background/80 hover:to-background/5">
      {homepage && (
        <figure>
          <img className="transition-all hover:scale-110" src={`${homepage}/preview.webp`} alt="" />
        </figure>
      )}
      <div className="card-body gap-5">
        <h2 className="card-title font-title font-normal">
          {name.replace(/-/g, " ")}
          <div className={`${setShowTag()} badge badge-sm badge-error text-white`}>
            NEW
          </div>
        </h2>
        <p className="font-extralight text-sm max-md:text-xs break-words">
          {description}
        </p>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-start gap-3">
          {topics.map(topic => (
          stackIcons[topic] ? (
            <div key={topic} className="tooltip" data-tip={topic.replace(/-/g, ' ').replace(/\b\w/g, match => match.toUpperCase())}>
              <img src={stackIcons[topic]} width={20} height={20} alt={topic} />
            </div>
          ) : null
        ))}
          </div>
          <div className="flex justify-end">
            <div className="tooltip" data-tip="Visitar">
              <Button
                title=""
                logo={link}
                endereco={homepage}
                size="noTitleSmall"
                logoSize="medium"
                bg="primary" />
            </div>
            <div className="tooltip" data-tip="Repositório">
              <Button
                title=""
                logo={github}
                endereco={html_url}
                size="noTitleSmall"
                logoSize="medium"
                bg="primary" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
