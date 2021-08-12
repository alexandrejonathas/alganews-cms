import { useEffect } from "react"
import { useParams } from "react-router-dom"
import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts"

export default function UserView () {

    usePageTitle('User')

    const params = useParams<{ userId: string }>()

    useEffect(() => {
        console.log(params)
    }, [])

    return <DefaultLayout>
        <h1>User { params.userId }</h1>
    </DefaultLayout>
}