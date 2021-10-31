import { Post, PostService } from "alexandrejonathas-alganews-sdk"
import { useCallback, useState } from "react"
import info from "../utils/info"

export default function useSinglePost () {
  const [post, setPost] = useState<Post.Detailed>()
  const [loading, setLoading] = useState(false)

  const fetchPost = useCallback(async (postId: number) => {
    setLoading(true)
    PostService.getExistingPost(postId)
      .then(setPost).finally(() => setLoading(false))    
  }, [])

  const publishPost = useCallback(async (postId: number) => {
    await PostService.publish(postId)
    info({title: 'Publicação de post', content: 'Post publicdo com sucesso'})
  }, [])

  return {
    post, 
    loading, 
    fetchPost, 
    publishPost
  }

}