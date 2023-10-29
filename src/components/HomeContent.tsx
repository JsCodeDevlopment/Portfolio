import { Button } from "./ui/Button"
import Github from '../assets/images/guithub.png'
import Linkedin from '../assets/images/linkedin.png'
import Instagram from '../assets/images/instagram.png'

export function HomeContent() {
  return (
    <div className={`flex flex-col w-[703px] h-[538px] bg-home-Img bg-right gap-5 bg-contain bg-no-repeat`}>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col">
          <h1 className="text-3xl text-first">Jonatas Silva</h1>
          <p className="text-base">Ceará - Brasil</p>
        </div>
        <p className="text-xl w-96">{
        `Aprender, desenvolver e transmitir. Essa é a
        essência da minha jornada como desenvolvedor Fullstack.`
        }</p>
      </div>
      <div className="flex flex-col gap-60">
      <div className="flex gap-2">
        <Button title="Linkedin" logo={Linkedin} bg="primary" size="medium" endereco="https://www.linkedin.com/in/jscodedevelopment/"/>
        <Button title="Github" logo={Github} bg="primary" size="medium" endereco="https://github.com/JsCodeDevlopment"/>
        <Button title="Instagram" logo={Instagram} bg="primary" size="medium" endereco="https://www.instagram.com/jonatasilva14/"/>
      </div>
      <div className="">
        <p className="text-xl">Te convido a <span className="text-first">conhecer</span> mais sobre mim e meu trabalho.</p>
        <button>↓</button>
      </div>
      </div>
    </div>
  );
}
