import { PostService } from "alexandrejonathas-alganews-sdk";
import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";
import Loading from "../components/Loading";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import WordPriceCount from "../components/WordPriceCount";

interface PostFormProps {
    postId?: number
}

export default function PostFormFeatures ({ postId }: PostFormProps) {

    const [title, setTitle] = useState("")
    const [tags, setTags] = useState<Tag[]>([])

    const [body, setBody] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const [publishing, setPublishing] = useState<boolean>(false)

    const [loading, setLoading] = useState(false)

    const history = useHistory()

    useEffect(() => {
        if(postId){
            setLoading(true)
            PostService.getExistingPost(postId)
                .then(post => {
                    setTitle(post.title)
                    setBody(post.body)
                    setImageUrl(post.imageUrls.default)
                    setTags(post.tags.map(tag => ({id: tag, text: tag})))
                }).finally(() => setLoading(false))
        } 
    }, [postId])

    async function createPost () {
        const newPost = await PostService.createPost({
            title: title,
            body: body,
            imageUrl: imageUrl,
            tags: tags.map(t => t.text) 
         })
         
         info({
             title: 'Post salvo com sucesso', 
             content: `Você acabou de criar o post com id ${ newPost.id }`
         })        
    }

    async function updatePost (postId: number) {
        await PostService.updatePost(postId, {
            title: title,
            body: body,
            imageUrl: imageUrl,
            tags: tags.map(t => t.text) 
         })
         
         info({
             title: 'Post atualiado com sucesso', 
             content: `Você acabou de atualizar o post com id ${ postId }`
         })        
    }    

    async function handleSubmitForm (e: React.FormEvent<HTMLFormElement>) {
        try{
            e.preventDefault()

            setPublishing(true)
            
            postId ? await updatePost(postId) : await createPost()

            history.push('/')
            
        }finally {
            setPublishing(false)
        }

    }

    if(loading)
        return <Loading show={loading} />

    return <PostFormWrapper onSubmit={ handleSubmitForm }>
        
        <Loading show={publishing} />

        <Input 
            label="Titulo"
            value={title}
            onChange={ e => setTitle(e.currentTarget.value) } 
            placeholder="Como fiquei rico aprendendo react" 
        />

        <ImageUpload 
            label="Thumbnail do post" 
            onImageUpload={ url => setImageUrl(url)}
            preview={imageUrl} 
        />

        <MarkdownEditor
            value={body} 
            onChange={setBody}
        />

        <TagInput 
            tags={tags} 
            onAdd={tag => setTags([...tags, tag])}
            onDelete={ index => tags.filter((_, i) => i !== index) }
            placeholder="Insira as tags do post" />

        <PostFormSubmit>
            <WordPriceCount 
                pricePerWord={0.25} 
                wordsCount={countWordsInMarkdown(body)} 
            />
            <Button 
                variant="primary" 
                label="Salvar post"
                disabled={ !title || !imageUrl || !body || !tags.length }
            />
        </PostFormSubmit>

    </PostFormWrapper>
}

const PostFormWrapper = styled.form`
    display: flex;
    flex-direction: column;

    gap: 32px;
`

const PostFormSubmit = styled.div`
    display: flex;
    justify-content: space-between;
`