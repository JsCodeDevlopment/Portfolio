import javascript from '../../assets/images/javascript.svg'
import typescript from '../../assets/images/typescript.svg'
import html from '../../assets/images/html.svg'
import css from '../../assets/images/css.svg'
import react from '../../assets/images/react.svg'
import lottie from '../../assets/images/lottie.png'
import dayse from '../../assets/images/dayseui.svg'
import fastify from '../../assets/images/fastify.svg'
import prisma from '../../assets/images/prisma.svg'
import tailwind from '../../assets/images/tailwind.svg'
import styled from '../../assets/images/styledcomponents.svg'
import nodejs from '../../assets/images/node.svg'
import { TopicImages } from '../../interfaces/ITopcImages'

export function MockTopcs () {
    const stackIcons: TopicImages = {
        javascript: javascript,
        typescript: typescript,
        html: html,
        css: css,
        react: react,
        'lottie-animation': lottie,
        'dayse-ui': dayse,
        fastify: fastify,
        prisma: prisma,
        tailwind: tailwind,
        'styled-components': styled,
        nodejs: nodejs
    }
    return { stackIcons }
}