import Modal from "react-modal";
import styled from "styled-components";

export const StyledAddTechButton = styled.button`
    height: 32px;
    width: 32px;
    background-color: var(--color-grey-3);
    border: 1.2px solid var(--color-grey-3);
    border-radius: 4px;
    color: var(--color-grey-0);

    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;
`;

export const StyledRegisterModal = styled(Modal)`
    /* Positioning */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Style */
    background-color: var(--color-grey-3);
    border-radius: 4px;
    width: 92.5%;
    max-width: 369px;

    .modal-header {
        padding: 10px 16px;
        background-color: var(--color-grey-2);
        border-top-left-radius: 4px;
        border-top-right-radius: 4px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .modal-header > h1 {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-4);
        line-height: 19px;
        color: var(--color-grey-0);
    }

    .modal-header > button {
        background-color: transparent;
        border: none;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-4);
        line-height: 21px;
        color: var(--color-grey-1);
        cursor: pointer;
    }

    .modal-body {
        padding: 15px 16px 25px 16px;
    }
`;
