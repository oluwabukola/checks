import styled from 'styled-components';
import {Link} from 'react-router-dom';


export const VerificationWrapper = styled.div`

margin: 4rem 0.5rem 0.5rem 0.5rem;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
padding:20px;
`;
 export const RequestWrapper = styled.div`
//  width: 25rem;

width: 70%;
 display: flex;
 padding: 10px 0;
flex-direction: column;
justify-content: center;
align-item: center;
// background: red;

 `;
  export const RequestContainer = styled.div`
  margin-bottom: 1.2rem;
  padding: 10px 10px;
  background: #fff;
    display: flex;
    justify-content:space-between;
  box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
  `;
   export const Time =styled.p`
   font-size: 1.2rem;
   align-self: center;
    margin: 0;
   `;

   export const Request = styled(Link)`
    border:   1px solid #F79E1B;
    box-shadow: 5px 5px 10px grey, -5px -5px 10px white;
      padding: 0.4rem 2rem;
     border-radius: 30px;
    ouline: none;
     background: #fff;
      font-size: 1rem;
      color:#2b4f81 !important;
      font-weight: 600;
    EB001B;
 
    `;
 export const VerificationContent = styled.div`
//  width: 50%;
width: 80%;
 height: auto;
 background: #fff;
 padding: 20px 10px;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 border-radius: 5px;
 `;

export const CreateVerification = styled.button`
outline: none;
border: none;
font-size: 1rem;
background:#2b4f81;
color: #fff;
padding: 10px 15px;
cursor: pointer;
display: flex;
margin-left: auto;
border-radius: 20px;
align-self: flex-end;

`;

export const VerificationContentContainer = styled.div`
width: 70%;
padding: 10px;
color: #fff;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
margin-bottom: 20px;
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
border-left: ${({green}) => ( green ? '3px solid green' : '3px solid yellow')}

`;
export const VerificationContentView = styled.div`
width: 70%;
display: flex;
justify-content: space-between;
margin-bottom: 0.5rem;
`

export const VerificationChoice = styled.div`
color: #2b4f81;
font-size: 1rem;
font-weight:600;
margin-left: 10px;
`;

export const ViewCandidate = styled.button`
color: #2b4f81;
outline: none;
border: none;
padding: 7px 15px;
cursor: pointer;
border-radius: 20px;
font-size: 1rem;
font-weight: 500;
margin-left: 1rem;
margin-bottom: 1rem;

`;

export const ViewCandidateLink= styled(Link)`
color: #2b4f81 !important;
`;

export const ViewLink = styled.div`
display: flex;
flex-direction: column;
align-self: flex-end
`;

export const LinkContainer = styled.div`
display: flex;
flex-direction: column;
`;

export const SignupLink = styled(Link)`
// width: 5rem;
// height: 1rem;
color: #2b4f81 !important;
// font-size: 1rem;
`;

export const RequestTable = styled.table`
overflow: auto;
border-collapse: collapse;
border: none;
width: 100%;
border-radius: 5px !important;
padding: 2rem 0 2rem 0 !important;
`;
export const RequestBody = styled.tbody`

`;
 export const RequestHead = styled.thead`
 `

 export const TableHead = styled.th`
 background: #fff;
 color: #2b14f8;
 border: none;
 `;
  export const TableRow = styled.tr`
  border: none;
  margin: 1rem 0 !important;
  padding:2rem 0 2rem 0 !important;
  `;

  export const TableData= styled.td`
  border: none;

  `;

  export const NoOrder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  `;

   export const SmileText = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color:#2b4f81;8;
   `;

   export const Smiley = styled.div`
   margin-bottom: 0.5rem;
   svg{
    font-size:5rem !important;
    color:  #F79E1B;

   `;