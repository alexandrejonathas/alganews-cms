import usePageTitle from "../../core/hooks/usePageTitle"
import PostListFeatures from "../features/PostList.features"
import UserPerformanceFeatures from "../features/UserPerformance.features"
import UserTopTagsFeatures from "../features/UserTopTags.features"
import DefaultLayout from "../layouts"

export default function Home () {
    usePageTitle('Home')
    return <DefaultLayout>
        
        <UserTopTagsFeatures />

        <UserPerformanceFeatures />

        <PostListFeatures />

    </DefaultLayout>
}