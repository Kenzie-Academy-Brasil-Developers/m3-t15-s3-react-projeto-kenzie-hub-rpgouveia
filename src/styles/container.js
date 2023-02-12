import styled from "styled-components";

export const StyledContainer = styled.div`
    min-height: 100vh;
    width: 92.5%;
    max-width: 100%;
    margin: 0 auto;

    @media(min-width: 767px) {
        width: 86.5%;
    }

    @media(min-width: 1023px) {
        width: 53.5%;
    }

    @media(min-width: 2559px) {
        width: 56.5%;
    }
`