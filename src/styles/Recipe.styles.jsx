import styled from "styled-components";
import { Card } from "./UI.styles";

export const RecipesContainer = styled.div`
    margin-top: 100px;
    margin-bottom: 100px;
`


export const StyledCard = styled(Card)`
    
    width: 24%;
    padding: 1rem;
    text-align: center;


    img{
        width: 100%;
        margin-top: 1rem,;
}


@media screen and (max-width:${({theme})=> theme.breakpoint}){
    width:100%;
    margin-left: 1rem;
    margin-right: 1rem;
}
`