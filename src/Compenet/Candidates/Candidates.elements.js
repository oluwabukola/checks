import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CandidatesWrapper = styled.div`
// margin:  10px;
margin-top: 4rem;
display: flex;
flex-dirextion: column;
justify-content: center;
align-items: center;
padding:20px;
`;

export const CandidatesTable = styled.table`
overflow: scroll;
border-collapse: collapse;
border: none;
width: 100%;
`;
 export const TableHead = styled.thead`
 
 `;

 export const TableRow = styled.tr`
 border: none;
 `;

 export const TableHeading = styled.th`
 background: #fff;
 color: #2b4f81;
 border: none;
 `;

 export const CandidatesTableBody = styled.tbody`
 
 `;

 export const CandidatesTableData = styled.td`
 border: none;
 `;
  export const CandidatesDetails = styled(Link)`
  outline: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1.5rem;
  background: gold;
  border-radius: 1rem;
  color: #fff;
  `