import usePageTitle from "../../core/hooks/usePageTitle"
import PostListFeatures from "../features/PostList.features"
import { UserEarningsFeatures } from "../features/UserEarnings.features"
import UserPerformanceFeatures from "../features/UserPerformance.features"
import UserTopTagsFeatures from "../features/UserTopTags.features"
import DefaultLayout from "../layouts"

export default function Home () {
    usePageTitle('Home')
    return <DefaultLayout>
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            alignItems: 'center', gap: '32px'}}>
            <UserTopTagsFeatures />
            <UserEarningsFeatures />
        </div>

        <UserPerformanceFeatures />

        <PostListFeatures />

    </DefaultLayout>
}