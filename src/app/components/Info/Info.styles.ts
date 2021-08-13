import { transparentize } from "polished";
import styled from "styled-components";

export const InfoWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 14px;
    width: 373px;

    background: #F3F8FA;
    color: #274060;

    padding: 24px;

    border: 1px solid ${ transparentize(0.9, '#274060')};
`

export const InfoIcon = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`

export const InfoMessage = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
`

export const InfoTitle = styled.h2`
    font-size: 24px;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    line-clamp: 1;
    overflow: hidden;
`