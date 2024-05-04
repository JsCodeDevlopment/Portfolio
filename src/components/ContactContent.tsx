import { Button } from "./ui/Button";
import { ContactForm } from "./ui/ContactForm";
import Github from "../assets/images/guithub.png";
import Linkedin from "../assets/images/linkedin.png";
import Instagram from "../assets/images/instagram.png";

export function ContactContent() {
  return (
    <div className="flex flex-col gap-12">
      <div className="flex flex-wrap gap-5 max-lg:justify-center max-xl:justify-center">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl text-first font-title">Contato</h1>
          <div className="flex flex-col gap-2">
            <p className="text-lg">
              {`Se você tem ideias inovadoras ou deseja colaborar em projetos criativos, estou sempre pronto para uma conversa. Sinta-se à vontade para entrar em contato e juntos transformaremos suas visões em realidade.`}
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-10 max-lg:gap-3 max-lg:items-center max-lg:justify-center max-md:flex-col max-md:justify-center">
          <h1 className="text-lg font-semibold">Minhas Redes Sociais</h1>
          <div className="flex max-lg:items-center max-lg:justify-center max-sm:w-10">
            <Button
              title="Linkedin"
              logo={Linkedin}
              bg="primary"
              size="medium"
              endereco="https://www.linkedin.com/in/jscodedevelopment/"
              focus="activeFocus" />
            <Button
              title="Github"
              logo={Github}
              bg="primary"
              size="medium"
              endereco="https://github.com/JsCodeDevlopment"
              focus="activeFocus" />
            <Button
              title="Instagram"
              logo={Instagram}
              bg="primary"
              size="medium"
              endereco="https://www.instagram.com/jonatasilva14/"
              focus="activeFocus" />
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl text-first font-title">
            Que tal mandar um email?
          </h1>
          <h1 className="text-lg">
            Estou ansioso para ouvir de você. Deixe-me uma mensagem.
          </h1>
        </div>
        <div className="flex flex-col items-start w-full">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
