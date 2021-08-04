import styled from "styled-components"

export const Wrapper = styled.a`
    display: flex;
    
    padding: 16px;
    gap: 24px;

    border: 1px solid #C4C4C4;

    cursor: pointer;

    transition: box-shadow .15s ease;

    text-decoration: none;
    color: #274060;
    &:focus,
    &:hover {
        outline: none;
        box-shadow: 0 0 0 5px #09f;
        border-color: #09f;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;

`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Name = styled.h3`
  font-size: 18px;
`

export const Description = styled.div`
  font-size: 12px;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`