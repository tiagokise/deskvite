import styled from 'styled-components';

export const Home = styled.div`
    position: relative;
`;

export const Desktop = styled.div<any>`
    background-image: url(${({ background }: any) => background });
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* background-attachment: fixed; */
    position: relative;
    width: 100vw;
    height: calc(100vh - 48px);
    
    /* top: 98px; */
`;
