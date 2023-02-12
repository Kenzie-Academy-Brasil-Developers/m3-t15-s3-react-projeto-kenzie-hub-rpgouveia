import styled from "styled-components"

export const StyledMainLogin = styled.main`
    background-color: var(--color-grey-4);

    section {
        padding-top: 81px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 19px;
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 17px;

        width: 100%;
        max-width: 369px;
        padding: 34px 18px;
        background-color: var(--color-grey-3);
        box-shadow: 0px 4px 40px -10px var(--color-black-opacity-25);
        border-radius: 4px;
    }

    h1 {
        align-self: center;
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-bold);
        font-size: var(--font-size-3);
        line-height: 22px;
        color: var(--color-grey-0);
    }

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
        font-size: var(--font-size-3);
        line-height: 21px;
        color: var(--color-grey-0);
    }

    input:focus {
        outline: 1.2px solid var(--color-grey-0);
        
    }
    input:focus::placeholder {
        color: var(--color-grey-0);
    }

    button {
        height: 38.5px;
        width: 100%;
        max-width: 324px;
        padding: 0px 22px;

        background-color: var(--color-primary);
        border: 1.2px solid var(--color-primary);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-2);
        line-height: 26px;
        color: var(--color-white);

        cursor: pointer;
    }

    form > div {
        margin-top: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 17px;
    }

    p {
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-4);
        line-height: 18px;
        color: var(--color-grey-1);
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        height: 38.5px;
        width: 100%;
        max-width: 324px;
        padding: 0px 22px;

        background-color: var(--color-grey-1);
        border: 1.2px solid var(--color-grey-1);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-medium);
        font-size: var(--font-size-2);
        line-height: 26px;
        color: var(--color-grey-0);

        cursor: pointer;
    }

    @media(min-width: 768px) {
        img {
            width: 144px;
            height: 20px;
        }

        section {
            padding-top: 77px;
            gap: 36px;
        }

        form {
            padding: 42px 22px;
            gap: 22px;
        }

        h1 {
            font-size: var(--font-size-1);
            line-height: 28px;
        }

        fieldset {
            gap: 22px;
        }

        input {
            height: 48px;
            padding: 0px 16px;
            font-size: var(--font-size-2);
            line-height: 26px;
        }

        button {
            height: 48px;
        }

        form > div {
            margin-top: 12px;
            gap: 22px;
        }

        a {
            height: 48px;
        }
    }
`