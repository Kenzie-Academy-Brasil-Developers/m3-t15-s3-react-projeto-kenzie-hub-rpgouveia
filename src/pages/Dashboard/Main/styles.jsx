import styled from "styled-components"

export const StyledMain = styled.main`
    background-color: var(--color-grey-4);

    section {
        padding-top: 37px;
        display: flex;
        flex-direction: column;
        gap: 23px;
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
        font-size: var(--font-size-2);
        line-height: 24px;
        color: var(--color-grey-0);
    }
`