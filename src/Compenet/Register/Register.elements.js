import styled from 'styled-components';

export const ValidateError = styled.div`
color: #e87c03;
font-size: 14px;
 padding: 0px 10px;
 text-align: center;
 font-weight: 600;
`;

export const CandidatesContainer = styled.div`

width:26rem;
display: flex;
margin: 3rem auto 2rem auto;
justify-content: center;
box-sizing: border-box;
padding: 1rem;
border-radius: 20px;
z-index: 1000
position: relative;

&::before{
    content: '';
    background: blue;
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50% ;
    bottom: -1rem;
    left:28rem;
    z-index: -20;
}

&::after{
    content: '';
    background: blue;
    position: absolute;
    width: 5rem;
    height: 5rem;
    border-radius: 50% ;
    top: 2rem;
    right:28rem;
    z-index: -20;
}
`