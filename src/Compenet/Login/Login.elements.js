import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';


export const CandidatesContainer = styled.div`

width:26rem;
display: flex;
margin: 3rem auto 2rem auto;
justify-content: center;
box-sizing: border-box;
padding: 1rem;
border-radius: 20px;
z-index: 1000
position: relative;

&::before{
    content: '';
    background: blue;
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50% ;
    bottom: 8rem;
    left:28rem;
    z-index: -20;
}

&::after{
    content: '';
    background: blue;
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50% ;
    top: 2rem;
    right:28rem;
    z-index: -20;
}
`

export const Form = styled.div`
max-width: 35% ;
height: auto;
 background:#ecf0f3;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
margin: 3rem  auto;
border-radius: 5px;
padding: 35px 25px;
box-shadow: 14px 14px 20px #cbced1, -14px -14px 20px white;
`;


export const FormError = styled.div`
background: #e87c03;
border-radius: 4px;
font-size: 1rem;
color: white;
margin: 0 0 16px;
padding: 15px 20px;
 `;

export const FormBase = styled.form`
display: flex;
flex-direction: column;
width: 100%;
max-width: 22rem;

`;
export const FormTitle = styled.h1`
color:#020659 ;
font-size: 2rem;
font-weight: bold;
margin-bottom: 28px;
`;
export const FormText = styled.p`
color: #2b4f81;
font-size: 1rem;
font-weight: 500;
`
export const FormInput = styled.input`
border-radius: 50px;
border: none !important;
outline: none;
color: #2b4f81;
background:#ecf0f3;
line-height: 30px;
padding: 10px;
padding-left: 20px;
/* padding: 5px 20px; */
margin-bottom: 20px;
box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px white;

&:last-of-type {
    margin-bottom: 30px;
}
`;

export const FormLink = styled(LinkR)`
color: #2b4f81 !important;

&:hover {
    text-decoration: underline;
}
`

export const FormSubmit = styled.button`
 background: #020659; 
/* background: #1DA1F2; */
border-radius: 50px;
font-weight: 900;
margin:24px 0 12px;
padding: 16px;
border: 0;
color: white;
cursor: pointer;
box-shadow: 14px 14px 20px grey, -14px -14px 20px white;

&:disabled{
    opacity: 0.5;
}
`;