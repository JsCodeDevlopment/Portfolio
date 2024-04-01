import Javascript from "../../assets/images/javascript.svg";
import Typescript from "../../assets/images/typescript.svg";
import Node from "../../assets/images/node.svg";
import Postegre from "../../assets/images/postgres.svg";
import SQL from "../../assets/images/sql.svg";
import Prisma from "../../assets/images/prisma.svg";
import EJS from "../../assets/images/ejs.svg";
import Express from "../../assets/images/express.svg";
import Fastify from "../../assets/images/fastify.svg";
import Docker from "../../assets/images/docker.svg";
import MongoDB from "../../assets/images/mongodb.svg";
import Mongoose from "../../assets/images/mongoose.svg";
import Axios from "../../assets/images/axios.svg";
import { IFrontStacks } from "../../interfaces/IFrontStacks";

export function useBackStacks() {
  const frontStacks: IFrontStacks[] = [
    {
      title: "Javascript",
      logo: Javascript,
    },
    {
      title: "Typescript",
      logo: Typescript,
    },
    {
      title: "NodeJs",
      logo: Node,
    },
    {
      title: "PostegreSQL",
      logo: Postegre,
    },
    {
      title: "SQL",
      logo: SQL,
    },
    {
      title: "Prisma",
      logo: Prisma,
    },
    {
      title: "EJS",
      logo: EJS,
    },
    {
      title: "Express",
      logo: Express,
    },
    {
      title: "Fastify",
      logo: Fastify,
    },
    {
      title: "MongoDB",
      logo: MongoDB,
    },
    {
      title: "Docker",
      logo: Docker,
    },
    {
      title: "Mongoose",
      logo: Mongoose,
    },
    {
      title: "Axios",
      logo: Axios,
    },
  ];
  return { frontStacks };
}
