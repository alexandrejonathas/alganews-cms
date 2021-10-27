import { transparentize } from "polished";
import styled from "styled-components";

export const ModalWrapper = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    gap: 14px;

    background: #F3F8FA;
    color: #274060;

    border: 1px solid ${ transparentize(0.9, '#274060')};
`