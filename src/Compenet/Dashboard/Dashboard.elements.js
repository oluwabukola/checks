import styled from 'styled-components';

export const DashboardContent = styled.div`
display: flex;
/* background:#fff; */
flex-direction: column;
justify-content: center;
height: auto;
margin: 4rem 0.5rem 0.5rem 0.5rem;
// margin: 1rem 0.5rem;
padding: 0.5rem;
`;
export const Username = styled.h1`
font-size: 2rem;
padding: 0.5rem 0;
/* font-weight: bold; */
color: #2b4f81;

`;
export const DashboardOptions = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: space-between;
border-bottom: 1px solid grey;
margin-bottom: 1rem;
`;

export const TransactionOption = styled.article`
width:21rem;
height: 10rem;
background: #fff;
margin-bottom: 1rem;
display: flex;
flex-direction: column;
position: relative;
/* box-shadow: inset 6px 6px 6px #cbced1, inset -6px -6px 6px #cbced1; */
border-radius: 25px;
box-shadow:  16px 16px 18px #cbced1, -16px -16px 18px #cbced1;
padding: 0.3rem;
box-sizing: border-box
`;

export const CandidateOption = styled.article`
width:21rem;
height: 10rem;
/* background:#ecf0f3; */
/* background: #91B7D9; */
/* background:#418ADE; */
background: #3960C0;
margin-bottom: 1rem;
opacity: 0.2;
border-radius: 20px;
box-shadow:  16px 16px 18px  #000, -16px -16px 18px #000;

`;

export const ReportOption = styled.div`
width:21rem;
height: 10rem;
background: blue;
margin-bottom: 1rem;
background: #fff;
box-shadow:  16px 16px 18px #cbced1, -16px -16px 18px #cbced1;
border-radius: 25px;
`;
export const GraphContainer = styled.div`
padding: 0.5rem 0;
`;

export const GraphTitle = styled.h2`
// color: #2b4f81;
color: rgba(0,0,0,0.2)
font-size: 2rem;
 `;

export const Graph = styled.div`
 `;

export const CardLogo = styled.img`
width: 4rem;
position: absolute;
bottom: 6rem;
left: 1rem;
 `;

export const CardNumber = styled.div`
position: absolute;
top: 3.8rem;
left: 3rem;

 `;

export const CardValidity = styled.h6`
display:flex;
justify-content: center;
align-items: center;
position: absolute;
top: 5rem;
left: 8rem;
text-transform: uppercase;
line-height: 1em;
font-weight: 300;
font-size: 0.7rem;

 `;
export const ValidityTitle = styled.span`
margin-right: 0.4rem;

`;

export const ValidityDate = styled.span`
`;
export const CardName = styled.div`
position: absolute;
left: 1rem;
bottom: 0.5rem;
 `;
export const CardTypeLogo = styled.div`
&::before{
    content: '';
    background: #EB001B;
    position: absolute;
    width: 3rem;
    height: 3rem;
    border-radius: 50% ;
    bottom: 0.5rem;
    left:15.5rem;
}
&::after{
    content: '';
    background: #F79E1B;
    width: 3rem;
    height: 3rem ;
    border-radius: 50%;
    position: absolute;
    left:17rem;
   bottom:0.5rem;
  
}
 `;

export const CardType = styled.div`
 `;


export const  CardContainer = styled.div`
background-color: #fff;
border-radius: 25px;
padding: 2rem 3rem 2rem 2rem ;
box-shadow:  10px 10px 10px #cbced1, -10px -10px 10px #cbced1;
width: 20rem;
margin-bottom: 2rem;
display: flex;
justify-content: space-between;
align-items: flex-start;
`
export const LeftContainer = styled.div`
background-color: #fff;
padding:1rem;
border-radius: 50%;
box-shadow:2px 0px 3px rgba(0,0,0,0.3);

svg{
    font-size: 2rem;
    color: #008000;

}

`;
export const  RightContainer = styled.div`
`;
export const  MainTitle =styled.h3`
`;
export const MainPrice = styled.h5`

`;

export const ReportWrapper = styled.div`
display: flex;
flex-dirextion: column;
justify-content: center;
align-items: center;
padding:20px;
`