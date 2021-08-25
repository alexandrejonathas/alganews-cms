import Service from '../Service'

import { Post } from '../@types'

class PostService extends Service {

    static getAllPosts() {
        return this.Http
            .get<Post.Paginated>('/posts')
            .then(this.getData)
    }

    static getExistingPost(id: number) {
        return this.Http
            .get<Post.Paginated>(`/posts/${id}`)
            .then(this.getData)
    }    

}

export default PostService