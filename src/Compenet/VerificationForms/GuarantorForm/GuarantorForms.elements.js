import styled from 'styled-components';
import { Field, Form} from "formik";

export const DeclarationText = styled.p`
font-size: 1rem;
color: #2b4f81;
`;
export const DeclarationTextContainer= styled.div`
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: flex-start;
`;
 export const DeclarationContent= styled.p`
 `;
export const DeclarationField = styled.div`
width: 100%;
display: flex;
margin-bottom: 1rem;

`;

export const Declaration = styled.div`
width: 65%;
`;

export const Declaration2 = styled.div`
width: 35%;
`;

export const SpanText = styled.label`
font-size: 1rem;
margin-right: 0.3rem;
color: #2b4f81;

`;
export const DeclarationName =styled(Field)`
width: 93%;
padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
`;

export const DeclarationNationality = styled(Field)`
padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
width: 93%;
`;

export const DeclarationAddress = styled(Field)`
width: 100%;
padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
`;
export const ApplicantField = styled.div`
width: 100%;
 display: flex;
 justify-content: center;
 margin-bottom: 1rem;
`;
export const ApplicantName = styled(Field)`
width: 100%;
padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
`
export const DateField = styled.div`
width: 100%;
display: flex;
justify-content: space-between;

`;
 export const DeclarationDateSignature = styled.div`
 width: 48%;
 display: flex;
 flex-direction: column;
 padding: 5px;

 `;

  export const DateSignatureText = styled(Field)`
//   width: 60%;
// color: color: rgb(77, 75, 75) !important;
// border-radius: 5px;
// display: none;
  width: 77%;
  padding: 5px;
    outline: none;
    color: grey;
    border: 1px solid #2b4f81;
    border-radius: 5px;
    display: none;
  `;
  