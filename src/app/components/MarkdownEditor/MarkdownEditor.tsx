import { FileService } from 'alexandrejonathas-alganews-sdk'
import MarkdownIt from 'markdown-it'
import MdEditor, { Plugins } from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'

//Desabilita o underline do control
MdEditor.unuse(Plugins.FontUnderline)

const parser = new MarkdownIt()

/** 
 *  Código adicionado para fazer com que o markdown abra links em outras abas sem sair da aplicação
 */
 const defaultRender = parser.renderer.rules.link_open ||
 function(tokens: any, idx: any, options: any, env: any, self: any) {
   return self.renderToken(tokens, idx, options);
 };

parser.renderer.rules.link_open = function (tokens, idx, options, env, self) {
 var aIndex = tokens[idx].attrIndex('target');
 if (aIndex < 0) {
   tokens[idx].attrPush(['target', '_blank']);
 } else {
   //@ts-ignore
   tokens[idx].attrs[aIndex][1] = '_blank';
 }
 return defaultRender(tokens, idx, options, env, self);
};

/**
 * Fim do código de apoio
 */

export interface MarkdownEditorProps {
    onChange?: (text: string) => any,
    value?: string,
    readOnly?: boolean
}

export default function MarkdownEditor ({ onChange, value, readOnly }: MarkdownEditorProps) {
    async function handleImageUpload(file: File) {
        return FileService.upload(file)
    }
    return <MdEditor 
        onImageUpload={handleImageUpload}
        readOnly={readOnly}
        value={value}
        style={{ height: readOnly ? 'auto' : 300 }} 
        renderHTML={ text => parser.render(text) }
        config={{
            view: {
                html: false
            }
        }} 
        onChange={ ({ text }) => onChange && onChange(text) }
        view={ readOnly ? {
            menu: false,
            md: false,
            html: true
        }: undefined }
    />
}