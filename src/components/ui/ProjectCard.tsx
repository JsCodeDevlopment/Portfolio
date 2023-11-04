import img from "../../assets/images/temporary.png";
import js from "../../assets/images/javascript.svg";
import react from "../../assets/images/react.svg";
import sc from "../../assets/images/styledcomponents.svg";
import github from "../../assets/images/github-icon.svg";
import link from "../../assets/images/visitar.svg";
import { Button } from "./Button";

export function ProjectCard() {
  return (
    <div className="card w-full bg-white/5 shadow-xl hover:bg-gradient-to-b hover:from-background/80 hover:to-background/5">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body gap-5">
        <h2 className="card-title">
          Librini Cell Store
          <div className="badge badge-sm badge-error text-white">NEW</div>
        </h2>
        <p>
          Simulação simples de uma página de e-comerce, com função de seleção de
          quantidade de produto, adição, visualização e exclusão do(s)
          produto(s) adicionado(s) ao carrinho.
        </p>
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <div className="tooltip" data-tip="React">
              <img src={react} width={20} height={20} alt="" />
            </div>
            <div className="tooltip" data-tip="Javascript">
              <img src={js} width={20} height={20} alt="" />
            </div>
            <div className="tooltip" data-tip="Styled Components">
              <img src={sc} width={20} height={20} alt="" />
            </div>
          </div>
          <div className="flex justify-end">
            <div className="tooltip" data-tip="Visitar">
              <Button
                title=""
                logo={link}
                endereco=""
                size="noTitleSmall"
                logoSize="medium"
                bg="primary" />
            </div>
            <div className="tooltip" data-tip="Repositório">
              <Button
                title=""
                logo={github}
                endereco=""
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
