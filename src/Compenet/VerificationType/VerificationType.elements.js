
import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';



export const CloseModal = styled.button`
ouline: none;
border: none;
pointer: cursor;
padding: 10px 15px;
color: #020659;
font-size: 1rem;
font-weight: 600;
border-radius:50%;
`
export const CreateVerification = styled.h3`
color: #2b4f81;
font-weight: 500;
/* font-size: 2rem; */
align-self: flex-start;
margin-bottom: 1rem;
`;
export const Rule = styled.hr`
 /* color: #3960C0; */
 width: 50%;
height: 0.04rem;
border: 0;
height: 1px;
background-image: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0));
`

export const VerificationType = styled.div`

background: #fff;
display: flex;
width: 45rem;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem 2rem;;

// overflow-y: scroll;
`;

export const Title = styled.h5`
color: #2b4f81;
margin: 0;
`;

export const TypeForm = styled.div`
margin: 1rem 0 0.5rem 0;
padding: 0.5rem ;
width: 100%;
display: flex;
flex-direction: column;
box-sizing: border-box;

 `;

export const InputContainer = styled.div`
padding: 0.5rem 2rem;
 display: flex;
 width: 100%;
justify-content: space-between;
align-items: center;

 `;
  export const Choice = styled.p`
  color: rgb(77, 75, 75) ;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
  `;
  export const ChoiceSelection = styled.div`
  min-width: 20rem;
  display: flex;
  justify-content: space-between;
  padding: 5px;
  align-items: center;
  `;

  export const Add = styled.button`
  outline: none;
  border: none;
 padding: 5px 10px;
  font-weight: 500;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
  color: #fff;
  min-width: 5rem;
background:#2b4f81 ; 
  box-shadow: 7px 7px 20px grey, -7px -7px 20px white;

  `;
  export const Price = styled.button`
  outline: none;
  border: none;
 padding: 5px 15px;
  font-weight: 500;
  min-width: 5rem;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
  color: #fff;
  background:#F0830E; 
 box-shadow: 7px 7px 20px grey, -7px -7px 20px white;

  `
   export const Remove =  styled.button`
   outline: none;
  border: none;
 padding: 5px 15px;
  font-weight: 500;
  min-width: 5rem;
  font-size: 1rem;
  border-radius: 15px;
  cursor: pointer;
  color: #fff;
  background:#2b4f81 ; 
 box-shadow: 7px 7px 20px grey, -7px -7px 20px white;
   `;
 export const CandidatesContainer = styled.div`
//  background: green;
 padding:0.5rem;
 padding: 0.5rem 2rem;
 display: flex;
 justify-content: space-between;
 align-items: center;
 width: 100%;
 `;

 export const CandidatesLabel = styled.label`
 color: rgb(77, 75, 75) ;
  font-size: 1rem;
  font-weight: 500;
  margin: 0;
 
 `;
  export const NumberofCandidates = styled.input`
  padding: 0.2rem;
  outline: none;
  border: none;
  border-radius: 5px;
  border: 2px solid #2b4f81; 
   
   `;


export const CartContainer = styled.div`
padding: 0.5rem;
display: flex;
justify-content: flex-end;
width:100%;

`;

export const Cart = styled.i`
color:#020659 ;
font-size: 2rem;
`;

export const CheckboxInput = styled.input`
// position: relative;
// display: none;

// &:checked + Label:after{
//     transform: scale(1)
// }
 `;
export const Label = styled.label`
position: relative;
font-size: 1rem;
cursor: pointer;
&:before{
    content: '';
    background: #fff;
    border: 2px solid #ddd;
    
    width: 1.7rem;
    display: inline-block;
    height: 1.7rem;
    position: absolute;
    left: -30px;
    
}
&:after{
    content: "\\2713";
    border-radius: 5px;
    display: inline-block;
    position: absolute;
    left: -25px;
    top:-0.8rem;
    font-size: 2rem;
    color:  #020659;
    font-weight: 900;
    transform: scale(0);
    transition: transform 0.2s linear;
}

`;

export const FormSubmission = styled.button`
margin: 1rem auto 0.5rem auto;
outline: none;
border: none; 
background: #020659; 
border-radius: 50px;
font-weight: 700;
font-size: 1rem;
color: white;
cursor: pointer;
padding: 0.5rem 2rem;
font-weight: 600;
box-shadow: 14px 14px 20px grey, -14px -14px 20px white;

 `;