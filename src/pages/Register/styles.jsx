import styled from "styled-components"

export const StyledMainRegister = styled.main`
    background-color: var(--color-grey-4);

    section {
        padding-top: 48px;
        padding-bottom: 96px;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 32px;
    }

    section > div {
        width: 100%;
        max-width: 370px;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }

    a {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        text-decoration: none;

        height: 32px;
        padding: 0px 16px;

        background-color: var(--color-grey-3);
        border: 1.2px solid var(--color-grey-3);
        border-radius: 4px;

        font-family: var(--font-family-1);
        font-weight: var(--font-weight-semiBold);
        font-size: var(--font-size-4);
        line-height: 23px;
        color: var(--color-grey-0);
    }

    a:hover {
        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
    }

    form {
        display: flex;
        flex-direction: column;
        gap: 17px;

        width: 100%;
        max-width: 370px;
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

    p {
        align-self: center;
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-4);
        line-height: 18px;
        color: var(--color-grey-1);
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
    
    select {
        height: 38.5px;
        padding: 0px 13px;
        
        background-color: var(--color-grey-2);
        border: 1.2px solid var(--color-grey-2);
        border-radius: 4px;
        
        font-family: var(--font-family-1);
        font-weight: var(--font-weight-regular);
        font-size: var(--font-size-3);
        line-height: 21px;
        color: var(--color-grey-1);
    }
    
    button {
        height: 38.5px;
        width: 100%;
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

    button:hover {
        background-color: var(--color-primary-focus);
        background-color: var(--color-primary-focus);
    }
    
    @media(min-width: 768px) {

        section {
            gap: 40px;
        }

        section > div > img {
            width: 144px;
            height: 20px;
        }

        section > div > a {
            height: 40px;
            line-height: 28px;
        }

        form {
            gap: 22px;
            padding: 42px 22px;
        }

        h1 {
            font-size: var(--font-size-1);
            line-height: 28px;
        }

        p {
            line-height: 22px;
        }

        fieldset {
            gap: 22px;
        }

        input {
            height: 48px;
            padding: 0px 16px;
        }

        select {
            height: 48px;
            padding: 0px 16px;
        }

        button {
            height: 48px;
        }
    }
`