import { useParams } from "react-router";
import PostFormFeatures from "../features/PostForm.features";
import DefaultLayout from "../layouts";

export default function EditPostView () {
    const params = useParams<{id: string}>()
    return <DefaultLayout>
        <PostFormFeatures postId={Number(params.id)} />
    </DefaultLayout>
}