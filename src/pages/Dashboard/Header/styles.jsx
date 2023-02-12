import styled from "styled-components"

export const StyledHeader = styled.header`
    height: 131px;
    background-color: var(--color-grey-4);
    border-bottom: 1px solid var(--color-grey-3);

    section {
        padding: 35.5px 0px 35.5px 0px;
        
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h1 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-1);
        line-height: 28px;
        color: var(--color-grey-0);
    }

    p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 22px;
        color: var(--color-grey-1);
    }

    @media(min-width: 768px) {
        section {
            gap: unset;
            flex-direction: row;
            justify-content: space-between;
        }
    }
`