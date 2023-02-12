import styled from "styled-components"

export const StyledNav = styled.nav`
    height: 72px;
    padding: 17px 0px 24px 0px;
    background-color: var(--color-grey-4);
    border-bottom: 1px solid var(--color-grey-3);

    section {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    button {
        height: 32px;
        padding: 0px 16px;

        background-color: var(--color-grey-3);
        border: 1.2px solid var(--color-grey-3);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-4);
        line-height: 28px;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    button:hover {
        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
    }
`