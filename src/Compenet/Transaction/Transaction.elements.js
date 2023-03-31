import styled from 'styled-components';

export const TransactionContainer = styled.div`
margin: 10px;
display: flex;
padding: 20px 10px;
justify-content:center;
align-items: center;
`;

export const CardDetails = styled.div`
//  background: #fff;
width: 40%;
padding: 10px;
display: flex;
flex-direction: column;
 `; 

 export const TransactionHistory = styled.div`
 background: #fff;
 height: 5vh;
 margin-left: 10px;
 width: 58%;
 padding: 10px;
display: flex;
flex-direction: column;

 `;
  export const PaymentContainer = styled.div`
  
  `;

 export const Title = styled.h5`
 
 `;

 export const CardNumberContainer = styled.div`
   background: #fff;
   width: 70%;
   padding: 10px 20px;
   border-radius: 5px;
   box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
   display: flex;
   justify-content: flex-start;
   align-items: center;
   margin-right: 20px;
 `; 
 
 export const CardLogoContainer = styled.div`
 border: 1px solid #ccc;
  padding: 5px;
  min-width: 4rem;
  height: 2rem;
  margin-right: 0.5rem;
  position: relative;
  border-radius: 5px;
 `;

  export const MasterCard = styled.div`
  &::before{
    content: '';
    background: #EB001B;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50% ;
    bottom: 0.2rem;
    left:0.7rem;
}
&::after{
    content: '';
    background: #F79E1B;
    width: 1.5rem;
    height: 1.5rem ;
    border-radius: 50%;
    position: absolute;
    left:1.7rem;
   bottom:0.2rem;
  `;

   export const VisaCard = styled.div`
   &::before{
       content: 'Visa';
       position: absolute;
       left: 1rem;
   }
   `;

  export const CardNumber = styled.div`
  
  `;
   export const CardContainer = styled.div`
// background: yellow;
   padding : 5px;
   display: flex;
   justify-content: center;
   align-items: center;
   `
 
 export const RemoveCard = styled.button`
 border: none;
 outline: none;
 padding: 8px 15px;
 border-radius: 20px;
 cursor: pointer;
 `;

 export const PaymentTable = styled.table`
//  color: #2b4f81
 overflow: scroll;
border-collapse: collapse;
border: none;
width: 100% ;
`;
export const TableHead = styled.thead`
width: 100% ;

  
  `;
  export const PaymentRow = styled.tr`
  width: 100% !important;
  `;
   export const PaymentHeading = styled.th`
  
   color: green; 
      border: none;
   `;
  export const TableBody = styled.tbody`
    `;

  export const PaymentData = styled.td`
     `;