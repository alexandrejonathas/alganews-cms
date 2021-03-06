import { transparentize } from "polished"
import styled from "styled-components"

import ProgressBar from "../components/ProgressBar/ProgressBar"
import FieldDescription from "../components/FieldDescriptor/FieldDescriptor"
import ValueDescriptor from "../components/ValueDescriptor/ValueDescriptor"
import { useEffect } from "react"
import { getEditorDescription } from "alexandrejonathas-alganews-sdk"
import { useParams } from "react-router-dom"
import useSingleEditor from "../../core/hooks/useSingleEditor"

interface EditorProfileFeaturesProps {
  hidePersonalData?: boolean
}

/*
  Desnho de uma requisição
  VERBO RESOURCE HTTP/1.1
  Host: ?
  Content-Type: ?
  Content-Length: ?
  
  Body: ?

  Ex:
  POST /posts HTTP/1.1
  Host: alganews.com.br
  Content-Type: application/json
  Content-Length: 44
  
  { "title": "olá, mundo", "body": "Lorem Ipsum" }
*/

export default function EditorProfileFeatures (props: EditorProfileFeaturesProps) {

    const { id } = useParams<{ id: string }>()

    const { editor, fetchEditor } = useSingleEditor()

    useEffect(() => {
      fetchEditor(Number(id))
    }, [id, fetchEditor])
    
    if(!editor)
      return null

    return <EditorProfileWrapper>
        <EditorHeadline>
            <Avatar src={editor.avatarUrls.medium} alt={editor.name} />
            <Name>{ editor.name }</Name>
            <Description>{ getEditorDescription(new Date(editor.createdAt!)) }</Description>            
        </EditorHeadline>

        <Divisor />

        <EditorFeatures>
            
            <PersonalInfo>
                <Biography>{editor.bio}</Biography>
                <Skills>
                    {
                      editor.skills?.map(skill => {
                        return <ProgressBar key={skill.name} theme="primary" title={skill.name} progress={skill.percentage} />
                      })
                    }
                </Skills>
            </PersonalInfo>

            <ContactInfo>               
                <FieldDescription description="Cidade" value={editor.location.city} />
                <FieldDescription description="Estado" value={editor.location.state} />
                {
                  !props.hidePersonalData && 
                  <>
                    <FieldDescription description="telefone" value="+55 81 9.9999-9999" />                
                    <FieldDescription description="E-mail" value="email@gmail.com" />                
                    <FieldDescription description="Data de Nascimento" value="03 de Março de 1984 | 37 anos" />                  
                  </>
                }

            </ContactInfo>

        </EditorFeatures>
        {
          !props.hidePersonalData && 
            <EditorEarnings>
                <ValueDescriptor variant="default" description="Palavras nesta semana" value={21.452} />
                <ValueDescriptor variant="primary" description="Ganhos na semana" value={560322.02} />
                <ValueDescriptor variant="default" description="Palavras no mês" value={140.432} />
                <ValueDescriptor variant="primary" description="Ganhos no mês" value={560322.02} />
                <ValueDescriptor variant="default" description="Total de palavras" value={2434.423} />
                <ValueDescriptor variant="primary" description="Ganhos sempre" value={560322.02} />
            </EditorEarnings>
        }
    </EditorProfileWrapper>
}

const EditorProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 24px;

    gap: 16px;

    border: 1px solid ${transparentize(0.9, '#274060')};
`

const EditorHeadline = styled.div`
  display: grid;
  align-items: center;
  gap: 8px 16px;
  grid-template-rows: 2;
  grid-template-columns: 48px auto;
  height: 48px;
`

const Avatar = styled.img`
  grid-row-start: 1;
  grid-row-end: 3;
  object-fit: contain;
  width: 48px;
  height: 48px;
`

const Name = styled.h1`
  font-size: 18px;
  font-weight: 400;
  grid-column-start: 2;
` 

const Description = styled.span`
  font-size: 12px;
  grid-column-start: 2;
`
const Divisor = styled.div`
  border-bottom: 1px solid  ${transparentize(0.9, '#274060')};
`
const EditorFeatures = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2;
  gap: 24px;
`

const Biography = styled.p`
  font-size: 12px;
  line-height: 20px;
`

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px 0;
  >* {
    width: 100%;
  }
  &>:nth-child(1),
  &>:nth-child(2) {
    width: 50%;
  }
`
const PersonalInfo = styled.div`
    display: flex;
    flex-direction: column;

    gap: 16px;
`

const Skills = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const EditorEarnings = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 24px;
`