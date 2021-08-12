import usePageTitle from "../../core/hooks/usePageTitle"
import DefaultLayout from "../layouts"

export default function Contact () {
    usePageTitle('Contact')
    return <DefaultLayout>
        <h1>Contact</h1>
    </DefaultLayout>
}