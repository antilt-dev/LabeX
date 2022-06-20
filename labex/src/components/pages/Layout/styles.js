import styled from 'styled-components';

export const Container = styled.div`
    width:100vw;
    min-height:100vh;
    background-color:rgba(0,0,0,.5);
    display:flex;
    justify-content:center;
    padding:20px;


    @media (max-width:600px) {
        padding:0;
    }
`;