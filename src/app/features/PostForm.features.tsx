import { useState } from "react";
import { Tag } from "react-tag-input";
import styled from "styled-components";
import countWordsInMarkdown from "../../core/utils/countWordsInMarkdown";
import info from "../../core/utils/info";
import Button from "../components/Button/Button";
import ImageUpload from "../components/ImageUpload";
import Input from "../components/Input";
import MarkdownEditor from "../components/MarkdownEditor";
import TagInput from "../components/TagInput";
import WordPriceCount from "../components/WordPriceCount";

export default function PostFormFeatures () {

    const [tags, setTags] = useState<Tag[]>([])

    const [body, setBody] = useState("")

    function handleSubmitForm (e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        info({title: 'Atenção', content: 'Ação não implementada'})
    }

    return <PostFormWrapper onSubmit={ handleSubmitForm }>
        <Input label="Titulo" placeholder="Como fiquei rico aprendendo react" />

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