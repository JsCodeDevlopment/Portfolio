import { Link } from "react-router-dom";

export function Menu() {
    return (
        <div>
        <h1>ISSO É O MENU</h1>
        <ul>
            <Link to="/"><li>Ínicio</li></Link>
            <Link to="/about"><li>Sobre</li></Link>
            <Link to="/projects"><li>Projetos</li></Link>
            <Link to="/contact"><li>Contatos</li></Link>
        </ul>
        </div>
    )
}