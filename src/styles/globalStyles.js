import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
    :root{
        /* Primary Palette */
        --color-primary: #FF577F;
        --color-primary-focus: #FF427F;
        --color-primary-negative: #59323F;

        /* Grey Scale Palette */
        --color-grey-0: #F8F9FA;
        --color-grey-1: #868E96;
        --color-grey-2: #343B41;
        --color-grey-3: #212529;
        --color-grey-4: #121214;

        /* Feedback Palette */
        --color-sucess: #3FE864;
        --color-negative: #E83F5B;

        /* Extra Colors */
        --color-black-opacity-25: rgba(0, 0, 0, 0.25);
        --color-white: #FFFFFF;

        /* Typography */
        --font-family-1: 'Inter', sans-serif;

        --font-weight-bold: 700;
        --font-weight-semiBold: 600;
        --font-weight-medium: 500;
        --font-weight-regular: 400;
        
        --font-size-1: 18px;
        --font-size-2: 16px;
        --font-size-3: 14px;
        --font-size-4: 12px;
    }

    body {
        background-color: var(--color-grey-4);
    }
`