import styled from "styled-components";

export const StyledContainer = styled.div`
    min-height: 100vh;
    width: 92.5%;
    max-width: 100%;
    margin: 0 auto;

    @media(min-width: 767px) {
        width: 53.5%;
    }

    @media(min-width: 1439px) {
        width: 41.5%;
    }

    @media(min-width: 1900px) {
        width: 40%;
    }
`