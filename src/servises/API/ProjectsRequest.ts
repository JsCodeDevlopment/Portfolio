import { IRepos } from "../../interfaces/IRepos";
import { baseURL } from "../baseURL";

export class Projects {
  static getAllRepo = async () => {
    try {
      const resp: IRepos[] = await fetch(`${baseURL}/repos`).then((resp) => resp.json());
      console.log(resp)
      return resp;
    } catch (err) {
      console.error(err, "Algo deu errado em sua busca mano.");
    }
  };
}
