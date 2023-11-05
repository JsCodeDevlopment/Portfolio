import { IRepos } from "../../interfaces/IRepos";
import { baseURL } from "../baseURL";
import axios from "axios";

export class Projects {
  static repos = async (): Promise<IRepos[] | undefined> => {
    try {
      const resp = await axios.get(`${baseURL}/repos`)
      console.log(resp);
      return resp.data;
    } catch (err) {
      console.error(err, "Algo deu errado em sua busca mano.");
    }
  };
}
