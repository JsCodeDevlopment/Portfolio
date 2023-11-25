import javascript from "../../assets/images/javascript.svg";
import typescript from "../../assets/images/typescript.svg";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import react from "../../assets/images/react.svg";
import lottie from "../../assets/images/lottie.png";
import daisy from "../../assets/images/daisyUi.png";
import fastify from "../../assets/images/fastify.svg";
import express from "../../assets/images/express.svg";
import prisma from "../../assets/images/prisma.svg";
import tailwind from "../../assets/images/tailwind.svg";
import styled from "../../assets/images/styledcomponents.svg";
import nodejs from "../../assets/images/node.svg";
import router from "../../assets/images/routerDom.png";
import postgre from "../../assets/images/postgres.svg";
import docker from "../../assets/images/docker.svg";
import sql from "../../assets/images/sql.svg";
import { TopicImages } from "../../interfaces/ITopcImages";

export function MockTopcs() {
  const stackIcons: TopicImages = {
    javascript: javascript,
    typescript: typescript,
    html: html,
    css: css,
    react: react,
    "lottie-animation": lottie,
    "daisy-ui": daisy,
    fastify: fastify,
    express: express,
    prisma: prisma,
    tailwind: tailwind,
    "styled-components": styled,
    nodejs: nodejs,
    "router-dom-v6": router,
    postgresql: postgre,
    docker: docker,
    sql: sql,
  };
  return { stackIcons };
}