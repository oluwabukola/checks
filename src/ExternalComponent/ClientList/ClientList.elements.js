import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`

display: grid;
grid-template-columns:repeat(3, 1fr);
grid-gap: 15px;
justify-content: center;
// margin: 4rem 0.5rem 0.5rem 0.5rem;
margin: 5rem 0.5rem 0.5rem 0.5rem;

padding: 10px;

@media (max-width:760px){
    grid-template-columns:repeat(2, 1fr);
}

`;
 export const CompanyContainer = styled.div`
 background: white;
 border: 2px solid #ccc;
 border-radius: 5px;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
 display: flex;
 justify-content: center;
 align-items: center;
 padding: 4rem 2rem;
 `;

  export  const CompanyContent = styled(Link)`
  padding: 1rem 3rem;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  color: #2b4f81 !important;
  outline: none;
  cursor: pointer;
  background: #fff;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//   border-top-left: 2px solid yellow;
//   border-bottom-right: 2px solid green;
border-top-left-radius: 20px;
border-bottom-right-radius: 20px;
  `
