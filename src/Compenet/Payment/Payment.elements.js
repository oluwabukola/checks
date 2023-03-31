import styled from 'styled-components';

export const PaymentContainer = styled.div`
width: 35rem;
background: #fff;
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
padding: 10px 20px;
display: flex; 
margin-top: 4rem;
flex-direction: column;
justify-content: center;
align-items: center;
// border-radius: 30px;

`;

export const TopContainer = styled.div`
width: 10rem;
padding: 10px 20px;
height: 5rem;
background: #fff;
box-shadow: 7px 7px 10px grey, -7px -7px 10px white;
position: relative;;
top: -3rem;
`;
export const CardLogo = styled.div`

&::before{
    content: '';
    background: #EB001B;
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50% ;
    bottom: 0.8rem;
    left:3rem;
}
&::after{
    content: '';
    background: #F79E1B;
    width: 3rem;
    height: 3rem ;
    border-radius: 50%;
    position: absolute;
    left:5rem;
   bottom:0.8rem;
  
}
`;

export const NumberofCandidatesContainer = styled.div`
width: 100%;
padding: 0.5rem;
display: flex;
color: #2b4f81;

`;

export const NumberofCandidates = styled.label`
font-size: 1rem;
margin-right: 1rem;

`;
 export const CandidatesInput = styled.input`
 border: 1px solid #ccc;
 outline: none;
 padding: 0.2rem;
 border-radius: 5px;
 color: #2b4f81;

 `;
  export const Cart = styled.div`
  width: 100%;
  padding: 5px;
  height: auto;
  margin: 1rem 0 1rem 0;
  color: #2b4f81;
  cursor: pointer;
  `;
   export const CartItems = styled.div`
   width: 100%;
   display: flex;
   justify-content: space-between;
   height: auto;
   background: #fff;
   box-shadow: 7px 7px 10px grey, -7px -7px 10px white;

   `;

    export const Item = styled.div`
    padding: 5px 10px;
    `;

    export const ItemPrice = styled.div`
    padding: 5px 20px;
   
   `;
     export const PayNow = styled.button`
     border: none;
     outline: none;
      background: #020659;
     padding: 10px 20px;
     border-radius: 30px;
     color: #fff;
     `;

     export const Summary = styled.div`
     width: 100%;
    //  background: yellow;
     margin-bottom: 1rem;
     `;
     export const SummaryContent = styled.div`
        width: 100%;
        padding: 0.5rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
     `
      export const TypeSelected = styled.p`
      font-size: 1rem
      font-weight: bold
      color: #020659;
      `;
      export const PriceSelected = styled.p`
      font-size: 1rem
     
      `;
      export const TotalPrice = styled.div`
      font-size: 1rem;
      font-weight: 700;
      `;