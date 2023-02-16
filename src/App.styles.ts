import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 750px;
    margin: auto;
    display: flex;
    padding: 50px 0;
    @media (max-width: 750px) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    @media (max-width: 750px) {
        margin-bottom: 50px;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;
`;

