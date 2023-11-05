import { ProjectCard } from "./ui/ProjectCard";
import { Projects } from "../servises/API/ProjectsRequest";
import { useEffect, useState } from "react";
import { IRepos } from "../interfaces/IRepos";

export async function ProjectsContent() {
  const [repos, setRepos] = useState<IRepos[] | undefined>([]);

  useEffect(() => {
    Projects.repos()
      .then((data) => {
        setRepos(data);
      })
      .catch((err) => {
        console.error(err, "deu erro parça");
      });
  }, []);

  console.log(repos)

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap gap-5 max-lg:justify-center max-xl:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-first">Meus Projetos</h1>
          <div className="flex flex-col gap-2">
            <p className="text-xl">
              {`Minha jornada de aprendizado abrange uma variedade de projetos web. Nesta página, você encontrará ${
                repos ? repos.length : "alguns"
              } projetos que 
            representam meu progresso e dedicação à arte da programação web.`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
          projetos aqui
        </div>
      </div>
    </div>
  );
}

// {repos ? (
//   repos.map((repo)=>(
//     <ProjectCard key={repo.id} />
//   ))
// ) : (
//   <span> Infelizmente não foi possivel achar nenhum projeto 🤦‍♂️</span>
// )}
