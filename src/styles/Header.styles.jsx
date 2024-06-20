import styled from "styled-components";

export const HeaderContainer = styled.div`
   margin: 1rem ;
   margin-bottom: 2rem;


`

export const Button = styled.button`
    background-color: ${({theme})=> theme.palette.primary.main};
    color: white;
    &:hover{
        background-color: ${({theme})=> theme.palette.primary.dark};
        transition: all 0.3s ease-in;
    }


`