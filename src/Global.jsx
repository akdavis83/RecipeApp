import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Leckerli+One&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Pangolin&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    font-family: 'Roboto', sans-serif;
}

a{
    text-decoration: none;
}

button{
    padding: 0.5rem 1rem;
    color: white;
    font-size: 1rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
}

input{
    height: 2.5rem;
    outline: none;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    font-size: 1rem;
}

.text-center{
    text-align: center;
}

.text-primary{
    color: ${({theme})=> theme.palette.primary.main}
}

.text-secondary{
    color: ${({theme})=> theme.palette.secondary.main}
}


`;


export default GlobalStyle;