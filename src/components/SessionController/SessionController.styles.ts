import styled from "styled-components"

export const Wrapper = styled.div`    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 16px;
    gap: 24px;

    color: #274060;
    border: 1px solid #C4C4C4;
`

export const Name = styled.h2`
  width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-align: center;

  font-size: 18px;
  font-weight: 600;
`

export const Description = styled.div`
  font-size: 12px;
`

export const Avatar = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`

