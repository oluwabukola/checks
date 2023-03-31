import styled from 'styled-components';
import { Link as LinkR  } from 'react-router-dom';
import { FaMagento } from 'react-icons/fa';

export const Nav = styled.nav`
/* background:#020659 */
background: #fff;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
top: 0;
position: sticky;
font-size: 1.2rem;
z-index: 10;

box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`
export const NavContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
max-width: 1100px;
padding: 0 24px;

`;

export const NavLogo = styled(LinkR)`
 display: flex;
justify-self: start; 
color: #020659 !important; 
align-items: center;
font-size: 2rem;
text-decoration: none;
cursor: pointer;
font-weight: bold;
`;

export const NavIcon = styled(FaMagento)`
margin-right: 0.5rem;
`;

export const MobileIcon = styled.div`
display: none;


@media screen and (max-width: 768x){
    display: block;
    position: absolute;
    top: 0;
    cursor: pointer;
    font-size: 1.8rem;
    right: 0;
}
`
export const NavMenu = styled.ul`
list-style: none;
display: flex;
align-items: center;
text-align: center;
margin: 0 -22px 0 0;

@media screen and(max-width: 768px) {
    display: none
}
`
export const NavItem = styled.li`
height:80px;

`

export const NavLink = styled(LinkR)`
display: flex;
color: #020659 !important;
cursor: pointer;
height: 100%;
text-decoration: none;
align-items: center;
border-radius: none !important;
padding: 0 1rem;


/* &.active{
    border-bottom: 2px solid red;
} */
`;

export const NavBtn = styled.nav`
display:  flex;
align-items: center;

@media screen and (max-width:760px){
display: none;
}
`

export const NavBtnLink = styled(LinkR)`
color: #fff;
background: #020659;
white-space: nowrap;
border-radius: 50px;
padding: 10px 22px;
cursor: pointer;
border: none;
outline: none;
font-size: 1rem;
transition: 0.2s ease-in-out;
text-decoration: none;

&:hover{
    transition: all 0.2s ease-in-out;

}

`