import styled from "styled-components"

import { transparentize } from "polished"

export const Wrapper = styled.table`
    width: 100%;
    color: #274060;
    background: ${ transparentize(0.95, '#274060') };
`

export const Heading = styled.thead`
    background: ${ transparentize(0.95, '#274060') };
    text-align: left;
`
export const HeadingRow = styled.tr`
    text-align: left;
`

export const HeadingCell = styled.th`
    height: 32px;
    font-size: 14px;
    padding: 0 8px;
`

export const Body = styled.tbody``

export const BodyRow = styled.tr``

export const BodyCell = styled.td`
    height: 40px;
    font-size: 12px;
    font-weight: 500;
    padding: 0 8px;
`