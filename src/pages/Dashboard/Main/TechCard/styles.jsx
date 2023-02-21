import styled from "styled-components";

export const StyledTechCard = styled.li`
    padding: 12px;
    border-radius: 4px;
    background-color: var(--color-grey-4);

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    :hover {
        background-color: var(--color-grey-2);
    }

    h3 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-3);
        line-height: 22px;
        color: var(--color-grey-0);
    }

    p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 22px;
        color: var(--color-grey-1);
    }
`;