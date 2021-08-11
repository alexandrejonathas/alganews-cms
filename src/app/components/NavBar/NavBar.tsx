import { MouseEvent } from "react";
import { Link } from "react-router-dom";

export default function NavBar () {
    return  <>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contato</Link></li>
            <li><Link to="/user">Usuário</Link></li>
        </ul>
    </>
}