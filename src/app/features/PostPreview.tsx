import { Post, PostService } from 'alexandrejonathas-alganews-sdk';
import { useEffect, useState } from 'react';
import styled from 'styled-components'
import withBoundary from "../../core/hoc/withBoundary";
import confirm from '../../core/utils/confirm';
import info from '../../core/utils/info';
import modal from '../../core/utils/modal';
import Button from '../components/Button';
import Loading from '../components/Loading';
import MarkdownEditor from '../components/MarkdownEditor';

interface PostPreviewProps {
  postId: number
}

function PostPreview (props: PostPreviewProps) {

  const [post, setPost] = useState<Post.Detailed>()
  const [loading, setLoading] = useState(false)

  async function publish() {
    await PostService.publish(props.postId)
    info({title: 'Publicação de post', content: 'Post publicdo com sucesso'})
  }

  function reopenModal() {
    modal({
      children: <PostPreview postId={props.postId} />
    })
  }

  useEffect(() => {
    setLoading(true)
    PostService.getExistingPost(props.postId)
      .then(setPost)
      .finally(() => setLoading(false))
  }, [props.postId])

  if(loading)
    return <Loading show={loading} />

  if(!post)
    return null

  return <Wrapper>
    <Header>
      <h2>{post.title}</h2>
      <div>
        <Button 
          variant="danger" 
          label="Publicar" 
          disabled={post.published}
          onClick={() => {
            confirm({
              title: 'Deseja publicar o post?',
              onConfirm: publish,
              onCancel: reopenModal
            })
          }}
        />
        <Button 
          variant="primary" 
          label="Editar" 
          disabled={post.published}
          onClick={() => window.location.pathname = `/posts/${post.id}/editar` } 
        />
      </div>
    </Header>

    <Image src={post.imageUrls.medium} />

    <MarkdownEditor 
      readOnly
      value={post.body}
    />
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 655px;

  padding: 24px;

  gap: 24px;

  max-height: 70vh;
  overflow-y: auto;
  
  background-color: #F3F8FA;
  border: 1px solid #CCC;

  box-shadow: 0 6px 6px rgba(0,0,0,.05);
`

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 18px;
    font-weight: 600;
    color: #274060;
  }

  div {
    display: flex;
    gap: 8px;
  }
`

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
`

export default withBoundary(PostPreview)
