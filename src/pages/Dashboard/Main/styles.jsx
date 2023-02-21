import styled from "styled-components";

export const StyledMain = styled.main`
    background-color: var(--color-grey-4);

    section {
        padding-top: 20px;
        padding-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    section > h2 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-2);
        line-height: 18px;
        color: var(--color-grey-0);
    }

    ul {
        padding: 22px 9.5px;
        border-radius: 4px;
        background-color: var(--color-grey-3);

        display: flex;
        flex-direction: column;
        gap: 16px;
    }

    ul > li > h2 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-2);
        line-height: 18px;
        color: var(--color-grey-0);
        text-align: center;
    }
`;
