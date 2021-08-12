import usePageTitle from "../../core/hooks/usePageTitle";
import EditorsListFeatures from "../features/EditorsList.features";
import DefaultLayout from "../layouts";

export default function EditorsListView () {
    usePageTitle('Lista de editores')

    return <DefaultLayout>
        <EditorsListFeatures />
    </DefaultLayout>
}