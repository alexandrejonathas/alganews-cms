import { useLocation } from "react-router-dom";

export default function CalculadoraView () {

    const location = useLocation()

    const query = new URLSearchParams(location.search)

    return <div>
        { `${query.get('a') } ${ query.get('operation') } ${query.get('b')} `} = {Number(query.get('a')) + Number(query.get('b'))}
    </div>
}