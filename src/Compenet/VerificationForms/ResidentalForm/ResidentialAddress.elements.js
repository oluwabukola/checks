import styled from 'styled-components';
import { Field, Form} from "formik";

export const DateSignature = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
`;
export const SignatureContainer = styled.div`
width: 44%;
padding: 5px;
display: flex;
align-items: center;
justify-content: center;
`;

export const SignatureLabel = styled.label`
width: 7rem;
font-size: 1rem;
 font-weight: 400;
 color: #2b4f81;
 align-items: center;

`;
export const Signature = styled(Field)`
width: 60%;
color: color: rgb(77, 75, 75) !important;
border-radius: 5px;
display: none;
`;

export const DateContainer = styled.div`
width: 52%;
display: flex;
flex-direction: row
align-items: center;
justify-content: center;


`;
export const Date = styled(Field)`
width: 70%;
poutline: none;
border: none;
border-radius: 5px;

`;

 export const DateLabel = styled.label`
width: 16rem;
 font-size: 1rem;
 font-weight: 400;
 color: #2b4f81;
 `;

export const SignatureTag = styled.div`
  width:100%;
  display: flex;
  `;

export const Tag = styled.i`
  font-size: 1.5rem;
  color:#020659 !important;
  `;
  
  export const InputLabel = styled.label`
  cursor: pointer;
  display: flex;
  width: 90%;
  justify-content: flex-end;
  align-self: center;
 border-bottom: 1px solid #020659;
  `;

  export const FormLabel = styled.label`
 font-size: 1rem;
 font-weight: 400;
 color: #2b4f81;
 margin-right: 0.5rem;
 width: 23%;
 `;
