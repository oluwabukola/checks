import styled from 'styled-components';
import { Field, Form} from "formik";

export const Content =  styled(Form)`
display: flex;
flex-direction: column;
`
export const ResultTable = styled.table`
width: 100%;
text-align: center;
color: grey;
border: none;
border-collapse: collapse;
border-spacing: 0;
overflow-x:auto;
`;

export const TableContainer =styled.div`
overflow-x:auto;
margin-bottom: 2rem;
`

export const ResultTableHead = styled.thead`
&:hover{
  background: #ccc;
}

`;

export const ResultRow = styled.tr`
&:hover{
  background: none;
}

`;

export const ResultHeading = styled.th`
background: none;
border: none;
color:#2b4f81;
`;
 export const TableInput = styled(Field)`
 width: 100%;
 height: 100%;
 padding: 0.5rem;
 border: none;
 outline: none;
 
 `;

export const ResultTableBody = styled.tbody`

`;

export const ResultData = styled.td`
padding: 0.2rem;

`; 

export const Note = styled.p`
font-size: 1.5rem;
font-weight: 500;
margin-bottom: 2rem;

`
export const Span = styled.span`
font-size: 1rem;


`;
 export const ResultCover = styled.div`
 width: 100%;
 display: flex;
 justify-content: space-between;
 `;

export const ResultFileContainer = styled.div`
width: 40%;
padding: 15px 20px;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
border: 5px;
// margin-bottom:2rem; 
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
`;

export const AttachResult = styled.div`
// background:#020659; 
background: #fff;
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
border-radius: 50%;
width: 3rem;
height: 3rem;
display: flex;
justify-content: center;
align-items: center;


`;

export const Attachment = styled.i`
font-size: 1.5rem;
color:#020659;
 
 `;

 export const UploadedFileContainer = styled.div`
 
 `;
  export const UploadedFile = styled.i`
  font-size: 2.5rem;

   color:#020659 !important;
  `;

  export const AddResult = styled.button`
width: 10rem;
font-size: 1rem;
font-weight: 600;
margin: 2rem 0 2rem 0;
outline: none;
border: none;
cursor: pointer;
padding: 1rem;
border-radius: 30px;
color:#2b4f81;
background: #fff;
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;

`;