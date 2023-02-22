import styled from "styled-components";

export const StyledUpdateFormModal = styled.form`
    padding: 25px 16px 25px 16px;
    display: flex;
    flex-direction: column;
    gap: 17px;

    fieldset {
        display: flex;
        flex-direction: column;
        gap: 17px;
    }

    label {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 0px;
        color: var(--color-grey-0);
    }

    input {
        height: 38.5px;
        padding: 0px 13px;

        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 21px;
        color: var(--color-grey-0);
    }

    input:focus {
        outline: 1.2px solid var(--color-grey-0);
    }

    input:focus::placeholder {
        color: var(--color-grey-0);
    }

    select {
        height: 38.5px;
        padding: 0px 13px;

        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 21px;
        color: var(--color-grey-1);
    }

    p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 0px;
        color: var(--color-negative);
    }

    div {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    .form-submit-btn {
        height: 38.5px;
        max-width: 204px;
        padding: 0px 22px;

        background-color: var(--color-primary);
        border: 1.2px solid var(--color-primary);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-4);
        line-height: 26px;
        color: var(--color-white);

        cursor: pointer;
    }

    .form-submit-btn:hover {
        background-color: var(--color-primary-focus);
        border: 1.2px solid var(--color-primary-focus);
    }

    .form-delete-btn {
        height: 38.5px;
        max-width: 98px;
        padding: 0px 22px;

        background-color: var(--color-grey-1);
        border: 1.2px solid var(--color-grey-1);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-4);
        line-height: 26px;
        color: var(--color-white);

        cursor: pointer;
    }

    .form-delete-btn:hover {
        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
    }

    @media(min-width: 768px) {
        input {
            height: 48px;
            font-size: var(--font-size-2);
        }

        select {
            height: 48px;
            font-size: var(--font-size-2);
        }

        .form-submit-btn {
            height: 48px;
            font-size: var(--font-size-2);
        }

        .form-delete-btn {
            height: 48px;
            font-size: var(--font-size-2);
        }
    }
`;