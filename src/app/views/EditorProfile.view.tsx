import ErrorBoundary from "../components/ErrorBoundary"
import EditorProfileFeatures from "../features/EditorProfile.features"
import DefaultLayout from "../layouts/Default.layout"

export default function EditorProfileView () {
   return <DefaultLayout >
       <ErrorBoundary>
        <EditorProfileFeatures hidePersonalData />
       </ErrorBoundary>
    </DefaultLayout> 
}