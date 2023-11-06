import { useProjectsRequest } from "../servises/API/ProjectsRequest";
import { ProjectCard } from "./ui/ProjectCard";

export function ProjectsContent() {
  const { repos } = useProjectsRequest();

  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap gap-5 max-lg:justify-center max-xl:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-first font-title">Meus Projetos</h1>
          <div className="flex flex-col gap-2">
            <p className="text-xl font-poppins">
              {`Minha jornada de aprendizado abrange uma variedade de projetos web. Nesta página, você encontrará ${
                repos
                  ? repos.filter((repo) => repo.topics.includes("pinned"))
                      .length
                  : "alguns"
              } projetos favoritos que 
            representam meu progresso e dedicação à arte da programação web.`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center gap-5">
        <div className="grid grid-cols-2 gap-5 max-lg:grid-cols-1">
          {repos ? (
            repos
              .filter((repo) => repo.topics.includes("pinned"))
              .sort((a, b) => +new Date(b.created_at) - +new Date(a.created_at))
              .map((repo) => <ProjectCard key={repo.id} repo={repo} />)
          ) : (
            <p className="text-base">
              Desculpe-me, mas por algum motivo os projetos não puderam ser
              carregados! 🤦‍♂️😢
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
