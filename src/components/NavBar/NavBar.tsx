import { MouseEvent } from "react";
import { useHistory } from "react-router";

export default function NavBar () {

    const history = useHistory()

    function handleAnchorClick (e: MouseEvent<HTMLAnchorElement>) {
        e.preventDefault()
        const newRoute = e.currentTarget.getAttribute('href')
        if (newRoute) 
            history.push(newRoute) 
    }

    return  <nav>
        <ul>
            <li><a href="/" onClick={ handleAnchorClick }>Home</a></li>
            <li><a href="/contact" onClick={ handleAnchorClick }>Contato</a></li>
            <li><a href="/user" onClick={ handleAnchorClick }>Usuário</a></li>
        </ul>
    </nav>
}