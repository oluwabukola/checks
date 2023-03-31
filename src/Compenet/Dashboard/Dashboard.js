import React, { useState } from 'react';
import {
    Username, DashboardOptions, TransactionOption,
    ReportOption, CandidateOption, Graph, DashboardContent,
    GraphContainer, GraphTitle, CardLogo, CardNumber, CardValidity,
    ValidityTitle, ValidityDate, CardName, CardTypeLogo, CardType,
    CardContainer, LeftContainer, RightContainer, MainTitle, MainPrice, ReportWrapper
} from './Dashboard.elements';
import chip from './chip.png';
import { withRouter } from "react-router";
 import {CandidatesWrapper, CandidatesTable, TableHead, TableRow,
    TableHeading, CandidatesTableBody, CandidatesTableData, CandidatesDetails
} from '../Candidates/Candidates.elements';

import {ImCart} from 'react-icons/im';
import {RiTaskLine} from 'react-icons/ri';
import {FaCcAmazonPay, FaTasks} from 'react-icons/fa';


const Dashboard = () => {
    const [userName, setUserName] = useState('Ella');
    const [Cardname, setCardname] = useState('OLUWABUKOLA BAIYEWU');
    const [Cardnumber, setCardnumber] = useState('2222 3333 **** ****')
    const [month, setMonth] = useState('02');
    const [year, setYear] = useState('22');
    return (
        <>
            <DashboardContent>
                <Username>Hello, {userName}</Username>
              
                <DashboardOptions>

                <CardContainer>
                      <LeftContainer>
                    <FaCcAmazonPay  style={{color: '#ed9121'}}/>
                      </LeftContainer>

                      <RightContainer>
                    <MainTitle>Payment</MainTitle>
                    <MainPrice>#300,000</MainPrice>

                      </RightContainer>
                    </CardContainer>
                  
                  <CardContainer>
                      <LeftContainer>
                    <FaTasks/>
                      </LeftContainer>

                      <RightContainer>
                    <MainTitle>verified</MainTitle>
                    <MainPrice>100</MainPrice>

                      </RightContainer>
                    </CardContainer>

                    <CardContainer>
                      <LeftContainer>
                    <ImCart />
                      </LeftContainer>

                      <RightContainer>
                    <MainTitle>Order</MainTitle>
                    <MainPrice>200</MainPrice>
                      </RightContainer>
                    </CardContainer>



                    {/* <TransactionOption>
                        <CardLogo src={chip} />
                     
                        <CardNumber>{Cardnumber}</CardNumber>
                         <CardValidity> 
                            <ValidityTitle>VALID<br />THRU </ValidityTitle>
                            <ValidityDate>{ month }/{year} </ValidityDate>
                       
                         </CardValidity> 
                        <CardName>{Cardname}</CardName>
                        <CardTypeLogo></CardTypeLogo>
                        <CardType></CardType>
                    </TransactionOption> */}
                   
                    {/* <TransactionOption>
                        <CardLogo src={chip} />
                     
                        <CardNumber>{Cardnumber}</CardNumber>
                         <CardValidity> 
                            <ValidityTitle>VALID<br />THRU </ValidityTitle>
                            <ValidityDate>{ month }/{year} </ValidityDate>
                       
                         </CardValidity> 
                        <CardName>{Cardname}</CardName>
                        <CardTypeLogo></CardTypeLogo>
                        <CardType></CardType>
                    </TransactionOption> */}
                   
                    {/* <CandidateOption>
                    </CandidateOption> */}

                {/* <ReportOption></ReportOption> */}
            </DashboardOptions>
             <GraphContainer>
                <GraphTitle>Result</GraphTitle>

                <ReportWrapper>
              <CandidatesTable>
                  <TableHead>
                      <TableRow>
                        <TableHeading>S/N</TableHeading>
                          <TableHeading>First Name</TableHeading>
                          <TableHeading>Last Name</TableHeading>
                          <TableHeading>Email</TableHeading>
                          {/* <TableHeading>Status</TableHeading>
                          <TableHeading>Details</TableHeading> */}
                      </TableRow>
                  </TableHead>
                  <CandidatesTableBody>
                      
                      <TableRow>
                      <CandidatesTableData>1</CandidatesTableData>
                          <CandidatesTableData>Ojire</CandidatesTableData>
                          <CandidatesTableData>Ojire</CandidatesTableData>
                          <CandidatesTableData>jire@gmail.com</CandidatesTableData>  
                      </TableRow>

                      <TableRow>
                      <CandidatesTableData>2</CandidatesTableData>
                          <CandidatesTableData>Jude</CandidatesTableData>
                          <CandidatesTableData>Jade</CandidatesTableData>
                          <CandidatesTableData>de@gmail.com</CandidatesTableData>
                      </TableRow>

                      <TableRow>
                      <CandidatesTableData>3</CandidatesTableData>
                          <CandidatesTableData>Rush</CandidatesTableData>
                          <CandidatesTableData>Brain</CandidatesTableData>
                          <CandidatesTableData>br@gmail.com</CandidatesTableData>
                      </TableRow>

                      <TableRow>
                      <CandidatesTableData>4</CandidatesTableData>
                          <CandidatesTableData>Tom</CandidatesTableData>
                          <CandidatesTableData>Cully</CandidatesTableData>
                          <CandidatesTableData>cu@gmail.com</CandidatesTableData>
                      </TableRow>

                      <TableRow>
                      <CandidatesTableData>5</CandidatesTableData>
                          <CandidatesTableData>Philip</CandidatesTableData>
                          <CandidatesTableData>Philip</CandidatesTableData>
                          <CandidatesTableData>ph@yahoo.com</CandidatesTableData>
                      </TableRow>


                     
                  </CandidatesTableBody>
              </CandidatesTable>
              </ReportWrapper> 
                <Graph />
            </GraphContainer>
           
            </DashboardContent>
        </>
    )
}

export default Dashboard ;
