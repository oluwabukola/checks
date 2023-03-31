import styled from 'styled-components';
import { Field, Form} from "formik";
import { Link as LinkR } from 'react-router-dom';

 export const Container = styled.div`
 margin: 4rem 0.5rem 0.5rem 0.5rem;
 display: flex;
 align-items: center;
 justify-content: center;
 padding:20px;
 `;

export const Forms= styled.form`
padding:20px 15px;
 background: #fff;
 border-radius: 30px;
 width: 50rem;
 display: flex;
 flex-direction: column;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//  box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
`;


export const FormikForm = styled(Form)`
padding:20px 15px;
 background: #fff;
 border-radius: 30px;
 width: 50rem;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;
export const FormikForm2 = styled(Form)`
padding:20px 15px;
 background: #fff;
 border-radius: 30px;
 width: 40rem;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

`;

export const PassportContainer = styled.div`

width: 50%;
min-height: 10rem;
box-sizing: border-box;
margin-bottom: 1rem;
align-self: flex-start;

padding:1rem;

`;

 export const PassportPhotograph = styled.div`

background: #fff;
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
border: 2px solid #2b4f81;
width: 10rem;
height:10rem;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center !important;
flex-direction: column;
svg{
  font-size: 2.3rem;
  color:#020659 !important;
}
 `;

 export const UploadForm = styled.form`

display: flex;
justify-content: flex-start;
align-items: center;
padding: 0.5rem;
margin-top: 1rem;
 `;

 export const UploadText = styled.div`
 margin-right: 0.7rem;
 `;
  export const Camera = styled.div`
  
  `;
 export const FileInput = styled.input`
 display: none;

 `;

 export const InputLabel = styled.label`
 cursor: pointer;
 margin-bottom: 0;
   svg{
 font-size: 2.5rem;
}
 
 `;


  export const FormField = styled.div`
   display: flex;
   flex-direction: column;
  width: 100%;
    margin-bottom: 1rem;

  `;
  export const FormInputContainer = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 0.5rem;
  `
 export const FormLabel = styled.label`
 font-size: 1rem;
 font-weight: 400;
 color: #2b4f81;
 margin-right: 0.5rem;
width: 100%;

 `;

 export const FormInput = styled(Field)`
width: 100%;
padding: 5px;
outline: none;
 color: rgb(77, 75, 75) ;
border: 1px solid #2b4f81 ;
border-radius: 5px;
 `;

 export const FormRow = styled.div`
 display: flex;
 width: 100%;
 `;
  export const SubTitle = styled.div`
//   background: blue;
  
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  margin: 1rem 0 2.5rem 0;
  `;

  export const SubTitleText = styled.div`
  font-size: 1rem;
  font-weight: 600;
  `;

  export const  FormRowField = styled.div`
  display: flex;
  justify-content:space-between;
  width: 100%;
  margin-bottom: 1rem;
  `;
  export const FormRowLabel = styled.label`
  // width: 10%;
  margin-left:4.8%;
  font-size: 1rem;
 font-weight: 400;
 color: #2b4f81;
  `;
export const FormRowContainer = styled.div`
display: flex;
flex-direction: column;
width: 47%;

`;
  export const FormRowInput = styled(Field)`
  //  width: 28%;
  width: 100%;
  padding: 5px;
  outline: none;
  color: color: rgb(77, 75, 75) !important;;
  border: 1px solid #2b4f81 ;
  border-radius: 5px;

  `;
  export const FormRowInput2 = styled(Field)`
  width: 100%;
  padding: 5px;
outline: none;
color: color: rgb(77, 75, 75) !important;;
border: 1px solid #2b4f81 ;
border-radius: 5px;
  `;

 

  export const ErrorMessage = styled.p`

  `;

 

  export const Images = styled.i`
  font-size: 2.5rem;
  color:#020659 !important;
  `;

  export const PassportImage = styled.img`
  width: inherit;
  height: inherit;
  border-radius: inherit;
  `;

  export const PassportImage2 = styled.img`
   width: 50%;
   height: 2rem;
  `;

export const Button = styled.button`
width: 20%;
background: #020659; 
border-radius: 50px;
font-weight: 900;
margin:24px 0 12px;
padding: 16px;
border: 0;
color: white;
cursor: pointer;
justify-self: center;
align-self: center;
box-shadow: 14px 14px 20px grey, -14px -14px 20px white;

`;

export const ValidateError = styled.div`
color: #e87c03;
font-size: 14px;
 padding: 0px 10px;
 text-align: center;
 font-weight: 600;
`

export const FirstLabel = styled.label`
font-size: 1rem;
font-weight: 400;
color: #2b4f81;
`;

export const FormFields = styled.div`
   display: flex;
    width: 100%;
    margin-bottom: 1rem;
    justify-content: space-between;

  `;
 export const NameContainer = styled.div`
 width: 48%;
 display: flex;
 flex-direction: column;
 padding: 5px;
 `;

 export const FormInput2 = styled(Field)`
 width: 100%;
 padding: 5px;
outline: none;
color: color: rgb(77, 75, 75) !important;;
border: 1px solid #2b4f81 ;
border-radius: 5px;
 `;


export const Signature = styled(Field)`
width: 60%;
color: color: rgb(77, 75, 75) !important;
border-radius: 5px;
display: none;
`;

export const SignatureTag = styled.div`
  width:100%;
  display: flex;
  `;

export const Tag = styled.i`
  font-size: 1.5rem;
  color:#020659 !important;
  `;
  
  export const InputLabel2 = styled.label`
  cursor: pointer;
  display: flex;
  margin-top: 0.3rem;
  width: 97%;
  justify-content: flex-end;
  align-self: center;
 border-bottom: 1px solid #020659;
  `;

 export const FormText = styled.p`
 color: #2b4f81;
font-size: 1rem;
font-weight: 500;
 `

 export const FormLink = styled(LinkR)`
color: #2b4f81 !important;

&:hover {
    text-decoration: underline;
}
`