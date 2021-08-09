import * as WPC from './WordPriceCount.styles'

export interface WordPriceCountProps {
    wordsCount: number,
    pricePerWord: number
}

export default function WordPriceCount (props: WordPriceCountProps) {

    if(props.wordsCount < 0)
        throw Error('A quantidade de palavras não pode ser negativa')

    return <WPC.Wrapper>
        <WPC.WordCount>{ props.wordsCount } palavras</WPC.WordCount>
        <WPC.Price>{(props.wordsCount * props.pricePerWord).toLocaleString('pt-br', {
            style: 'currency',
            currency: 'BRL',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        })}</WPC.Price>
    </WPC.Wrapper>
}