import { useEffect } from "react"
import usePageTitle from "../../core/hooks/usePageTitle"
import usePosts from "../../core/hooks/usePosts"
import ErrorBoundary from "../components/ErrorBoundary"
import PostListFeatures from "../features/PostList.features"
import { UserEarningsFeatures } from "../features/UserEarnings.features"
import UserPerformanceFeatures from "../features/UserPerformance.features"
import UserTopTagsFeatures from "../features/UserTopTags.features"
import DefaultLayout from "../layouts"


export default function Home () {
    usePageTitle('Home')

    const { paginatedPosts, loading, fetchPosts } = usePosts()

    useEffect(() => {
        fetchPosts({size:1})
    }, [fetchPosts])

    return <DefaultLayout>
        <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(2, 1fr)', 
            alignItems: 'center', gap: '32px'}}>

            <ErrorBoundary>
                <UserTopTagsFeatures />
            </ErrorBoundary>

            <ErrorBoundary>
                <UserEarningsFeatures />
            </ErrorBoundary>
        </div>

        <UserPerformanceFeatures />
        
        <PostListFeatures />

    </DefaultLayout>
}