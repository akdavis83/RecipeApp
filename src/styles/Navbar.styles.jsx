import {styled}  from 'styled-components'
import logo from '../assets/logo.png'

export const Nav = styled.nav`
    z-index: 100;
    padding: 0.5rem 2rem;
    background-color: ${({theme})=> theme.palette.primary.dark};
    box-shadow: 0px 2px 5px rgba(0,0,0,0.4);

    width:100%;
`

export const Logo = styled.img.attrs({
    src:logo
})`
    height:60px
`

