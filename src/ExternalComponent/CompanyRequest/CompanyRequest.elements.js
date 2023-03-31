import styled from 'styled-components';

import { Link } from 'react-router-dom';

  export const RequestContainer = styled.div`
    padding:0 1rem;
  margin: 5rem auto 0 auto;
  width: 70%;
  
  `;
  
 export const  CompanyRequestTable = styled.table`
 width: 100%;
 border-collapse: collapse;
 box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px !important;

 `;
 export const  TableHeading = styled.thead`
 border-bottom: 2px solid #f1f1f1;
 `;
 
 export const TableRow = styled.tr`
 padding: 1rem;
 `;

 export const TableHead = styled.th`
 border-collapse: collapse;
 background: none!important;
 border: none;
 color: #2b4f81 !important;
 font-size: 1rem;
 `;

 export const TableBody = styled.tbody`
 
 `;
 export const  TableData = styled.td`
 border-collapse: collapse;
 border: none!important;

 `;

 export const ProcessLink = styled(Link)`
 color: #2b4f81 !important;
 border: 2px solid #F79E1B;
 padding: 0.4rem 1rem;
 border-radius: 20px;
//  background: #f1f1f1;
 `;