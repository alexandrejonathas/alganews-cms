import { useParams } from "react-router-dom";

export default function CalcView () {

    const params = useParams<{ a: string, b: string}>()

    return <div>
        Soma { params.a } + {params.b} = {Number(params.a) + Number(params.b)}
    </div>
}