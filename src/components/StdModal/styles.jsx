import Modal from "react-modal";
import styled from "styled-components";

export const StyledStdModal = styled(Modal)`
    /* Content Positioning */
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    /* Content Style */
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

    .modal-close-btn {
        padding: 0px;
        width: fit-content;
        background-color: transparent;
        border: none;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-3);
        line-height: 21px;
        color: var(--color-grey-1);
        cursor: pointer;
    }
`