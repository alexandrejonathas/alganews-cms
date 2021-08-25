import { useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import PostService from "../../sdk/services/Post.service";
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import WordPriceCount from "../components/WordPriceCount";

export default function PostFormFeatures () {

    const [title, setTitle] = useState("")
    const [tags, setTags] = useState<Tag[]>([])

    const [body, setBody] = useState("")

    async function handleSubmitForm (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        
        const newPost = await PostService.createPost({
           title: title,
           body: body,
           imageUrl: '',
           tags: tags.map(t => t.text) 
        })
        
        info({
            title: 'Post alvo com sucesso', 
            content: `Você acabou de criar o post com id ${ newPost.id }`})
    }

    return <PostFormWrapper onSubmit={ handleSubmitForm }>
        <Input 
            label="Titulo"
            value={title}
            onChange={ e => setTitle(e.currentTarget.value) } 
            placeholder="Como fiquei rico aprendendo react" 
        />

        <ImageUpload label="Thumbnail do post" />

        <MarkdownEditor 
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
            <Button variant="primary" label="Salvar post" />
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