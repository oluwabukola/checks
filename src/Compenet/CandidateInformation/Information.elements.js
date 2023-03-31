import styled from 'styled-components';

export const Container = styled.div`
margin: 1rem 0.5rem 0.5rem 0.5rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding:20px;
`;

export const FormField = styled.div`
   display: flex;
   flex-direction: column;
   padding: 0 1rem;
    width: 100%;
    margin-bottom: 1rem;
  `;
  export const FormField2 = styled.div`
   display: flex;
   flex-direction: column;
    width: 45%;
  `;

  export const FormLabel = styled.label`
  font-size: 1rem;
  font-weight: 400;
  color: #2b4f81;
  margin-right: 0.5rem;
 width: 100%;
  `;
  export const  FormRowField = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1rem;
  padding: 0 1rem;
  `;
  export const FormRowLabel = styled.label`
  // width: 40%;
  margin-left:4.8%;
  font-size: 1rem;
 font-weight: 400;
 color: #2b4f81;
  `;

  export const Form = styled.form`
padding:20px 15px;
 background: #fff;
 border-radius: 30px;
 width: 40rem;
 display: flex;
flex-direction: column;
justify-content: center;
 box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
 margin-bottom: 3rem;
 `;

 export const Input = styled.input`
 width: 100%;
padding: 5px;
outline: none;
 color: rgb(77, 75, 75) ;
border: 1px solid #2b4f81 ;
border-radius: 5px;
 `

//  table 

export const Content =  styled.form`
display: flex;
flex-direction: column;
`;

export const TableInput = styled.input`
width: 100%;
height: 100%;
padding: 0.5rem;
border: none;
outline: none;
`;

export const DeclarationName =styled.input`
width: 85%;
padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
`;

export const DeclarationNationality = styled.input`

padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
`;

export const DeclarationAddress = styled.input`
width: 96%;
padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
`;

export const ApplicantName = styled.input`
width: 100%;
padding: 5px;
outline: none;
color: grey;
border: 1px solid #2b4f81 ;
border-radius: 5px;
`;


export const DateSignatureText = styled.input`
width: 77%;
padding: 5px;
  outline: none;
  color: grey;
  border: 1px solid #2b4f81;
  border-radius: 5px;
  display: none;
`;

export const Signature = styled.input`
width: 60%;
color: color: rgb(77, 75, 75) !important;
border-radius: 5px;
display: none;
`

export const VerificationContainer = styled.div`

display: flex;
justify-content: flex-start;
margin: 1rem 0;
padding: 0.5rem;

`;

 export const VerifyButton = styled.button`
  padding: 0.5rem 1.5rem;
  margin: 0 !important;
 outline: none;
 border: 2px solid #2b4f81;
 border-radius: 20px;
 color: #2b4f81;
 font-size: 1rem;
 background: #fff;
 font-weight: 600;
 svg{
  margin-right:0.5rem;
  font-size: 1.2rem;
  color:black !important;
  // color: #EB001B !important ;
 }
 `;


 export const VerificationStatus = styled.div`
//  background-color: green;
 display: flex;
 justify-content: flex-end;
 padding: 0.5rem;
 
 
 `
 export const Uncertainty = styled.div`
 width: 3rem;
 height: 3rem;
 background: red;
 padding: 0.5rem;
 border-radius: 50%;
 display: flex;
 justify-content: center;
 align-items: center;
 svg{
  color: #ffff !important;
  font-size: 3rem;
}
 `;
  export const Certain = styled.div`
  width: 3rem;
  height: 3rem;
  background: green;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg{
   color: #ffff !important;
   font-size: 3rem;
  
 }
  `;
