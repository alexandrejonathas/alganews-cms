import * as NB from './NavBar.styles'

import { NavLink } from "react-router-dom";

export default function NavBar () {
    return  <>
        <NB.List>
            <NB.Item><NavLink to="/" exact>Home</NavLink></NB.Item>
            <NB.Item><NavLink to="/contact">Contato</NavLink></NB.Item>
            <NB.Item><NavLink to="/user">Usuário</NavLink></NB.Item>
        </NB.List>
    </>
}