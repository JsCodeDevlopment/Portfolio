import img from "../../assets/images/temporary.png";
import stack from "../../assets/images/javascript.svg";
import { Button } from "./Button";

export function ProjectCard() {
  return (
    <div className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
        <img src={img} className="bg-cover " alt="" />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          Librini Cell Store
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          Simulação simples de uma página de e-comerce, com função de seleção de
          quantidade de produto, adição, visualização e exclusão do(s)
          produto(s) adicionado(s) ao carrinho.
        </p>
      </div>
      <div className="flex flex-col">
        <div className="flex gap-6 p-6 pt-0">
          <div className="flex gap-1">
            <img src={stack} width={20} height={20} alt="" />
            <img src={stack} width={20} height={20} alt="" />
            <img src={stack} width={20} height={20} alt="" />
          </div>
          <div className="flex gap-2">
            <Button title="Visitar" logo={stack} endereco="" />
            <Button title="Repositório" logo={stack} endereco="" />
          </div>
        </div>
      </div>
    </div>
  );
}
